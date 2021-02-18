//loadeImgs 加载资源


/**
 *  for(let i )     块级i   类似于做了IIFE
 * 
 *  res.fish.fish1 : {img:img, frame{...}}
 * 
 */

function loadResource (){
    let resourcesJson = {   //资源json
        bottom:'bottom.json', 
        bullet:'bullet.json', 
        cannon:'cannon.json',
        coin:'coin.json',
        fish:'fish.json',
        web:'web.json',
        number:'number.json'
    }
    return new Promise((reslove,reject)=>{
        let res = {},
            loadCount = 0,
            loadedCount = 0;
        for(let n in resourcesJson){
            res[n] = {};
            $.ajax({
                url:`./img/${resourcesJson[n]}`,
                dataType:'JSON',
                success(data){
                    for(let subN in data){     //for in 循环 let 
                        loadCount ++
                        let oImg = new Image();
                        oImg.src = './img/' + data[subN].src;
                        oImg.onload = function(){
                            res[n][subN] = {
                                img : oImg,
                                frame : data[subN].frame
                            }
                            loadedCount ++ 
                            if(loadCount == loadedCount){   //所有图片 全部load
                                window.__g_imgs = res;
                                reslove(res)
                            }
                        }
                        oImg.onerror = (err)=>{
                            reject('load img error')
                        }
                    }
                },
                error(err){
                    reject('ajax load error')
                }
            })
        }
    })
}
