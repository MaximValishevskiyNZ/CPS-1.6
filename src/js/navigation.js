export let toggleAsideActive = function(el, aside, wrapper, body, nav) {
  el.onclick = function() {
    if (el.classList.contains('navigation__phone-button') || el.classList.contains('navigation__message-button')) {
      wrapper.classList.remove("blur");
      nav.classList.remove("active");
    }
    if (nav) nav.classList.toggle("blur");
    aside.classList.toggle('active');
    wrapper.classList.toggle("blur");
    console.log('gay')
  }

}

export let toggleAsideActiveOnOpen = function(aside, open, close, wrapper, body) {
  document.onclick = function (e) {
    if (!aside.contains(e.target) && !open.contains(e.target) || close.contains(e.target)) {
      if (aside.classList.contains('active')) {
        aside.classList.remove("active");
        wrapper.classList.remove("blur");
      }
    }
  };
}

