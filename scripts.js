(function () {
  const transtionTime = 300;
  const offcanvasToggle = document.getElementById("offcanvas-toggle");
  const offcanvasMenu = document.getElementById("offcanvas-menu");

  offcanvasToggle.addEventListener("click", function (e) {
    const isCollapsed = this.classList.contains("collapsed");
    let transitionTimeoutID = undefined;

    this.classList.toggle("collapsed");
    clearTimeout(transitionTimeoutID);

    if (isCollapsed) {
      offcanvasMenu.classList.add("showing");
      transitionTimeoutID = setTimeout(() => {
        offcanvasMenu.classList.add("show");
        offcanvasMenu.classList.remove("showing");
      }, transtionTime);
    } else {
      offcanvasMenu.classList.add("hiding");
      transitionTimeoutID = setTimeout(() => {
        offcanvasMenu.classList.remove("show");
        offcanvasMenu.classList.remove("hiding");
      }, transtionTime);
    }
  });
})();
