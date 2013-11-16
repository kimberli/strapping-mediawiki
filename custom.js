window.onload = function() {

  function getScrollTop() {
    if (typeof window.pageYOffset !== 'undefined' ) {
      // Most browsers
      return window.pageYOffset;
    }

    var d = document.documentElement;
    if (d.clientHeight) {
      // IE in standards mode
      return d.scrollTop;
    }

    // IE in quirks mode
    return document.body.scrollTop;
  }

window.onscroll = function() {
    var box = document.getElementById('userbar'),
        scroll = getScrollTop();

    if (scroll >= 1) {
		box.style.position = "fixed";
    }
	else {
		box.style.position = "static";
	}
  };

};