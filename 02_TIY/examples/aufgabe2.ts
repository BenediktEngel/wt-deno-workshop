import {
  serve,
  ServerRequest,
} from "https://deno.land/std@0.100.0/http/server.ts";

const decoder = new TextDecoder("utf-8");

// Files aus Ordner auslesen & in Routes ohne Endung + relativen Pfad speichern
var routes = [];
for (const dirEntry of Deno.readDirSync("./httpdocs")) {
  routes.push({
    name: "/" + dirEntry.name.replace(/\.[^.]*$/, ""),
    path: "./httpdocs/" + dirEntry.name,
  });
}

//Server starten
const server = serve({ port: 8080 });
console.log(`Server is running at:  http://localhost:8080/`);

//Auf Anfragen an den Server warten
for await (const req: ServerRequest of server) {
  //Prüfen ob Seite vorhanden
  const respond = routes.find((el) => el.name === req.url)!;
  if (respond != undefined) {
    //Seite vorhanden, also zurückschicken
    req.respond({
      status: 200,
      body: decoder.decode(Deno.readFileSync(respond.path)),
    });
  } else {
    //Seite nicht vorhanden, also mit 404 antworten
    req.respond({ status: 404 });
  }
}
