# Freizeitideen in Wien

Statische Webseite für ESA1 im Kurs SED502 Frontend Development. Sechs fiktive Freizeitideen können nach Kategorie und Suchbegriff gefiltert werden. Orte, Preise und Beschreibungen sind Beispieldaten; es gibt keine Buchung.

## Lokal starten

Voraussetzung: Node.js ab 22.18 und npm.

```sh
npm ci
npm run dev
```

Build mit TypeScript-Prüfung und lokale Vorschau:

```sh
npm run build
npm run preview
```

## Technische Entscheidungen

- HTML, CSS und TypeScript ohne UI-Framework; Vite erstellt den Build.
- Semantische Elemente: `header`, `nav`, `main`, `footer`, `section`, `article` und `aside`.
- `src/events.ts` beschreibt die Daten mit dem Interface `CityEvent`. `filterEvents` kombiniert Kategorie und Suchwörter mit `filter()`.
- `src/main.ts` erzeugt Karten mit `map()` und DOM-Methoden. Funktionen haben typisierte Parameter und Rückgabewerte. Texte werden mit `textContent` eingesetzt.
- Die Trefferliste und Kategorie-Zähler reagieren auf Eingaben. Ein Button setzt die Filter zurück.
- Beschriftete Navigation und Suche, `aria-pressed`, eine Statusmeldung, Skip-Link und sichtbarer Tastaturfokus unterstützen die Zugänglichkeit. CSS passt das Layout an die Bildschirmbreite an.

## Ressourcen und AI-Unterstützung

Die ESA1-Angabe definiert die Anforderungen. ChatGPT wurde für Themenvorschlag und Teile der Codeerstellung und Formulierung eingesetzt. Texte und fiktive Beispieldaten wurden für dieses Projekt erstellt. Die Seite verwendet ausschließlich Systemschriften.

## Abgabe

- [Öffentliches Repository](https://github.com/solution4tec/esa1-sed502)
- [Reflexion als PDF](https://github.com/solution4tec/esa1-sed502/blob/main/reflexion.pdf)
