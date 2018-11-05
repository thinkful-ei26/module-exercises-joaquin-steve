/*eslint-env jquery*/
/* global Item */
'use strict';

const store = (function() {
  const items = [];
  let hideCheckedItems = false;

  const addItem = function(name) {
    try {
<<<<<<< HEAD
      Item.validateName(name)
      this.items.push(Item.create(name))
      console.log('adding item')
=======
      Item.validateName(name);
      this.items.push(Item.create(name));
>>>>>>> 70368952fa4b3ea6f124a285e8cc8ef586059df8
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
    return this.items.filter(item => item.id !== id);
    // console.log('find and delete running!');
  };

  return {
    items,
    hideCheckedItems,
    addItem,
    updateItem,
    toggleHideCheckedFilter,
    findAndUpdateName,
    findById,
    findAndToggleChecked,
    findAndDelete
  };
})();
