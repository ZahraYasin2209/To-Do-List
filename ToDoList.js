// Defining UI Variables:
let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let clearBtn = document.querySelector('.clear-tasks');

inputBx.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    addItem(this.value);
    this.value = "";
  }
});

// Notification UI
let showNotification = (message) => {
  alert(message); 
};

let addItem = (inputValue) => {
  let listItem = document.createElement('li');
  listItem.innerHTML = `${inputValue}<i></i>`;

  listItem.addEventListener('click', function() {
    this.classList.toggle('done');
  });

  listItem.querySelector('i').addEventListener('click', function() {
    showNotification(`Are you sure to delete task "${inputValue}"?`);
    listItem.remove();
  });

  list.appendChild(listItem);
};

// Clear all Tasks
clearBtn.addEventListener('click', function() {
  showNotification('All tasks will be cleared.');
  list.innerHTML = '';
});
