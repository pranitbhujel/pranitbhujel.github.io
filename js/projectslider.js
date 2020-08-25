function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  // projects slider
  dots_parent = document.getElementById('projectslider');
  var _dot = 1;
  var main_span = document.createElement("span");
  
  for (each in projects){
      var element = document.createElement('span');
      element.setAttribute("class", "w3-margin-right w3-badge projectdots w3-border w3-transparent w3-hover-blue");
      var div = `currentDiv(`+ _dot +`)`;
      element.setAttribute( "onclick",div);
      _dot += 1;
      main_span.appendChild(element);
  }
  dots_parent.appendChild(main_span);
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("projectcard");
    var dots = document.getElementsByClassName("projectdots");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    if (x.length%3 == 0){var _3 = true}
    if (x.length%3 == 1){var _1 = true}
    if (x.length%3 == 2){var _2 = true}
  
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      dots[i].className = dots[i].className.replace(" w3-blue", "");
      x[i].className = x[i].className.replace(" w3-border", "");
    }
    if (getWidth() < 750){
      x[slideIndex-1].style.display = "block";
    }
    else{
      if (_3){
        if (slideIndex%3 == 0){
            x[slideIndex-1].style.display = "block";
            x[slideIndex-2].style.display = "block";
            x[slideIndex-3].style.display = "block";
          }
        else if (slideIndex%3 == 1){
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
            x[slideIndex+1].style.display = "block";
          }
        else{
            x[slideIndex-2].style.display = "block";
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
          }
        }
      else if(_1){
        if (slideIndex == x.length){
            x[slideIndex-1].style.display = "block";
          }
        else if (slideIndex%3 == 0){
            x[slideIndex-1].style.display = "block";
            x[slideIndex-2].style.display = "block";
            x[slideIndex-3].style.display = "block";
          }
        else if (slideIndex%3 == 1){
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
            x[slideIndex+1].style.display = "block";
          }
        else{
            x[slideIndex-2].style.display = "block";
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
          }
      }
      else{
        if (slideIndex == x.length-1){
          x[slideIndex-1].style.display = "block";
          x[slideIndex].style.display = "block";
        }
        else if (slideIndex == x.length){
          x[slideIndex-1].style.display = "block";
          x[slideIndex-2].style.display = "block";
        }
        else if (slideIndex%3 == 0){
            x[slideIndex-1].style.display = "block";
            x[slideIndex-2].style.display = "block";
            x[slideIndex-3].style.display = "block";
          }
        else if (slideIndex%3 == 1){
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
            x[slideIndex+1].style.display = "block";
          }
        else{
            x[slideIndex-2].style.display = "block";
            x[slideIndex-1].style.display = "block";
            x[slideIndex].style.display = "block";
        }
      }
      }
      x[slideIndex-1].className += " w3-border";
      dots[slideIndex-1].className += " w3-blue";
    }
  