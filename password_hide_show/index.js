const password = document.getElementById('password');
const eye = document.getElementById('eye');

eye.addEventListener('click', (e) => {
    if(password.type === 'password'){
        password.type = 'text';
        eye.classList.replace('fa-eye-slash', 'fa-eye')
    }else{
        password.type = 'password';
        eye.classList.replace('fa-eye','fa-eye-slash')
    }
})