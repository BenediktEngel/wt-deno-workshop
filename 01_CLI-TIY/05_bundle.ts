import sub from "./06_bundle.ts";
import { bgBlue, red } from "https://deno.land/std@0.100.0/fmt/colors.ts";

console.log(bgBlue("Hallo beim Subtrahierer-Bundle!"));
const a = Number(prompt("Gebe die erste Zahl ein:"));
const b = Number(prompt("Gebe die zweite Zahl ein:"));

if (isNaN(a) || isNaN(b)) {
  console.log("Mindestens eine deiner Eingaben war keine Zahl!");
} else {
  console.log(a + " - " + b + " = " + red(String(sub(a, b))));
}
