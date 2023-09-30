
  var p = {
    navlink: document.querySelectorAll('.nav-link')
  }


  var f = {

    inicio: function () {
        for (let i = 0; i < p.navlink.length; i++) {
           console.log(p.navlink[i]);
        }
    }
  }

  f.inicio();