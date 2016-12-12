var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', function (event) {
    deleteActiveClass();
    this.classList.add('active');

    var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
    if (sectionToGo.length > 1) {
      event.preventDefault();
      var goTo = sectionToGo[sectionToGo.length - 1];
      getElementByIdAndScroll(goTo);
    }
  });
}


function getElementByIdAndScroll(name) {
    var element;
    if (name == '') {
        element = document.getElementsByClassName('header')[0];
    } else {
        element = document.getElementById(name);
    }

    scrollToElement(element);
}

function scrollToElement(element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;

    if(!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, "60");
    } else {
        element.lastJump = null;
    }
}


function deleteActiveClass() {
  /*for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.remove('active');
  };*/
  document.getElementsByClassName('navbar-item active')[0].classList.remove('active');
}

var cumulativeOffset = function (element) {
  var top = 0;
  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top;
}

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetEquipo = cumulativeOffset(document.getElementById('equipo')) - 50;
var offsetTransporte = cumulativeOffset(document.getElementById('transporte')) - 50;

window.addEventListener('scroll', changeMenuStyle);



function changeMenuStyle(event) {
    var previous;

    if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
        if(!previous) {
            previous = 1;
        } else if(previous == 1) {
            return false;
        }

        deleteActiveClass();
        document.querySelector('a[href="#"]').parentNode.classList.add("active");
    } else if(window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEquipo) {
        if(!previous) {
            previous = 2;
        } else if(previous == 2) {
            return false;
        }

        deleteActiveClass();
        document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetEquipo && window.pageYOffset < offsetTransporte) {
        if(!previous) {
            previous = 3;
        } else if(previous == 3) {
            return false;
        }

        deleteActiveClass();
        document.querySelector('a[href$="equipo"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetTransporte) {
        if(!previous) {
            previous = 4;
        } else if(previous == 4) {
            return false;
        }

        deleteActiveClass();
        document.querySelector('a[href$="transporte"]').parentNode.classList.add("active");
    }
}
