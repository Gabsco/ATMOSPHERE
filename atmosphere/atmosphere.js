window.addEventListener('scroll', function() {
    const header = document.querySelector('.banniere');
    const scrollTop = window.scrollY;
    const banniereHeight = header.offsetHeight;
    const triggerHeight = banniereHeight - 50; // définissez ici la hauteur à partir de laquelle la bannière doit changer de couleur
    if (scrollTop > triggerHeight) {
      header.classList.add("black-background");
    } else {
      header.classList.remove("black-background");
    }
  });