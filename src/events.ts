export type Category = 'Draußen' | 'Kultur' | 'Zusammen';

export interface CityEvent {
  id: number;
  title: string;
  category: Category;
  location: string;
  description: string;
  duration: string;
  price: string;
}

// Fiktive Beispieldaten: keine tatsächlichen Veranstaltungen oder Angebote.
export const events: CityEvent[] = [
  { id: 1, title: 'Eine Runde Grün', category: 'Draußen', location: 'Prater · 1020 Wien', description: 'Raus aus dem Alltag, rein in den Park. Gemeinsam eine entspannte Runde gehen und frische Luft tanken.', duration: '90 Minuten', price: 'Kostenlos' },
  { id: 2, title: 'Kunst & neue Blickwinkel', category: 'Kultur', location: 'Neubau · 1070 Wien', description: 'Eine kleine Galerie, große Ideen. Entdecke zeitgenössische Kunst und tausche deine Eindrücke aus.', duration: '2 Stunden', price: '12 €' },
  { id: 3, title: 'Kaffee mit Gesellschaft', category: 'Zusammen', location: 'Wieden · 1040 Wien', description: 'Ein großer Tisch, guter Kaffee und neue Gesichter. Komm allein und geh mit einer netten Begegnung.', duration: '1 Stunde', price: 'Ab 5 €' },
  { id: 4, title: 'Sonnenuntergang am Wasser', category: 'Draußen', location: 'Donauinsel · 1220 Wien', description: 'Mit einer Decke ans Wasser setzen, den Himmel beobachten und den Tag langsam ausklingen lassen.', duration: '2 Stunden', price: 'Kostenlos' },
  { id: 5, title: 'Zwischen den Zeilen', category: 'Kultur', location: 'Josefstadt · 1080 Wien', description: 'Bring ein Lieblingsbuch mit. Wir lesen kurze Stellen, teilen Gedanken und sammeln neuen Lesestoff.', duration: '90 Minuten', price: 'Kostenlos' },
  { id: 6, title: 'Noch eine Spielrunde', category: 'Zusammen', location: 'Margareten · 1050 Wien', description: 'Brettspiele, kleine Snacks und ein bisschen gesunder Ehrgeiz. Neue Mitspieler sind immer willkommen.', duration: '3 Stunden', price: '8 €' },
];

export function filterEvents(items: CityEvent[], category: string, query: string): CityEvent[] {
  const searchTerms = query.trim().toLocaleLowerCase('de').split(/\s+/).filter(Boolean);
  return items.filter((event: CityEvent): boolean => {
    const matchesCategory = category === 'Alle' || event.category === category;
    const searchText = `${event.title} ${event.location} ${event.description} ${event.category}`.toLocaleLowerCase('de');
    return matchesCategory && searchTerms.every((term: string): boolean => searchText.includes(term));
  });
}
