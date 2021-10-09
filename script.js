const btn = document.querySelector('button')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const para = document.querySelector('#para')

btn.addEventListener('click', () => {
    const emailInput = email.value
    const passInput = password.value
    console.log(para.textContent);
    para.textContent = emailInput;
})