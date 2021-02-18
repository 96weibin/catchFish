//被继承的爸爸   引擎

class Spirit{
    constructor(options){   
        //draw
        this.img = options.img;

        this.sx = options.sx || 0;
        this.sy = options.sy || 0;
        
        this.x = options.x || 0;
        this.y = options.y || 0;

        this.w = options.w || options.img.width;
        this.h = options.h || options.img.height;
        
        this.rotation = options.rotation || 0;
        this.scale = options.scale || 1;
        //move
        this.speed = options.speed || 0;

        this.frame = 0;
        this.max_frame = options.max_frame || 0;
        this.tick = 0;
        this.max_tick = options.max_tick || 0;

    }

    draw(gd){
        gd.save()           //translate 会叠加所以 需要save 和 restore
        gd.translate(this.x,this.y)
        gd.rotate(this.rotation / 180 * Math.PI)
        gd.drawImage(
            this.img, 
            this.sx, this.sy,this.w,this.h,
            - this.w / 2,- this.h / 2,this.w,this.h         //以 中心为00
        )
        gd.restore()
    }

    move(){     //每帧移动  x y 累加
        let speed_x = Math.sin(this.rotation / 180 * Math.PI) * this.speed;
        let speed_y = Math.cos(this.rotation / 180 * Math.PI) * this.speed;
        this.x += speed_x;
        this.y -= speed_y;
    }

    nextFrame(){
        this.tick ++
        if(this.tick == this.max_tick){
            this.tick = 0;
            this.frame ++;
            if(this.frame == this.max_frame){
                this.frame = 0;
            }
            this.setFrame(this.frame)
        }
        
    }
    setFrame(frame){
        this.sy = frame * this.h
    }
}



































// class Spirit{
//     constructor(option){
//         this.img = option.img,
//         this.sx = option.sx || 0,
//         this.sy = option.sy || 0,
//         this.sw = option.w || this.img.width,
//         this.sh = option.h || this.img.height,
//         this.x = option.x || 0,
//         this.y = option.y || 0;
//         this.rotation = option.rotation || 0;
//         this.scale = option.scale || 1;

//         //move
//         this.speed = option.speed || 0;


//         this.tick = 0;
//         this.max_tick = 0;
//         this.frame = 0;
//         this.max_frame = 0;
//     }
//     draw(ctx){
//         ctx.save()
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.rotation * Math.PI/ 180)
//         ctx.drawImage(
//             this.img,
//             this.sx,this.sy,this.sw,this.sh,
//             -this.sw / 2, -this.sh / 2,this.sw,this.sh    
//         )
//         ctx.restore()
//     };
//     move(){
//         let speed_x = this.speed * Math.sin(this.rotation * Math.PI / 180);
//         let speed_y = this.speed * Math.cos(this.rotation * Math.PI / 180);
//         this.x += speed_x;
//         this.y -= speed_y;
//     };

//     setFrame(frame){
//         this.sy = frame * this.sh
//     };

//     nextFrame(){
//         this.tick ++;
//         if(this.tick == this.max_tick){
//             this.tick = 0;

//             this.frame ++;
//             if(this.frame == this.max_frame){
//                 this.frame = 0;
//             }
//             this.setFrame(this.frame)
//         }
        
//     };
// }


