const http = require("http");

const server = http.createServer((request, Response) => {
  const data = {
    nama: "Fariz",
    umur: 26,
  };
  Response.writeHead(200, { "Content-Type": "application/json" });
  Response.end(JSON.stringify(data));
});

server.listen(8000);
