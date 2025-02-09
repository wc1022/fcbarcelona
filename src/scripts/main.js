// This file contains the JavaScript code for the web page.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to the Simple Web Page!';

    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});