/*eslint-env jquery*/
'use strict';

const store = (function() {
  const foo = 'bar';
  const items = [];
  let hideCheckedItems = false;

  const addItem = function(name) {
    try {
      name.validateName(name);
      this.items.push(name.create(name));
    } catch (error) {
      console.log('cant add item ' + error.message);
    }
  };
  const findAndToggleChecked = function(id) {
    this.findById(element => {
      element.checked = !element.checked;
    });
  };
  const updateItem = function(id, updateData) {};
  const toggleHideCheckedFilter = function() {};

  const findById = function(id) {
    return items.find(id);
  };

  return {
    items,
    hideCheckedItems,
    addItem,
    updateItem,
    toggleHideCheckedFilter
  };
})();
