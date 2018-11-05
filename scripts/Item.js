/*eslint-env jquery*/
/* global cuid */
'use strict'

const Item = (function() {
  const foo = 'bar'
  const items = []
  //   let hideCheckedItems = false;

  //   const addItem = function(itemName) {};
  //   const updateItem = function(id, updateData) {};
  //   const toggleHideCheckedFilter = function() {};
  function validateName(name) {
    if (!name) throw new Error('Name does not exist')
  }
  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    }
  }
  return {
    validateName,
    create
  }
})()
