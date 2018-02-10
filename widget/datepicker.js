/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-10 13:35:13
 * @version $Id$


 #datePickerBox:after,#datePickerCon{
    position:fixed;
}
#datePickerCon{
    width:95%;
    top:25%;
    left:2.5%;
    z-index:101;
    background-color:#fff;
    text-align:center;
}
.clearfix:after{ content:"."; display:block; height:0; clear:both; overflow:hidden;}
.clearfix{ zoom:1;}
#year,#week div,#con div,#prevmonth{float:left;}
#week,#title,#prevmonth,#nextmonth,#year{height:48px;}
#year{width:70%;}
#prevmonth,#nextmonth,#year,#week div,#con div{line-height:50px;}
#week div,#con div{width:13.9%;height:48px;border: solid #ccc;border-width:0 1px 1px 0;color:#333;}
#week div{ background:#888; color:#ccc; }
#con div.now{background:#09F;color:#fff;}
#con div.histroy{color:#aaa;background-color: #ddd;}

#nextmonth{float: right;}
#prevmonth,#nextmonth{width:14%;}
 */
var DatePicker = function (o){
  this.autoInit(o);
  //this.omonth=document.getElementById("month");
  this.oyear = this.getById("year");
  this.con = this.getById("con");
  this.prevmonth = this.getById("prevmonth");
  this.nextmonth = this.getById("nextmonth");
  //this.prevyear = this.getById("prevyear");
  //this.nextyear = this.getById("nextyear");
  this.nowtime = this.getById("nowtime");
  this.date = this.getById("date");
  this.box = this.getById("datePickerBox");
  //this.cleartime=document.getElementById("cleartime");
  //默认时间对象
  this.dateObj = new Date();
  var oneweek=this.oneyearoneday(this.dateObj);
  //本月总日数
  var alld=this.alldays(this.dateObj);
  //当前是几
  var nowd=this.nowday(this.dateObj);
  this.init(oneweek,alld,nowd);
  this.hadler();
  this.setTitDay();
}

 //===================get ele=============================== 

 //===================show date===============================
DatePicker.prototype = {
  getById:function(o){
    return document.getElementById(o);
  },
  hadler:function(){
    var self = this;
    this.date.onfocus=function(){//显示控件
    
      self.box.style.display="block";console.log('setInit')
      self.setTitDay();

       //月年的显示
       //self.omonth.innerHTML=month;
       //year; 
     }; 
    this.con.onclick = function(event){

      if(event.target.tagName=="DIV" && event.target.nodeType=="1" && self.hasclass(event.target.className,"edate")){//过了日期也不能 
         self.date.value="";
        _self.datebg = false;
         self.date.value=self.dateObj.getFullYear()+"-"+ self.toyear(self.dateObj)+"-"+event.target.innerHTML;
          console.log(self.date.value);
          _self.date.value=self.date.value;
          _self.date.text=_self.date.value;//获取时间
         self.box.style.display="none";
      };
     };
    /*this.cleartime.onclick=function(event){
      self.date.value="";
     };
     动态控制*/
    this.prevmonth.onclick=function(){//上一月
      var ddm=null;
      var ddy=null;
      if((self.dateObj.getMonth()-1)==-1){
       ddm=11;
       ddy=self.dateObj.getFullYear()-1;
      }else{
       ddm=self.dateObj.getMonth()-1;
       ddy=self.dateObj.getFullYear();
      };
      self.dateObj.setFullYear(ddy);
      self.dateObj.setMonth(ddm);
      self.setTitDay();
      self.remove();
      var oneweek = self.oneyearoneday(self.dateObj),
          alld = self.alldays(self.dateObj),
          nowd=self.nowday(self.dateObj);
      self.init(oneweek,alld,nowd);
     };
    this.nextmonth.onclick=function(){//下一月
      var ddm=null;
      var ddy=null;
      if((self.dateObj.getMonth()+1)==12){
       ddm=0;
       ddy=self.dateObj.getFullYear()+1;
      }else{
       ddm=self.dateObj.getMonth()+1;
       ddy=self.dateObj.getFullYear();
      };
      self.dateObj.setFullYear(ddy);
      self.dateObj.setMonth(ddm);
      self.setTitDay();
      self.remove();
      var oneweek = self.oneyearoneday(self.dateObj),
          alld = self.alldays(self.dateObj),
          nowd = self.nowday(self.dateObj);
      self.init(oneweek,alld,nowd);  
     };
   },
  setTitDay:function(){
  
      var oyue = this.dateObj.getFullYear()+"年"+this.toyear(this.dateObj)+"月";
      this.oyear.innerHTML = oyue;
   },
  oneyearoneday : function (dateObj){//获取本月1号的周值
    var oneyear = new Date();
    var year=this.dateObj.getFullYear();
    var month=this.dateObj.getMonth();//0是12月
    oneyear.setFullYear(year);
    oneyear.setMonth(month);//0是12月
    oneyear.setDate(1);
    return oneyear.getDay();  
   },
   //当前是几
  nowday : function (dateObj){
    return dateObj.getDate();
   },
   //获取本月总日数方法
  alldays : function (dateObj){
    var year=this.dateObj.getFullYear();
    var month=this.dateObj.getMonth();
    if(this.isLeapYear(year)){//闰年
     switch(month) { 
     case 0: return "31"; break; 
     case 1: return "29"; break; //2月
     case 2: return "31"; break; 
     case 3: return "30"; break; 
     case 4: return "31"; break; 
     case 5: return "30"; break; 
     case 6: return "31"; break; 
     case 7: return "31"; break; 
     case 8: return "30"; break; 
     case 9: return "31"; break; 
     case 10: return "30"; break; 
     case 11: return "31"; break;   
     default:  
     };
    }else{//平年
     switch(month) { 
     case 0: return "31"; break; 
     case 1: return "28"; break; //2月 
     case 2: return "31"; break; 
     case 3: return "30"; break; 
     case 4: return "31"; break; 
     case 5: return "30"; break; 
     case 6: return "31"; break; 
     case 7: return "31"; break; 
     case 8: return "30"; break; 
     case 9: return "31"; break; 
     case 10: return "30"; break; 
     case 11: return "31"; break;   
     default:  
     };   
    };
   },
   //闰年判断函数
  isLeapYear : function (year){ 
    if( (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
     return true;
    }else{
     return false;
    }; 
   },
   //月份转化方法
  toyear : function (dateObj){ 
    var month=this.dateObj.getMonth()
    switch(month) { 
    case 0: return "1"; break; 
    case 1: return "2"; break; 
    case 2: return "3"; break; 
    case 3: return "4"; break; 
    case 4: return "5"; break; 
    case 5: return "6"; break; 
    case 6: return "7"; break; 
    case 7: return "8"; break; 
    case 8: return "9"; break; 
    case 9: return "10"; break; 
    case 10: return "11"; break; 
    case 11: return "12"; break;   
    default: 
    }; 
   },
  hasclass : function (str,cla){
    var i=str.search(cla);
    if(i==-1){
     return false;
    }else{
     return true;
    };
   },
   //初始化日期显示方法
  remove : function (){
      this.con.innerHTML="";
     },
  init : function (oneweek,alld,nowd){//每次转化触发这个
      for(var i=1;i<=oneweek;i++){//留空
       var eday=document.createElement("div");
       eday.innerHTML="";
       this.con.appendChild(eday);
      };
      for(var i=1;i<=alld;i++){//正常区域
       var eday=document.createElement("div");
       if(i==nowd && this.dateObj.getMonth()==((new Date()).getMonth()) ){     //判断，未来，过去，现在
        eday.innerHTML=i;
        eday.className="now edate";
        this.con.appendChild(eday);
       }else{
       		if( (this.dateObj.getFullYear()==(new Date()).getFullYear()&&this.dateObj.getMonth()==(new Date()).getMonth() && 
       			this.dateObj.getDate()<(new Date()).getDate()) || (this.dateObj.getFullYear()==(new Date()).getFullYear()&&this.dateObj.getMonth()<(new Date()).getMonth() ) || this.dateObj.getFullYear()<(new Date()).getFullYear()  )
       		{
       			eday.innerHTML=i;
		        eday.className="histroy";
		        this.con.appendChild(eday);
       		}else{
       			eday.innerHTML=i;
		        eday.className="edate";
		        this.con.appendChild(eday);
       		}
       };
      };
    },
  autoInit:function(id){
      var ddbox=document.createElement("div");
      ddbox.id = id;
      ddbox.style.display="none";
      var str ="<div id='datePickerCon'>";
      str+='<div id="title"><div id="prevmonth"><</div><div id="year"></div><div id="nextmonth">></div></div>';
      str+='<div id="week"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div>';
      str+='<div id="con" class="clearfix"></div>';
      //str+='<div id="btns"><div id="nowtime">当前时间</div><div id="cleartime">清空</div></div></div>';
      ddbox.innerHTML=str;
      document.body.appendChild(ddbox);
      if(typeof fn == 'function'){
        fn();
      }
    }
}
 
 //===================set year month===============================

 
 /*年月获取 */

 //===================set day===============================
 
 /*获取本月1号的周值
 var oneweek=oneyearoneday(dateObj);
 //本月总日数
 var alld=alldays(dateObj);
 //当前是几
 var nowd=nowday(dateObj);
 //初始化显示本月信息
 init(oneweek,alld,nowd);*/
  
 //===================function===============================
 //有无指定类名的判断

 new DatePicker('datePickerBox')
