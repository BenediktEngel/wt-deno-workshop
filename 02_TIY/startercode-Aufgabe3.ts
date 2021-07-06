import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Todo Array
let todos = [
  {
    "id": 0,
    "text": "Workshop vorbereiten",
    "done": true,
  },
  {
    "id": 1,
    "text": "Dreckiges Geschirr abspülen",
    "done": false,
  },
  {
    "id": 2,
    "text": "Schreibtisch aufräumen",
    "done": false,
  },
  {
    "id": 3,
    "text": "API für die Todos aufsetzen",
    "done": false,
  }
]
// Nächste ID und Funktion zum Hochsetzen
let nextID = 4;
function setNextID(){
  nextID += 1;
}
