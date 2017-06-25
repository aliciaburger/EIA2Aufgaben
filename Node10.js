"use strict";
console.log("Server starting");
//TEST Test 2
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
//server.listen(process.env.port||8100);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    //    _response.write("huhu");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
    for (key in query) {
        console.log(key + ":" + query[key]);
        if (key == "Vanille" || key == "Erdbeere" || key == "Schokolade" || key == "Walnuss") {
            if (parseInt(query[key]) != 0) {
                _response.write(key + "\n" + query[key] + "<br>");
            }
        }
    }
    //Baum
    //    _response.write("ich höre Stimmen!");
    //    _response.write("ich höre Stimmen!");
    _response.end();
}
//# sourceMappingURL=Node10.js.map