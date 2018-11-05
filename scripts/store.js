/*eslint-env jquery*/
'use strict';
const foo = 'bar';
const store = (function() {
  const items = [];
  let hideCheckedItems = false;

  const addItem = function(itemName) {};
  const updateItem = function(id, updateData) {};
  const toggleHideCheckedFilter = function() {};

  return {
    items,
    hideCheckedItems,
    addItem,
    updateItem,
    toggleHideCheckedFilter
  };
})();
