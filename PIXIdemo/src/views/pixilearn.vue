<style scoped lang="less">
.pixilearn {
    height: 100%;
   
}
</style>
<template>
    <div ref="pixilearn" class="pixilearn">
    </div>
</template>
<script>
import "pixi.js"
export default {
    name: 'pixilearn',
    data() {
        return {
            app:null,
            cat:null
        }
    },
    created() {

    },
    mounted() {
        this.init();

    },
    methods: {
        init() {
            let type = "WebGL";
            if (!PIXI.utils.isWebGLSupported()) {
                type = "canvas";
            }
            PIXI.utils.sayHello(type);

            this.app = new PIXI.Application({
                width: 200,
                height: 200,                       
			    antialias: true,      //抗锯齿
			    transparent: false,   //透明度
			    resolution: 1         //分辨率
            });
            this.$refs.pixilearn.appendChild(this.app.view);

            this.app.renderer.backgroundColor = 0x061639;
            this.app.renderer.view.style.position = "absolute";
			this.app.renderer.view.style.display = "block";
			this.app.renderer.autoResize = true;
			this.app.renderer.resize(window.innerWidth, window.innerHeight);

			PIXI.loader
			  //.add("catImage","static/images/cat.jpg")
			  .add({
				name:"catImage",
				url:"static/images/cat.jpg"
			  })
			  .add("ming","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2220816182,3112920618&fm=27&gp=0.jpg")
			  .load(this.setup);
        },
        setup(){
        	this.cat = new PIXI.Sprite(          //引入精灵
				PIXI.loader.resources.catImage.texture
			);
			this.ming = new PIXI.Sprite(
				PIXI.loader.resources.ming.texture
			);
			this.app.stage.addChild(this.ming);   //将精灵加入到舞台中

			this.change();
			this.app.ticker.add(delta => this.gameLoop(delta));
        },
        change(){
        	this.ming.position.set(100,100);
        	this.ming.height=100;
        	this.ming.width = 100;
        	/*this.ming.scale.x = 0.2;  //按照原图比例缩放
			this.ming.scale.y = 0.2;*/

			this.ming.rotation = 0.5; //旋转角度

			this.ming.anchor.set(0.5,0.5);   //旋转圆心
        },
        gameLoop(){
        	this.ming.rotation +=0.01;
        	this.ming.x+=1;
        }
    }
}
</script>
