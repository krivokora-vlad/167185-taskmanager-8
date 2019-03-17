export default (nameFilter, countCard, checked = false) => `
<input
  type="radio"
  id="filter__${nameFilter.toLowerCase()}"
  class="filter__input visually-hidden"
  name="filter"
  ${checked ? `checked` : ``}
/>
<label for="filter__${nameFilter.toLowerCase()}" class="filter__label">
  ${nameFilter} <span class="filter__${nameFilter.toLowerCase()}-count">${countCard}</span>
</label>`;
