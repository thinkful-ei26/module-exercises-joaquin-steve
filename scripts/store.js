/*eslint-env jquery*/
/* global Item */
'use strict';

const Store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  const searchTerm = null;

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log('cant add item ' + error.message);
    }
    shoppingList.render();
  };
  const findAndToggleChecked = function(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  };
  const findById = function(id) {
    return this.items.find(element => element.id === id);
  };

  const findAndUpdateName = function(id, newName) {
    try {
      this.Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      console.log(error.message);
    }
  };

  const findAndDelete = function(id) {
    let index = this.items.findIndex(element => {
      element.id === id;
    });
    this.items.splice(index, 1);

    // console.log('find and delete running!');
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  function setSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }
  return {
    items,
    hideCheckedItems,
    addItem,
    findAndUpdateName,
    findById,
    findAndToggleChecked,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
})();
