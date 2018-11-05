/*eslint-env jquery*/
'use strict'

const store = (function() {
  const items = []
  let hideCheckedItems = false

  const addItem = function(name) {
    try {
      this.items.httvalidateName(name)
      this.items.push(name.create(name))
    } catch (error) {
      console.log('cant add item ' + error.message)
    }
  }
  const findAndToggleChecked = function(id) {
    this.findById(element => {
      element.checked = !element.checked
    })
  }
  const updateItem = function(id, updateData) {}
  const toggleHideCheckedFilter = function() {}

  const findById = function(id) {
    return this.items.find(element => element.id === id)
  }

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName)
      this.findById(id).name = newName
    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    items,
    hideCheckedItems,
    addItem,
    updateItem,
    toggleHideCheckedFilter,
    findAndUpdateName,
    findById,
    findAndToggleChecked
  }
})()
