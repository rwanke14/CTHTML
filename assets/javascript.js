var mtn1 = document.getElementById('mountain1');
var mtn2 = document.getElementById('mountain2')


$(mtn1).click(function (e) { 
    e.preventDefault();
    document.getElementById('mtn1Content').style.display="block"
    document.getElementById('mtn2Content').style.display="none"
});

$(mtn2).click(function (e) { 
    e.preventDefault();
    document.getElementById('mtn2Content').style.display="block"
    document.getElementById('mtn1Content').style.display="none"
});


window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}