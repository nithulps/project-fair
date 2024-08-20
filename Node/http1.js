const http=require('http')

http.createServer((resq,res)=>{
    res.write("Hello world")
    res.end()
}).listen(4000)