import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(localData, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getLocalData() {
  let localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

getLocalData();

formRef.addEventListener('submit', submitData);

function submitData(event) {
  event.preventDefault();
  this.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

