"use strict";

/*
Learn how to use Hexi to build a simple game prototype
*/

//An array that contains all the files you want to load
var thingsToLoad = ["img/resource.json"];

var win=window.innerWidth,hei=window.innerHeight;
//console.log(win);
//Create a new Hexi instance, and start it
var g = hexi(win, hei, setup, thingsToLoad,load);
//Set the background color and scale the canvas
//g.backgroundColor = "black";
g.scaleToWindow();

//Start Hexi
g.start();

//Declare your global variables (global to this game, which means you
//want to use them in more than one function)
var bg = undefined,
    player = undefined,
    score = undefined,
    mouse = undefined,
    hook = undefined,
    message = undefined,
    gameScene = undefined,
    scoreDisplay = undefined,
    scoreNum = undefined,
    ws = undefined,
    gameOverScene = undefined;
function load(){
  g.loadingBar()
}
//The `setup` function runs once and is used to initializes your game
function setup() {


  //The dungeon background
  bg = g.sprite("bg.png");//游戏背景

  var buttonFrames = ["up.png", "down.png"];
  player = g.button(buttonFrames);
  //The player sprite
  //player = g.sprite("up.png");游戏按钮
  player.x = g.canvas.width - player.width - 20;
  player.y = g.canvas.height - player.height;// / 2 - player.halfWidth;
  player.draggable = true;//可拖动属性
  //The player sprite
  score = g.sprite("score.png");//记分板
  score.x = g.canvas.width - player.width - score.width -40;
  score.y = g.canvas.height - score.height - 10;//g.canvas.height / 2 - player.halfWidth;score.x+score.y+
  scoreDisplay = g.text("0", "40px arial", "#fe0303",score.x+20, score.y+10);
  mouse = g.sprite("mouse.png");
  mouse.x = -177;
  mouse.y=g.randomInt(200, g.canvas.height-70);
  //mouse.rotation=45;
  //Create the treasure
  hook = g.sprite("hook.png");//抓手

  //Position it next to the left edge of the canvas
  hook.x = g.canvas.width / 2 - hook.width;
  hook.y = -g.canvas.height;
  
  //Alternatively, you could use Ga's built in convience method
  //called `putCenter` to postion the sprite like this:
  //g.stage.putCenter(treasure, 208, 0);

  //Create a `pickedUp` property on the treasure to help us Figure
  //out whether or not the treasure has been picked up by the player
  hook.pickedUp = false;//抓取宝盒动作默认不抓取
  
  //Create the `gameScene` group and add the sprites
  gameScene = g.group(bg,score,scoreDisplay,player,mouse,hook);//创建游戏主场景
  
  mouse.x++;
  mouse.vx = hook.vy = 5;
  hook.y++;
  scoreNum = 0;
  //Make the enemies
  /*var numberOfEnemies = 4,
      spacing = 48,
      xOffset = 150,
      speed = 2,
      direction = 1;

  An array to store all the enemies*/
  //mouse = [];

  //Make as many enemies as there are `numberOfEnemies`
  /*for (var i = 0; i < numberOfEnemies; i++) {//创建敌人元素

    //Each enemy is a red rectangle

    //Space each enemey horizontally according to the `spacing` value.
    //`xOffset` determines the point from the left of the screen
    //at which the first enemy should be added.
    var y = spacing * i + xOffset;

    //Give the enemy a random y position
    var x = g.randomInt(0, g.canvas.width - enemy.width);

    //Set the enemy's direction
    enemy.x = x;
    enemy.y = y;

    //Set the enemy's vertical velocity. `direction` will be either `1` or
    //`-1`. `1` means the enemy will move down and `-1` means the enemy will
    //move up. Multiplying `direction` by `speed` determines the enemy's
    //vertical direction
    enemy.vx = speed * direction;
//Push the enemy into the `enemies` array
    mouse.push(enemy);
    //Reverse the direction for the next enemy
    
    
  }
  
    //enemy.vx = speed * direction;
    enemy.x++;
    enemy.y = 200;
    //direction *= -1;*/

    //Add the enemy to the `gameScene`
   // gameScene.addChild(mouse);

  
  //Add some text for the game over message
  message = g.text("Game Over!", "64px Futura", "black");//消息提示
  message.x=(g.canvas.width-message.halfWidth-64)/2;
  message.y=(g.canvas.height-message.halfHeight-64)/2;
  //console.log(message.halfWidth);

  //Create a `gameOverScene` group and add the message sprite to it
  gameOverScene = g.group(message);//游戏结束层g.stage.putCenter(message)

  //Make the `gameOverScene` invisible for now
  gameOverScene.visible = false;//游戏结束层默认隐藏

  //g.arrowControl(player, 3);允许键盘控制
  player.press = function () {
    //console.log("The pointer was pressed");
      /*if (hook.pickedUp) {//播放音效
        console.log('老鼠被抓住啦！')
        g.wait(1000,function(){
        console.log('重新开始')
       })
        
        //If the treasure hasn't already been picked up,
        //play the `chimes` sound
        //chimes.play();
        hook.pickedUp = false;-5-g.randomInt(0,300)
      };
      var hookSlide=g.slide(hook, hook.x, -g.randomInt(0,300), 40, "acceleration");
        hookSlide.onComplete=function(){
          //console.log(this);
          g.slide(hook, hook.x, -g.canvas.height, 40, "acceleration");
          
        }*/
      
  }; 

  //Add a custom `release` method
  player.release = function () {
    //console.log("The pointer was released");
    
  };
  
  //Add a custom `tap` method
  player.tap = function () {
    //console.log("The pointer was tapped");
    
        
  };//g.canvas.width
  /*if ("WebSocket" in window){//与后端即时通信
     // 打开一个 web socketws://echo.websocket.org
     ws = new WebSocket("ws://192.168.10.36:8088");
     ws.onopen = function(){
        //使用 send() 方法发送数据
        ws.send('抓住老鼠数量:'+scoreNum);
        console.log("WebSocket 已连接上");
     };
     ws.onmessage = function (evt){ 
        var received_msg = evt.data
        console.log("数据已接收:"+received_msg);
     };
     ws.onclose = function(){ 
        // 关闭 websocket
        console.log('关闭 websocket')
     };
  }else{
     // 浏览器不支持 WebSocket
     alert("您的浏览器不支持 WebSocket!");
  }*/
  ajax()
  var hookSlide=g.slide(hook, hook.x, -g.randomInt(0,300), 80, "smoothstep",true);
  hookSlide.onComplete=function(){
    /*console.log(this);
     g.slide(hook, hook.x, -g.canvas.height, 40, "acceleration")*/
    if(hook.pickedUp) {//播放音效老鼠被抓
      mouse.x = -177;
      mouse.y=g.randomInt(200, 300);
      mouse.rotation=0;
      scoreNum += 1;
      hook.pickedUp=false;
    }
  }
 /* g.tilingSprite("images/tile.png", 128, 128);//平铺背景图片
  粒子爆炸效果
 var particleStream = g.particleEmitter(100, //The interval, in milliseconds
  function () {
    return g.createParticles( //The `createParticles` method
    g.pointer.x, g.pointer.y, function () {
      return g.sprite("images/star.png");
    }, g.stage, 50);
  });

  //Make the emitter create particles when the pointer is pressed
  g.pointer.press = function () {
    return particleStream.play();
  };
  
 逐帧动画
var pixieFrames = g.frames("images/pixieFrames.png", //The tileset image
  [[0, 0], [48, 0], [96, 0]], //The `x` and `y` positions of frames
  48, 32 //The `width` and `height` of each frame
  );
  //Make a sprite using the frames
  pixie = g.sprite(pixieFrames);
  pixie.fps = 24;
  pixie.playAnimation();*/
  //set the game state to `play`
  g.state = play;
}

//The `play` function contains all the game logic and runs in a loop
function play() {
	//g.followEase(player, g.pointer, 0.1);
  //Move the player
  //g.move(player);//人物移动
  //
  
  if(mouse.x>g.canvas.width){
    mouse.x=-177;
    //console.log('出屏幕了')
  };
  
  g.move(mouse);
  //g.slide(mouse,430, 200, 160, "smoothstep",true,0);
  if(g.hitTestRectangle(hook,mouse)) {//抓取老鼠
    //If the treasure is touching the player, center it over the player
    mouse.rotation=45;
    mouse.x = (hook.x+20);
    mouse.y = (hook.y + 320);
    hook.pickedUp=true;
  }

  scoreDisplay.content=scoreNum;
  /*if(scoreNum>=2){
    //console.log('超过10啦！')
    g.state = end;
    message.content = "You won!";
  }
  //Keep the player contained inside the stage's area
  g.contain(player, {保持人物在场景内
    x: 32, y: 16,
    width: g.canvas.width - 32,
    height: g.canvas.height - 32
  });g.move(mouse);*/
  
  //Move the enemies and check for a collision

  //Set `playerHit` to `false` before checking for a collision
  //var playerHit = false;

  //Loop through all the sprites in the `enemies` array
  /*mouse.forEach(function (enemy) {

    //Move the enemy
    

    //Check the enemy's screen boundaries
    var enemyHitsEdges = g.contain(enemy, {
      x: 32, y: 16,
      width: g.canvas.width - 32,
      height: g.canvas.height - 32
    });

    //If the enemy hits the top or bottom of the stage, reverse
    //its direction
    if (enemyHitsEdges) {
      if (enemyHitsEdges.has("left") || enemyHitsEdges.has("right")) {
        enemy.vx *= -1;
      }
    }

    //Test for a collision. If any of the enemies are touching
    //the player, set `playerHit` to `true`
    if (g.hitTestRectangle(hook, enemy)) {//碰撞检测
      playerHit = true;
    }
  });*/

  //If the player is hit...
  /*if (playerHit) {

    //Make the player semi-transparent
    mouse.alpha = 0.5;

    //Reduce the width of the health bar's inner rectangle by 1 pixel
    healthBar.inner.width -= 1;
  } else {

    //Make the mouse fully opaque (non-transparent) if it hasn't been hit
    mouse.alpha = 1;
  }*/

  //Check for a collision between the player and the treasure


  //Check for the end of the game
  //Does the player have enough health? If the width of the `innerBar`
  //is less than zero, end the game and display "You lost!"
  /*if (healthBar.inner.width <= 0) {
  	//alert('lost');
  console.log(g.state)
    g.state = end;
    message.content = "You lost!";
  }*/

  //If the player has brought the treasure to the exit,
  //end the game and display "You won!"
  /*if (g.hitTestRectangle(treasure, exit)) {
    g.state = end;
    message.content = "You won!";
  }*/
}
//ajax请求数据
function ajax()
{
  /*var script = document.createElement('script');
  script.type = 'text/javascript';
    // 传参并指定回调执行函数为onBack
  script.src = '//192.168.10.24:81/index/index?callback=onBack';
  document.head.appendChild(script);
*/
  if(window.XMLHttpRequest){
    var oAjax = new XMLHttpRequest();
  }else{
    var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
  }
    oAjax.open('POST','//192.168.10.24:81/stat/gamesearch',true);//把要读取的参数的传过来。
    oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    oAjax.send("searchname=a&fromtype=3");
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
          if(oAjax.status==200){
              console.log(JSON.parse(oAjax.responseText));//成功的时候调用这个方法
          }else{
              console.log(oAjax.status);
          }
        }
    }
}
function onBack(res){
  console.log(res);
}
function end() {
  //Hide the `gameScene` and display the `gameOverScene`
  gameScene.visible = false;
  gameOverScene.visible = true;
}
//# sourceMappingURL=treasureHunterImages.js.map
