let innerWidth=window.innerWidth,
    innerHeight=window.innerHeight,
    canvas=document.getElementById('canvas'),
    img=document.getElementById('cirImg'),
    cirArr,
    colorArr=['rgb(250, 112, 0)','rgb(0, 250, 167)','rgb(0, 179, 250)','rgb(242, 0, 250)','rgb(137, 0, 250)'],
    mouse={
        x:undefined,
        y:undefined
    },
    maxRadius=50,
    context=canvas.getContext('2d');
    canvas.width=innerWidth;
    canvas.height=innerHeight;
    var yImg = new Image();
        yImg.src = './md_static/img/favicon.ico';
//alert(innerWidth+'-'+innerHeight)
window.addEventListener('mousemove',function (event) {
    mouse.x=event.x;
    mouse.y=event.y;
    //console.log(event);
})    
window.addEventListener('resize',function (event) {
    canvas.width=this.innerWidth;
    canvas.height=this.innerHeight;
    init();
})
function Circle(x,y,dx,dy,radius) { 
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArr[Math.floor(Math.random()*colorArr.length)];//随机颜色
    this.draw=function(){
        /*yImg.onload=function(){
            console.log('改变this指针',this)
        }.call(this)*/
        context.drawImage(yImg,this.x,this.y,this.radius,this.radius);
        //context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        context.strokeStyle=this.color;//随机颜色
        
        //context.save();
        //context.globalAlpha=.3;
        //context.fillStyle=this.color;
        //context.restore();
        //context.stroke();
        //context.fill();
        //context.closePath();
    }
    this.update=function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy // friction 摩擦力（.9）
            //this.dy+=gravity重力（1）
        }
        if(mouse.x-this.x<50 && mouse.x-this.x> -50 && mouse.y-this.y<50 && mouse.y-this.y> -50){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }else if(this.radius>this.minRadius){
            this.radius-=1;
        }
        this.x += this.dx
        this.y += this.dy 
        this.draw();
    }
}
function init() { 
    cirArr=[];
    for(var i =0;i<1e2;i++){
        var radius=Math.random()*3+1,
            x=Math.random() * (innerWidth-radius*2)-radius,
            y=Math.random() * (innerHeight-radius*2)-radius,
            dx=(Math.random() - .5)*3,//x运行速度
            dy=(Math.random() - .5)*3;//y运行速度
        cirArr.push(new Circle(x,y,dx,dy,radius))
    }
}


function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    cirArr.forEach(function(el){
        el.update();
    })
    
}

init()
animate()