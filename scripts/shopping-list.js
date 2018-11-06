/*eslint-env jquery*/
'use strict';
/* global Store, Item cuid */

// eslint-disable-next-line no-unused-vars
const shoppingList = (function() {
  function generateItemElement(item) {
    let itemTitle = `<span class="shopping-item shopping-item__checked">${
      item.name
    }</span>`;
    if (!item.checked) {
      itemTitle = `
        <form class="js-edit-item">
          <input class="shopping-item type="text" value="${item.name}" />
        </form>
      `;
    }

    return `
      <li class="js-item-element" data-item-id="${item.id}">
        ${itemTitle}
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
  }

  function generateShoppingItemsString(shoppingList) {
    const items = shoppingList.map(item => generateItemElement(item));
    return items.join('');
  }

  function render() {
    // Filter item list if Store prop is true by item.checked === false
    let items = Store.items;
    if (Store.hideCheckedItems) {
      items = Store.items.filter(item => !item.checked);
    }

    // Filter item list if Store prop `searchTerm` is not empty
    if (Store.searchTerm) {
      items = Store.items.filter(item => item.name.includes(Store.searchTerm));
    }

    // render the shopping list in the DOM
    console.log('`render` ran');
    const shoppingListItemsString = generateShoppingItemsString(items);

    // insert that HTML into the DOM
    $('.js-shopping-list').html(shoppingListItemsString);
  }

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.js-item-element')
      .data('item-id');
  }

  function handleNewItemSubmit() {
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const newItemName = $('.js-shopping-list-entry').val();
      Store.addItem(newItemName);
      render();
    });
  }

  function handleItemCheckClicked() {
    $('.js-shopping-list').on('click', '.js-item-toggle', event => {
      const id = getItemIdFromElement(event.currentTarget);
      Store.findAndToggleChecked(id);
      render();
    });
  }

  function setSearchTerm(val) {
    Store.searchTerm = val;
  }

  function handleDeleteItemClicked() {
    // like in `handleItemCheckClicked`, we use event delegation
    $('.js-shopping-list').on('click', '.js-item-delete', event => {
      // get the index of the item in Store.items
      const id = getItemIdFromElement(event.currentTarget);
      // delete the item
      Store.findAndDelete(id);
      // render the updated shopping list
      render();
    });
  }

  function handleEditShoppingItemSubmit() {
    $('.js-shopping-list').on('submit', '.js-edit-item', event => {
      event.preventDefault();
      const id = getItemIdFromElement(event.currentTarget);
      const itemName = $(event.currentTarget)
        .find('.shopping-item')
        .val();
      Store.findAndUpdateName(id, itemName);
      render();
    });
  }

  function handleToggleFilterClick() {
    $('.js-filter-checked').click(() => {
      Store.toggleCheckedFilter();
      render();
    });
  }

  function handleShoppingListSearch() {
    $('.js-shopping-list-search-entry').on('keyup', event => {
      const val = $(event.currentTarget).val();
      setSearchTerm(val);
      render();
    });
  }

  function bindEventListeners() {
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
    handleEditShoppingItemSubmit();
    handleToggleFilterClick();
    handleShoppingListSearch();
  }

  // This object contains the only exposed methods from this module:
  return {
    render: render,
    bindEventListeners: bindEventListeners
  };
})();
