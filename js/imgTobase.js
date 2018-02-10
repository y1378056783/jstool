/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-10 10:34:33
 * @version $Id$
 图片上传即时显示
 <input type="file" id="frontBtn" data-id="isFimg"  class="col-md-5 f-opn f-wac f-pa cash-valid">
<input type="file" id="backBtn" data-id="isBimg"  class="col-md-5 f-opn f-wac f-pa cash-valid">
 <div class="col-md-4 col-xs-7 f-bd1 f-oh f-br5" id="imgWrap">
    <!--<canvas width="110" height="80"></canvas> --> 
    <!--<canvas width="110" height="80"></canvas>-->
</div>
$("#frontBtn").on('change',function(){
    var self = this;
    imgToBase(this,'frontImg',function(files){
        //console.log(files);
        var baseimg = files;
        //身份证图片识别
        $.post('/imgvalidate',{id_card_side: 'front',image:baseimg},function(res){
                console.log(res);
                if(res.image_status=='normal'){//识别成功
                    var idCode = res.words_result['公民身份号码'].words,
                        $card = $("#idCard"),
                        idVal = $("#idCard").val();
                        if(idCode != idVal){//图片与填写信息不匹配则清空身份证号一栏
                            errClear("#idCard",'#frontImg','图片与填写信息不符');
                        }
                    //console.log(res.words_result['公民身份号码'].words)
                }else{
                    errClear(self,'#frontImg','请按要求上传');
                    //alert(res.image_status);
                }
        })
    });
})
$("#backBtn").on('change',function(){
    var self = this;
    imgToBase(this,'backImg',function(files){
        //console.log(files);
        var baseimg = files;
        //身份证图片识别
        $.post('/imgvalidate',{id_card_side: 'back',image:baseimg},function(res){
                //console.log(res);
                if(res.image_status=='normal'){//识别成功
                    //console.log(res.words_result['失效日期'].words)
                    var expiryDate = res.words_result['失效日期'].words,  
                        today = formatDate();
                        if(expiryDate<today){//身份证过期
                            errClear("#idCard",'#backImg','身份证已过期');
                        }
                }else{
                    errClear(self,'#backImg','请按要求上传');
                    //alert(res.image_status);
                }
        })
    });
});
 */
function errClear(obj,img,msg){
    alert(msg)
    $(img).remove();
    $("#idImgWarp").addClass('f-dn');
    $(obj).val('');
}
function formatDate(){//日期格式化
    var d = new Date(),//日期
    year = d.getFullYear(),//年
    month = d.getMonth()+1,//月
    mon = month < 10 ? '0'+month : month,
    date = d.getDate(),//日
    today = year+mon+date;
    return today;
}
function imgToBase(file_btn,img_wrap,fn){
    var file = file_btn.files[0],
        filetxt=null,
        reg=/image\/\w+/;
        if(!reg.test(file.type)){ //判断是否为图片
            alert('请选择后缀为png/jpg/bmp图片文件')
            return false;
        }else if(Number(file.size) > 716800){//判断图片大小
            alert('图片大小不得超过700kb');
            return false;
        }else{
          var reader = new FileReader();
            reader.onload = function ( event ) {
                var imgTxt = event.target.result,
                    filetxt = imgTxt.split(',')[1],
                    //fileSize = (event.loaded/1024).toFixed(2),图片大小转换为kb
                    image = new Image();//document.createElement('img')
                    //ctx = document.getElementById(img_wrap).getContext('2d');
                    image.src = imgTxt;   
                    image.id = img_wrap;
                    image.onload =function(){  
                        var width = Number(image.width);  
                        var height = Number(image.height);
                        if(width<15||width>4000||height<15||height>4000){//图片大小介于15px-4000px中间
                            alert('图片尺寸不正确');
                        }else{
                            //console.log('width:'+width+'height:'+height+'fileSize:'+fileSize);  
                            $("#idImgWarp").removeClass('f-dn');
                            document.getElementById("imgWrap").appendChild( image );
                            //ctx.drawImage(image, 0, 0, 110, 80)将图片显示出来
                            fn(filetxt);
                        }
                    }/**/
            }
        }
    reader.readAsDataURL(file);
};
