console.log("Server starting");
//TEST
import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();

server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
//server.listen(process.env.port||8100);

server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");
    //    _response.write("huhu");
    console.log(_request.url);

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");


    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);


    let key: string;


    _response.write("Hallo Frau/ Herr " + query["Nachname"]);

    for (key in query) {

        console.log(key + ":" + query[key]);
        if (key == "Vanille" || key == "Erdbeere" || key == "Schokolade" || key == "Walnuss") {
            if (parseInt(query[key]) != 0) {
                _response.write("Sie haben bei uns Folgende Eissorten bestellt:" + "<br>");
                _response.write(key + "\n" + query[key] + "<br>");

            }

            //Test

        }
        _response.write("Ihre angegebene Lieferadresse: " + query["Strasse"] + "<br>" + query["Hausnummer"] + "<br>" + query["Stadt"] + "<br>" + query["Postleizahl"] + "<br>");
        _response.write("Die Rechnung mit Bestellübersicht, wurde ihnen bereits an " + query["EMail"] + "gesendet.");

      

        //    _response.write("ich höre Stimmen!");
        //    _response.write("ich höre Stimmen!");
        _response.end();
    }

















