const elDarkModeButton = document.querySelector('.dark-light-mode');

elDarkModeButton.addEventListener('click', function(){
    document.body.classList.add('dark-mode');
    document.body.classList.remove('dark-mode');
})