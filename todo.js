const addButton = document.getElementById('add')
const list = document.querySelector('.list')
const form = document.getElementById('addTodoForm')

const handleAddItem = e => {
  e.preventDefault()

  const newItem = document.createElement('li')
  const checkbox = document.createElement('input')
  const content = document.createElement('span')
  const removeButton = document.createElement('button')
  const inputValue = form.todo.value

  checkbox.type = 'checkbox'
  content.textContent = inputValue
  removeButton.textContent = '削除'
  
  newItem.appendChild(checkbox)
  newItem.appendChild(content)
  newItem.append(removeButton)
  
  removeButton.addEventListener('click', () => list.removeChild(newItem))
  
  checkbox.addEventListener('click', () => {
    if(newItem.style.textDecoration == "line-through"){
      newItem.style.textDecoration = "none"
    }else{
      newItem.style.textDecoration = "line-through"

    }
  })
  
  list.appendChild(newItem) // ulにli要素を挿入する
}

addButton.addEventListener('click', handleAddItem)