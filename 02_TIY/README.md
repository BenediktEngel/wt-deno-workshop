# Standard Library & Runtime API - Try it yourself

## Aufgabe 1 - Commandline-Programm Suchen & Erstellen von Dateien

a) Schreibe ein Skript, welches CL-Argumente entgegen nimmt und in einer Konstante speichert.

b) Erweitere das Skript, sodass geprüft wird ob das Argument / die Argumente eine Datei, bzw. Dateien im aktuellen Ordner darstellen. Wenn die Datei vorhanden ist soll der Inhalt in Stdout ausgegeben werden, ist dies nicht der Fall soll die Datei mit dem entsprechenden Namen angelegt werden und die Bemerkung "Autogenerated File by our Deno-Program" hineingeschrieben werden.

Bonus: Nutze das [color-Modul](https://deno.land/std@0.100.0/fmt) der Standard Library um deine Ausgabe im Terminal farblich zu gestalten.

**Tipps & Tricks:**
- [RuntimeAPI Dokumentation](https://doc.deno.land/builtin/stable)
- [Lesen von Verzeichnissen](https://doc.deno.land/builtin/stable#Deno.readDirSync)
- [Args auslesen](https://doc.deno.land/builtin/stable#Deno.args)
- [Datei lesen](https://doc.deno.land/builtin/stable#Deno.readFileSync)
- [Datei schreiben](https://doc.deno.land/builtin/stable#Deno.writeFileSync)

## Aufgabe 2 - Simpler Web-Server

a) Binde den http-Server aus der Standard Library in eine neue Datei ein (Du kannst auch den [Starter-Code aus der Doku](https://deno.land/std/http#http) nutzen) und führe ihn aus.

b) Erweitere dein Skript, sodass die Files aus dem Ordner `./httpdocs` ausgelesen werden. Auf diesen ausgelesenen Namen sollen nun Routen im Server erstellt werden, sodass beim aufrufen von `/about` die Datei `about.html` zurückgeschickt wird.

**Tipps & Tricks:**
- [http-Server](https://deno.land/std/http#http)
- Funktion zum entfernen der Fileextension `<VARIABLE>.replace(/\.[^.]*$/, "")`

*Anmerkung:* Der http-Server aus der Standard Library ist natürlich nicht so umfangreich wie wir es von Express oder Koa aus node.js kennen. Dafür gibt es aber natürlich andere Web-Frameworks wie [Oak](https://deno.land/x/oak), mit diesem könnte man aber einen eigenen Workshop füllen.