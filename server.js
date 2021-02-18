const http = require('http');
const urlLib = require('url');
const fs = require('fs');
const zlib = require('zlib')


let server = http.createServer((req,res)=>{
    let {pathname, query} = urlLib.parse(req.url)
    let gz = zlib.createGzip();
    if(0){

    } else {
        let rs = fs.createReadStream(`./www${pathname}`);
        rs.on('error',(err)=>{
            res.writeHead(404);
            res.end('no such file');
        })
        res.setHeader('content-encoding','gzip')
        rs.pipe(gz).pipe(res)
    }
})
server.listen(8080)