(() => {
  const contactMobile = document.querySelector('.contact-container');
  const openMenuBtn = document.querySelector('.ini-menu');

  const toggleMenu = () => {
    const isMenuOpen = contactMobile.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);

})();