const http = require("http");

const server = http.createServer((req,res)=>{

  console.log(req)
  console.log(res)

  if(req.method === "GET" && req.url === "/"){

    console.log('hello from server')
    res.end();
  }
})

server.listen(3000,()=>{
  console.log("server on http://localhost:3000");
})

