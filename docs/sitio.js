const paths = {
  chat: '<path d="M21 11.5a9 9 0 0 1-13.3 8L3 21l1.4-4.8A9 9 0 1 1 21 11.5Z"/><path d="M8 7.5q.5 6 7.5 8l1-2-2.5-1-1 1q-2.4-.9-3.3-3.2l1-1L9.5 7Z"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/>',
  menu: '<path d="M3 5q4-2 9 1 5-3 9-1v14q-5-2-9 1-4-3-9-1Zm9 1v14"/>',
  bars: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  burger: '<path d="M3 10a9 7 0 0 1 18 0ZM3 14q2-2 4 0t4 0 4 0 6 0M3 17h18l-2 3H5Z"/>',
  fries: '<path d="m4 10 2 11h12l2-11q-8 5-16 0ZM6 10V4h3v7m1 1V2h3v10m1 0V5h3v6m1-1V3h2v7"/>',
  corn: '<path d="M7 16C6 8 13 1 18 4s2 12-6 15M4 11q7 1 8 8-7 4-8-8Zm9 7q2-5 8-7M12 8l4 3m-6 0 4 3"/>',
  leaf: '<path d="M3 15q10 4 16-10l2 1q1 13-13 14-5 0-5-5Z"/>',
  drink: '<path d="m5 8 2 13h10l2-13ZM12 8l2-6h5M6 12h12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>'
};
function icon(name) {
  return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths[name] + '</svg>';
}
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
function fill(selector, value) {
  document.querySelectorAll(selector).forEach(el => el.textContent = value);
}
fill('[data-address]', restaurante.direccion);
fill('[data-breakfast]', restaurante.desayunos);
fill('[data-name]', restaurante.nombre);
fill('[data-tel]', restaurante.telefono);
document.querySelector('[data-tel]').href = 'tel:' + restaurante.telefono.replace(/\s/g, '');
document.querySelectorAll('[data-wa]').forEach(el => {
  el.href = 'https://wa.me/' + restaurante.whatsapp;
});
document.querySelector('#horario').textContent = restaurante.horarioGeneral || 'Para otros horarios, consúltanos por WhatsApp.';
restaurante.redes.forEach(red => {
  const link = document.createElement('a');
  link.href = red.url;
  link.textContent = red.nombre;
  document.querySelector('[data-social]').append(link, ' ');
});
const filters = document.querySelector('.filters');
function element(tag, value, className) {
  const el = document.createElement(tag);
  el.textContent = value;
  if (className) el.className = className;
  return el;
}
function showCategory(index) {
  const category = carta[index];
  Array.from(filters.children).forEach((button, i) => button.setAttribute('aria-pressed', i === index));
  const heading = element('div', '', 'category-head');
  heading.append(element('h3', category.nombre), element('span', category.productos.length + ' opciones'));
  const grid = element('div', '', 'grid');
  category.productos.forEach(([name, price, description, imageFile]) => {
    const card = element('article', '', 'card');
    if (imageFile) {
      const photo = new Image();
      photo.src = 'assets/' + imageFile;
      photo.alt = '';
      photo.width = photo.height = 86;
      card.append(photo);
    }
    const details = element('div', '');
    details.append(element('h4', name), element('p', description), element('strong', '$' + String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '.'), 'price'));
    card.append(details);
    grid.append(card);
  });
  document.querySelector('#platos').replaceChildren(heading, grid);
}
carta.forEach((category, index) => {
  const button = element('button', '');
  const mark = element('span', '', 'icon');
  mark.innerHTML = icon(category.icono);
  button.append(mark, category.nombre);
  button.addEventListener('click', () => showCategory(index));
  filters.append(button);
});
showCategory(0);
const nav = document.querySelector('#nav');
const toggle = document.querySelector('.nav-toggle');
function setNav(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación');
}
toggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav.addEventListener('click', () => setNav(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setNav(false);
    toggle.focus();
  }
});
const links = [...nav.querySelectorAll('a')];
function highlight() {
  const active = links.filter(a => document.querySelector(a.hash).getBoundingClientRect().top <= 120).pop() || links[0];
  links.forEach(a => a === active ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current'));
}
highlight();
window.addEventListener('scroll', highlight, { passive: true });
