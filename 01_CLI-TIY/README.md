# CLI - Try it yourself

## `deno` & `deno repl`

Starten der REPL (Read–eval–print loop). In diesem Loop kann JS-Code getestet und ausgeführt werden.

**Aufabe:** Definiere eine Variable in der dein Name gespeichert wird. Gebe diesen daraufhin mit einer Begrüßung aus.

## `deno fmt`

Formatieren von Dateien.

[Doku für `fmt`](https://deno.land/manual/tools/formatter)

**Aufabe:** Prüfe ob die Datei `01_fmt.ts` formatiert ist und formatiere die Datei anschließend.


## `deno lint`

Linter für JS- und TS-Files.

[Doku für `lint`](https://deno.land/manual/tools/linter)

** Aufgabe:** Analysiere die Datei `02_lint.ts` mit deno lint und speicher die Ergebnisse in `lint-results.json`.


## `deno run`

Ausführen von Dateien.

[Doku für `run`](https://deno.land/manual/getting_started/permissions)

**Aufgabe 1:** Führe `https://deno.land/std/examples/welcome.ts` aus.
**Aufgabe 2:** Führe die Datei `03_run.ts` aus. Ändere nun den Inhalt von course auf eine Zahl und führe die Datei erneut aus.
**Aufgabe 3:** Führe die Datei `04_run.ts` aus. Was muss angegeben werden, sodass die Datei ausgeführt werden kann und welche Möglichkeiten dafür gibt es?

## `deno bundle`

Bundlen von allen zugehörigen Dateien zu einer Datei.

[Doku für `bundle`](https://deno.land/manual/tools/bundler)

**Aufgabe 1:** Bundle die Datei `05_bundle.ts`, sodass `06_bundle.ts` und das Module aus der Standard Library enthalten sind. Speicher dieses Bundle in `erstes-bundle.js`.
**Aufgabe 2:** Schau dir den Inhalt von `erstes-bundle.js` an und führe es aus.

## `deno install` & `deno compile`

Generierung eines Executables.

[Doku mit allen Flags (install)](https://deno.land/manual/tools/script_installer)

[Doku mit allen Flags (compile)](https://deno.land/manual/tools/compiler)

**Aufabe:** Erstelle aus der Datei `07_executable.ts` einmal mit `deno install` und ein weiteres mal mit `deno compile` ein ausführbares Skript und führe es aus. Was fällt dir auf?

## `deno doc`

Automatisierte Erstellung von Dokumentationen. Hierfür muss die [JSDoc](https://jsdoc.app)-Syntax genutzt werden.

[Doku mit allen Flags](https://deno.land/manual/tools/documentation_generator)

**Aufgabe1:** Gebe die Dokumentation für die Datei `08_docs.ts` im Terminal aus.
**Aufgabe2:** Erstelle anhand der Datei `08_docs.ts` eine Dokumentation im JSON-Format und speichere sie in `doc.json`.
