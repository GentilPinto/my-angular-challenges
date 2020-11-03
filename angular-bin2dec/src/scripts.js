document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    body.classList.toggle('theme-dark', localStorage.getItem('theme') !== null);
});