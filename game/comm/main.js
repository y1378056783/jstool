//import hexi from './hexi'

//console.log()
class Main{
    constructor(){
        this.x=0;
        this.init();
    }
    setup(G){
        //console.log(G);
        G.state = () => this.play(G)
    }
    load(G){
        //Display the file currently being loaded
        //console.log("loading: " + G.loadingFile);

        //Display the percentage of files currently loaded
        //console.log("progress: " + G.loadingProgress);
        //G.progressBar.foregroundColor='0xff00ff'
        //console.log(G.progressBar);
        G.loadingBar();
    }
    play(G){
        //this.x++
        //console.log(this.x)
    }
    end(){

    }
    init(){
        var thingsToLoad = [
            "img/resource.json",
            "img/music.wav",
            "img/font.fnt"//位图文字
        ],
        win=window.innerWidth,
        hei=window.innerHeight;

        //Create a new Hexi instance, and start it
        let G = hexi(win, hei, 
            ()=>{
                this.setup(G)
            },
            thingsToLoad,
            ()=>{
                this.load(G)
            }
        );
        G.scaleToWindow();

        //Start Hexi
        G.start();
    }
}

new Main();