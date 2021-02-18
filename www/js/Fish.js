// fish

class Fish extends Spirit{
    constructor(type){
        if(type > 5 || type < 1){
            throw new Error('鱼的类型1-5')
        }
        let fish = __g_imgs.fish[`fish${type}`]
        super({
            img : fish.img,
            sx : fish.frame.x,
            sy : fish.frame.y,
            w : fish.frame.w,
            h : fish.frame.h,
            rotation : 90,
            speed : Math.random(),

            //帧
            max_frame : 4,
            max_tick : 25
        })
        // this.max_frame = 4
        // this.max_tick = 25;
        this.type = type;
    }
    draw(gd){   
        this.rotation -=90
        super.draw(gd)
        this.rotation += 90
    }
}















































// class Fish extends Spirit{
//     constructor(type){
//         if(type > 5 || type < 1){
//             throw new Error('没有 <・)))><<');
//         }
//         const data = _g_resource.fish[`fish${type}`]
//         super({
//             img:    data.img,
//             sx :    data.frame.x,
//             sy :    data.frame.y,
//             w :     data.frame.w,
//             h :     data.frame.h,
            
//             speed:  Math.random(),
//             rotation:90
//         })
//         this.max_tick = 20;
//         this.max_frame = 4;
//     }
//     draw(ctx){
//         this.rotation -= 90;
//         super.draw(ctx)
//         this.rotation += 90
//     }
    
// }