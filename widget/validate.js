define("widget/validate", [],function(require, exports, module) {
/**
*js表单操作
*@author  PeterYu
*@date    2017/12/12
*@package form
调用案例
<input type="number" class="form-control cash-valid" placeholder="必填" data-id="isMobile" required>
<input type="number" class="form-control cash-valid" placeholder="必填" data-id="isIdcard" id="idCard" required>
<input type="button" id="cashSubmit" class="btn btn-lg btn-primary btn-block" value="提交认证">
$("#cashSubmit").on('click',function(){
    var $this = $(this);
    validate['init']('.cash-valid',function(){
        $this.attr('type','submit');
    });
})
**/
var validate = {
            flag:true,
            spaceExp:/^\s*|\s*$/,//首尾空格
            nameExp:/^[\u4E00-\u9FA5]{2,4}$/,//真实姓名
            emptyExp:/^\S+$/,//非空验证
            idExp:/^(\d{14}|\d{17})(\d|[xX])$/,//身份证
            bankExp: /^([1-9]{1})(\d{14}|\d{18})$/,//银行卡
            phoneExp:/^0*(13|14|15|17|18)\d{9}$/,//手机号
            emailExp:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,//邮箱
            msg:{
                "nameMsg":"真实姓名不正确",
                "emptyMsg":"支付宝账号不正确",
                "idMsg":"身份证号不正确",
                "phoneMsg":"手机号不正确",
                "emailMsg":"邮箱格式不正确",
                "bankMsg":"银行卡号不正确",
                "frontMsg":"正面图有误",
                "backMsg":"背面图有误"
            },
            isEmpty:function(ipt,str){
                if(!this.emptyExp.test(str)){
                    this.errMsg(ipt,this.msg["emptyMsg"]);
                    return false;
                }
            },
            isFimg:function(ipt,str){
                if(!this.emptyExp.test(str)){
                    this.errImg(ipt,this.msg["frontMsg"]);
                    return false; 
                }
            },
            isBimg:function(ipt,str){
                if(!this.emptyExp.test(str)){
                    this.errImg(ipt,this.msg["backMsg"]);
                    return false;
                }
            },
            isChinese:function(ipt,str){
                if(!this.nameExp.test(str)){
                    this.errMsg(ipt,this.msg["nameMsg"]);
                    return false; 
                }
            },
            isIdcard:function(ipt,str){
                if(!this.idExp.test(str)){
                    this.errMsg(ipt,this.msg["idMsg"]);
                    return false; 
                }
            },
            isMobile:function(ipt,str){
                if(!this.phoneExp.test(str)){
                    this.errMsg(ipt,this.msg["phoneMsg"]);
                    return false; 
                }
            },
            isBank:function(ipt,str){
                if(!this.bankExp.test(str)){
                    this.errMsg(ipt,this.msg["bankMsg"]);
                    return false; 
                }
            },
            isEmail:function(ipt,str){
                if(!this.emailExp.test(str)){
                    this.errMsg(ipt,this.msg["emailMsg"]);
                    return false; 
                }
            },
            errMsg:function(ipt,str){
                var $obj = $(ipt);
                $obj.val('').attr('placeholder',str).focus(function() {
                    var $self = $(this);
                    $self.attr('placeholder','').next('span').remove()
                    $self.parent().removeClass('input-error');
                }).after("<span class='glyphicon glyphicon-remove form-control-feedback'><span>").parent().addClass('input-error');
            },
            errImg:function(ipt,str){
                var $obj = $(ipt),oldTxt=$obj.next('span').text();
                $obj.focus(function() {
                    var $self = $(this);
                    $self.next('span').text(oldTxt);
                    $self.parent().removeClass('input-error');
                }).next('span').text(str);
                $obj.parent().addClass('input-error');
            },
            init:function(obj,fn){
                var self = this;
                $(obj).each(function(index,element){
                    var $this = $(this),
                        id = $this.data('id'),
                        $val = $this.val().replace(self.spaceExp,'');
                    if(typeof self[id]=='function'){
                        self.flag = self[id](this,$val);
                    }
                });
                this.flag != false && fn();//校验成功回调
            }
        }
});