const _ = require('lodash');
const form = document.querySelector('form.feedback-form');
const labels = document.querySelectorAll('label');
const user = JSON.parse(localStorage.getItem("feedback-form-state"));
labels.forEach(label => {
    try {
        label.firstElementChild.value = user[label.firstElementChild.name];
      } catch (error) {};
})
form.addEventListener('input', _.throttle(() => {
    const user = { };
    labels.forEach(label => {
        const key = label.firstElementChild.name;
        const value = label.firstElementChild.value;
        user[key] = value;
    })
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
}, 500))
form.addEventListener('submit', (event) => {
    const user = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(user);
    event.preventDefault();
    labels.forEach(label => {
        label.firstElementChild.value = "";
    })
    localStorage.clear();
});