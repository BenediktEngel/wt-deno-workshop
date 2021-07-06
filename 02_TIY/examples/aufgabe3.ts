
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

const router = new Router();
router
  // GET für Einstiegspunkt
  .get("/", (context) => {
    context.response.body = "Endpunkt ist /todos!";
  })
  // GET für alle ToDos
  .get("/todos", (context) => {
    context.response.body = { todos: todos};
  })
  // GET für spezifische Todo
  .get("/todos/:id", (context) => {
    if (context.params && context.params.id && todos.find((el) => el.id === Number(context.params.id))) {
      context.response.body = todos.find((el) => el.id === Number(context.params.id));
    }
  })
  // POST zum anlegen von einer Todo body.text wird benötigt
  .post ("/todos", async (context) => {
    const body = await context.request.body().value
    if (body.text != "") {
      todos.push({id : nextID, text: body.text, done: false})
      context.response.body = todos.find((el) => el.id === nextID);
      setNextID();
    }else{
      context.response.status = 400;
    }
  })
  // Bonus: PUT zum Updaten von done
  .put("/todos/:id", (context) => {
    if (context.params && context.params.id && todos.find((el) => el.id === Number(context.params.id))) {
      const found = todos.find((el) => el.id === Number(context.params.id))!;
      // Setzen von done für gefundenes Objekt auf das Gegenteil des bisherigen
      todos.find((el) => el.id === Number(context.params.id))!.done = !found.done
      context.response.body = todos.find((el) => el.id === Number(context.params.id));
    }
  })
  ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
