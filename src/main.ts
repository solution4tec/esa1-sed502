import { events, filterEvents, type CityEvent } from './events';

const eventList = document.querySelector<HTMLElement>('#event-list')!;
const resultCount = document.querySelector<HTMLParagraphElement>('#result-count')!;
const emptyState = document.querySelector<HTMLParagraphElement>('#empty-state')!;
const searchInput = document.querySelector<HTMLInputElement>('#search')!;
const resetButton = document.querySelector<HTMLButtonElement>('#reset-filters')!;
const categoryButtons = document.querySelectorAll<HTMLButtonElement>('[data-category]');
let selectedCategory = 'Alle';

function createTextElement(tag: string, content: string, className: string): HTMLElement {
  const element = document.createElement(tag);
  element.textContent = content;
  element.className = className;
  return element;
}

function createEventCard(event: CityEvent): HTMLElement {
  const article = document.createElement('article');
  article.className = 'event-card';
  article.dataset.category = event.category;
  const number = createTextElement('p', String(event.id).padStart(2, '0'), 'event-number');
  number.setAttribute('aria-hidden', 'true');
  const heading = createTextElement('h3', event.title, 'card-title');
  heading.id = `event-${event.id}`;
  article.setAttribute('aria-labelledby', heading.id);
  const details = document.createElement('section');
  details.className = 'card-details';
  details.setAttribute('aria-labelledby', heading.id);
  const footer = document.createElement('footer');
  footer.className = 'card-meta';
  footer.append(createTextElement('span', event.price, 'price'), createTextElement('span', event.duration, ''));
  details.append(createTextElement('p', event.category, 'category-tag'), heading, createTextElement('p', event.location, 'location'), createTextElement('p', event.description, 'description'));
  article.append(number, details, footer);
  return article;
}

function renderEvents(items: CityEvent[]): void {
  eventList.replaceChildren(...items.map(createEventCard));
  resultCount.textContent = `${items.length} von ${events.length} Einträgen`;
  emptyState.hidden = items.length > 0;
}

function updateResults(): void {
  categoryButtons.forEach((button: HTMLButtonElement): void => {
    const count = button.querySelector('span');
    if (count) {
      count.textContent = String(filterEvents(events, button.dataset.category ?? 'Alle', searchInput.value).length);
    }
  });
  resetButton.hidden = selectedCategory === 'Alle' && searchInput.value === '';
  renderEvents(filterEvents(events, selectedCategory, searchInput.value));
}

categoryButtons.forEach((button: HTMLButtonElement): void => {
  button.addEventListener('click', (): void => {
    selectedCategory = button.dataset.category ?? 'Alle';
    categoryButtons.forEach((item: HTMLButtonElement): void => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    updateResults();
  });
});
resetButton.addEventListener('click', (): void => {
  selectedCategory = 'Alle';
  searchInput.value = '';
  categoryButtons.forEach((button: HTMLButtonElement): void => {
    button.setAttribute('aria-pressed', String(button.dataset.category === 'Alle'));
  });
  updateResults();
  searchInput.focus();
});
searchInput.addEventListener('input', updateResults);
document.querySelector<HTMLFormElement>('.filters')!.addEventListener('submit', (event: SubmitEvent): void => event.preventDefault());
updateResults();
