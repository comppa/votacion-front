
  var p = {
    navlink: document.querySelectorAll('list-group-item')
  }


  var f = {

    start: function () {
        for (let i = 0; i < p.navlink.length; i++) {
          console.log(p.navlink[i]);
           p.navlink[i].addEventListener("click", function () {
              this.className += " active";
           });
        }
    }
  }

  f.start();