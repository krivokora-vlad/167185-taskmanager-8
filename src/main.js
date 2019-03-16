const filterContainer = document.querySelector(`.main__filter`);
const tasksContainer = document.querySelector(`.board__tasks`);

const filterNames = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];

// На будущее создал объект под поля карточек
// const cardData = {
//   isEdit: false,
//   isRepeat: false,
//   description: ``,
//   isDeadline: true,
//   deadlineDate: ``,
//   deadlineTime: ``,
//   repeatDays: {
//     isMo: false,
//     isTu: false,
//     isWe: false,
//     isTh: true,
//     isFr: false,
//     isSa: false,
//     isSu: false
//   },
//   hashtags: [`cinema`, `repeat`, `weather`],
//   color: {
//     black: false,
//     yellow: false,
//     blue: false,
//     green: true,
//     pink: false,
//   }
// }

// cardTemplate

import makeTask from './make-task.js';
import makeFilter from './make-filter.js';

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min) + min));

const renderCards = (container, fragment) => container.insertAdjacentHTML(`beforeend`, fragment);

const renderFilter = (container, nameFilter, checked) => {
  const fragment = makeFilter(nameFilter, getRandomInt(0, 20), checked);
  container.insertAdjacentHTML(`beforeend`, fragment);
};

filterNames.forEach((filterName, index) => renderFilter(filterContainer, filterName, index === 0 ? true : false));

for (let i = 0; i < 7; i++) {
  renderCards(tasksContainer, makeTask);
}

filterContainer.addEventListener(`change`, () => {
  tasksContainer.innerHTML = ``;
  for (let i = 0; i < getRandomInt(1, 7); i++) {
    renderCards(tasksContainer, makeTask);
  }
});
