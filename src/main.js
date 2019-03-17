import makeTask from './make-task.js';
import makeFilter from './make-filter.js';

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

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min) + min));

const renderCards = (fragment) => tasksContainer.insertAdjacentHTML(`beforeend`, fragment);

const renderFilter = (nameFilter, checked) => {
  const fragment = makeFilter(nameFilter, getRandomInt(0, 20), checked);
  filterContainer.insertAdjacentHTML(`beforeend`, fragment);
};

filterNames.forEach((filterName, index) => renderFilter(filterName, index === 0 ? true : false));

for (let i = 0; i < 7; i++) {
  renderCards(makeTask());
}

filterContainer.addEventListener(`change`, () => {
  tasksContainer.innerHTML = ``;
  for (let i = 0; i < getRandomInt(1, 7); i++) {
    renderCards(makeTask());
  }
});
