//炮弹

class Cannon extends Spirit{
    constructor(type){
        if(type > 7 || type < 1){
            throw new Error('cannon type expected 1~7')
        }
        let data = __g_imgs.cannon[`cannon${type}`]
        super({
            img : data.img,
            sx : data.frame.x,
            sy : data.frame.y,
            w : data.frame.w,
            h : data.frame.h,
            rotation : 180,
            x : 400,
            y : 500,
        })
        this.type = type;
    }
}



