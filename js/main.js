const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

// Oldin saqlangan rejimni tekshirish
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Tugmani bosganda rejimni o'zgartirish
elSiteThemeToggler.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Yorug' rejimni saqlash
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Qorong'u rejimni saqlash
  }
});