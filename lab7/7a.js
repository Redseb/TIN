const http = require('http');
const url = require('url');
const PORT = 9000;

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const queryObject = url.parse(req.url,true).query;
    const pathname = url.parse(req.url, true).pathname;
    const a = parseInt(queryObject.a);
    const b = parseInt(queryObject.b);
    if(isNaN(a) || isNaN(b)){
        res.writeHead(400, {"Content-Type": "text/html"});
        res.write("Malformed query string");
        res.end();
        return;
    }
    switch(pathname){
        case "/add":
            res.write(`a + b is ${a+b}`);
            break;
        case "/sub":
            res.write(`a - b is ${a-b}`);
            break;
        case "/mul":
            res.write(`a * b is ${a*b}`);
            break;
        case "/div":
            res.write(`a / b is ${a/b}`);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(`The pathname ${pathname} is not recognized`)
    }

    // res.write('Node.js says hello!');
    res.end();
}).listen(PORT)