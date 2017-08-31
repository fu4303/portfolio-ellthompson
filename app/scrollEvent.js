export default function(store) {
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
        store.dispatch({
            type: 'UPDATE_SCROLL_POS',
            value: scroll_pos
        });
    }

    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });

};
