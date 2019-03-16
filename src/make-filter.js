export default (nameFilter, getRandomInt, checked = false) => `
<input
  type="radio"
  id="filter__${nameFilter.toLowerCase()}"
  class="filter__input visually-hidden"
  name="filter"
  ${checked ? `checked` : ``}
/>
<label for="filter__${nameFilter.toLowerCase()}" class="filter__label">
  ${nameFilter} <span class="filter__${nameFilter.toLowerCase()}-count">${getRandomInt}</span>
</label>`;
