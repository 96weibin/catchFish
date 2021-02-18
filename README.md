# catchFish
    canvas捕鱼游戏

## 实现


### 加载资源


1. json存储 素材url、xywh
2. ajax laod 资源对象 

```js
    //资源对象
    {
        fish:{
            fish1:{
                img:img,
                frame:{
                        x:0,
                        y:0,
                        w:78,
                        h:50
                    }
                }
            }
            ...
        }
        ...
    }
```

- for循环let声明的条件 是跟随循环体的块内变量，相互独立
- 设置loadCount、loadedCount onload 的时候相等则是全部加载完成 seslove
- try catch 捕捉 await的异常


### 引擎文件(被继承的爸爸)

1. 