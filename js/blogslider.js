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
  blog_dots_parent = document.getElementById('blogslider');
  var _bdot = 1;
  var span = document.createElement("span");
  
  for (each in blogs){
      var new_dot = document.createElement('span');
      new_dot.setAttribute("class", "w3-margin-right w3-badge blogdots w3-border w3-transparent w3-hover-blue");
      var div = `currentDot(`+ _bdot +`)`;
      new_dot.setAttribute( "onclick",div);
      _bdot += 1;
      span.appendChild(new_dot);
  }
  blog_dots_parent.appendChild(span);
  
  var dotIndex = 1;
  showdot(dotIndex);
  
  function dotInc(n) {
    showdot(dotIndex += n);
  }
  
  function currentDot(n) {
    showdot(dotIndex = n);
  }
  
  function showdot(n) {
    var i;
    var m = document.getElementsByClassName("card-blog");
    var blogdot = document.getElementsByClassName("blogdots");
    if (n > m.length) {dotIndex = 1}
    if (n < 1) {dotIndex = m.length}
    if (m.length%3 == 0){var _3 = true}
    if (m.length%3 == 1){var _1 = true}
    if (m.length%3 == 2){var _2 = true}
  
    for (i = 0; i < m.length; i++) {
      m[i].style.display = "none";  
      blogdot[i].className = blogdot[i].className.replace(" w3-blue", "");
      m[i].className = m[i].className.replace(" w3-border", "");
    }
    if (getWidth() < 750){
      m[dotIndex-1].style.display = "block";
    }
    else{
      if (_3){
        if (dotIndex%3 == 0){
            m[dotIndex-1].style.display = "block";
            m[dotIndex-2].style.display = "block";
            m[dotIndex-3].style.display = "block";
          }
        else if (dotIndex%3 == 1){
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
            m[dotIndex+1].style.display = "block";
          }
        else{
            m[dotIndex-2].style.display = "block";
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
          }
        }
      else if(_1){
        if (dotIndex == m.length){
            m[dotIndex-1].style.display = "block";
          }
        else if (dotIndex%3 == 0){
            m[dotIndex-1].style.display = "block";
            m[dotIndex-2].style.display = "block";
            m[dotIndex-3].style.display = "block";
          }
        else if (dotIndex%3 == 1){
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
            m[dotIndex+1].style.display = "block";
          }
        else{
            m[dotIndex-2].style.display = "block";
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
          }
      }
      else{
        if (dotIndex == m.length-1){
          m[dotIndex-1].style.display = "block";
          m[dotIndex].style.display = "block";
        }
        else if (dotIndex == m.length){
          m[dotIndex-1].style.display = "block";
          m[dotIndex-2].style.display = "block";
        }
        else if (dotIndex%3 == 0){
            m[dotIndex-1].style.display = "block";
            m[dotIndex-2].style.display = "block";
            m[dotIndex-3].style.display = "block";
          }
        else if (dotIndex%3 == 1){
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
            m[dotIndex+1].style.display = "block";
          }
        else{
            m[dotIndex-2].style.display = "block";
            m[dotIndex-1].style.display = "block";
            m[dotIndex].style.display = "block";
        }
      }
      }
      m[dotIndex-1].className += " w3-border";
      blogdot[dotIndex-1].className += " w3-blue";
    }
  