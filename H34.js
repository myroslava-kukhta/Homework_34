'use strict';

class TodoList {
  constructor() {
    this.list = [];
    this.inputElement = document.querySelector('#input');
    this.listElement = document.querySelector('#list');

    this.inputElement.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.addTodo();
        console.log(this.list);
      }
    })
  }

  addTodo() {
    const todoText = this.inputElement.value;
    if (todoText.trim === '') {
      return;
    }

    const newTodo = { text: todoText, completed: false };
    this.list.push(newTodo);
    this.inputElement.value = '';
    this.renderTodoList();
  }

  deleteTodo(i) {
    this.list.splice(i, 1);
    this.renderTodoList();
  }

  toogleCompleted(i) {
    this.list[i].completed = !this.list[i].completed;
    this.renderTodoList();
  }

  renderTodoList() {
    this.listElement.innerHTML = '';

    for (let i = 0; i < this.list.length; i++) {
      const newLiElement = document.createElement('li');
      newLiElement.innerText = this.list[i].text;

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'delete';
      deleteButton.addEventListener('click', () => {
        this.deleteTodo();
      })
      
      newLiElement.appendChild(deleteButton);

      const completedCheckbox = document.createElement('input');
      completedCheckbox.setAttribute('type', 'checkbox');
      newLiElement.appendChild(completedCheckbox);

      if(this.list[i].completed) {
        completedCheckbox.setAttribute('checked', true);
      }

      completedCheckbox.addEventListener('click', () => {
        this.toogleCompleted(i);
      });

      this.listElement.appendChild(newLiElement);
    }
  }
}

const todoList = new TodoList();