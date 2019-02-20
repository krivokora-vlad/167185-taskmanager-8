`use strict`;

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

const cardTemplate = `<article class="card card--yellow card--repeat">
<form class="card__form" method="get">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--edit">
        edit
      </button>
      <button type="button" class="card__btn card__btn--archive">
        archive
      </button>
      <button
        type="button"
        class="card__btn card__btn--favorites card__btn--disabled"
      >
        favorites
      </button>
    </div>

    <div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>

    <div class="card__textarea-wrap">
      <label>
        <textarea
          class="card__text"
          placeholder="Start typing your text here..."
          name="text"
        >
Here is a card with filled data</textarea
        >
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">yes</span>
          </button>

          <fieldset class="card__date-deadline">
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="23 September"
                name="date"
                value="23 September"
              />
            </label>
            <label class="card__input-deadline-wrap">
              <input
                class="card__time"
                type="text"
                placeholder="11:15 PM"
                name="time"
                value="11:15 PM"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">yes</span>
          </button>

          <fieldset class="card__repeat-days">
            <div class="card__repeat-days-inner">
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-mo-4"
                name="repeat"
                value="mo"
              />
              <label class="card__repeat-day" for="repeat-mo-4"
                >mo</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-tu-4"
                name="repeat"
                value="tu"
                checked
              />
              <label class="card__repeat-day" for="repeat-tu-4"
                >tu</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-we-4"
                name="repeat"
                value="we"
              />
              <label class="card__repeat-day" for="repeat-we-4"
                >we</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-th-4"
                name="repeat"
                value="th"
              />
              <label class="card__repeat-day" for="repeat-th-4"
                >th</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-fr-4"
                name="repeat"
                value="fr"
                checked
              />
              <label class="card__repeat-day" for="repeat-fr-4"
                >fr</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                name="repeat"
                value="sa"
                id="repeat-sa-4"
              />
              <label class="card__repeat-day" for="repeat-sa-4"
                >sa</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-su-4"
                name="repeat"
                value="su"
                checked
              />
              <label class="card__repeat-day" for="repeat-su-4"
                >su</label
              >
            </div>
          </fieldset>
        </div>

        <div class="card__hashtag">
          <div class="card__hashtag-list">
            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #repeat
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>

            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #cinema
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>

            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #entertaiment
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>
          </div>

          <label>
            <input
              type="text"
              class="card__hashtag-input"
              name="hashtag-input"
              placeholder="Type new hashtag here"
            />
          </label>
        </div>
      </div>

      <label class="card__img-wrap">
        <input
          type="file"
          class="card__img-input visually-hidden"
          name="img"
        />
        <img
          src="img/sample-img.jpg"
          alt="task picture"
          class="card__img"
        />
      </label>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          <input
            type="radio"
            id="color-black-4"
            class="card__color-input card__color-input--black visually-hidden"
            name="color"
            value="black"
          />
          <label
            for="color-black-4"
            class="card__color card__color--black"
            >black</label
          >
          <input
            type="radio"
            id="color-yellow-4"
            class="card__color-input card__color-input--yellow visually-hidden"
            name="color"
            value="yellow"
            checked
          />
          <label
            for="color-yellow-4"
            class="card__color card__color--yellow"
            >yellow</label
          >
          <input
            type="radio"
            id="color-blue-4"
            class="card__color-input card__color-input--blue visually-hidden"
            name="color"
            value="blue"
          />
          <label
            for="color-blue-4"
            class="card__color card__color--blue"
            >blue</label
          >
          <input
            type="radio"
            id="color-green-4"
            class="card__color-input card__color-input--green visually-hidden"
            name="color"
            value="green"
          />
          <label
            for="color-green-4"
            class="card__color card__color--green"
            >green</label
          >
          <input
            type="radio"
            id="color-pink-4"
            class="card__color-input card__color-input--pink visually-hidden"
            name="color"
            value="pink"
          />
          <label
            for="color-pink-4"
            class="card__color card__color--pink"
            >pink</label
          >
        </div>
      </div>
    </div>

    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>
</article>`;

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min) + min));

const renderCards = (container, fragment) => container.insertAdjacentHTML(`beforeend`, fragment);

const renderFilter = (container, nameFilter) => {
  const fragment = `
  <input
    type="radio"
    id="filter__all"
    class="filter__input visually-hidden"
    name="filter"
    checked
  />
  <label for="filter__all" class="filter__label">
    ${nameFilter} <span class="filter__all-count">${getRandomInt(0, 20)}</span></label
  >`;
  container.insertAdjacentHTML(`beforeend`, fragment);
};

for (let filterName in filterNames) {
  renderFilter(filterContainer, filterNames[filterName]);
}

for (let i = 0; i < 7; i++) {
  renderCards(tasksContainer, cardTemplate);
}

const filters = document.querySelectorAll(`.filter__input`);

filters.forEach((filter) => {
  filter.addEventListener(`click`, (e) => {
    e.preventDefault;
    tasksContainer.innerHTML = ``;

    for (let i = 0; i < getRandomInt(1, 7); i++) {
      renderCards(tasksContainer, cardTemplate);
    }

  });
});
