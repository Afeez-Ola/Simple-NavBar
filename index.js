const mobileButton = document.querySelector('.mobile_button');

mobileButton.addEventListener('click', () => {
 const mobileNav = document.querySelector('.mobile_nav');
 mobileNav.classList.toggle('hidden');
});
