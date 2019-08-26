hljs.initHighlightingOnLoad();

var slides = document.querySelectorAll('.slide');
document.getElementById("container").innerHTML = "";

function getSlideNumber() {
  var slideNumber = parseInt(window.location.hash.substring(1))
  if (isNaN(slideNumber)) {
    return 0
  }
  return slideNumber
}



function nextSlide() {
  var nextNumber = getSlideNumber() + 1
  if (nextNumber > (slides.length - 1)) {
    nextNumber = slides.length - 1
  }
  window.location.hash = nextNumber;
};

function previousSlide() {
  var previousNumber = getSlideNumber() - 1
  if (previousNumber < 0) {
    previousNumber = 0;
  }
  window.location.hash = previousNumber;

}

function displaySlide() {
  var slideNumber = getSlideNumber()
  document.getElementById("container").innerHTML = slides[slideNumber].outerHTML;
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
}




window.addEventListener('hashchange', function () {
  displaySlide()
}, false);


function displayNextHidden() {
    console.log("Frag");
    var element = document.getElementsByClassName('hidden')[0];
    element.classList.remove("hidden",);
    element.classList.add("shown",);
}


function hideLastShow() {
    console.log("DeFrag");
    var elements = document.getElementsByClassName('shown');
    var element = elements[elements.length -1] 
    element.classList.remove("shown",);
    element.classList.add("hidden",);
}



document.addEventListener("keyup", event => {
  console.log(event.keyCode);
  if (event.keyCode === 32) {
    console.log("Next");
    nextSlide();
  }
  if (event.keyCode === 39) {
    console.log("Next");
    nextSlide();
  }
  if (event.keyCode === 38) {
    hideLastShow();
  }
  if (event.keyCode === 40) {
    displayNextHidden();
  }
  if (event.keyCode === 37) {
    console.log("Previous");
    previousSlide();
  }
  if (event.keyCode === 70) {
    window.open(window.location.href, 'video',
      'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=1280,height=720'
      );
  }
});



window.onload = function() {
  document.getElementById("container").classList.remove("hidden",);
  displaySlide()
};



document.addEventListener('click', function (event) {
  var XcontrolMargin = window.innerWidth * .25;
  var YcontrolMargin = window.innerHeight * .25;	
  console.log(YcontrolMargin);
  console.log(event.clientY);
  console.log(window.innerHeight)


  if (event.clientX > (window.innerWidth - XcontrolMargin)) {
    console.log("Next")
    nextSlide();
  } 
  
  else if (event.clientX < XcontrolMargin) {
    console.log("Precous")
    previousSlide();

  }

  else if (event.clientY < YcontrolMargin) {
    hideLastShow();

  } 

  else if (event.clientY > (window.innerHeight - YcontrolMargin)) {
        displayNextHidden();

  } 
  


}, false);


function changeScreenSize() {
  window.open(window.location.href, 'lectern', 'width=1280,height=720');
}
