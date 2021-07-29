// Script to fetch all the blog elements 
var parent_project = document.getElementById('parent_project');
for (each in projects){
  demo = "";
  github = "";
  if (projects[each]['link'] != "#"){
    demo = `<button class="w3-button w3-black" onclick="loadProject('` + projects[each]['link'] + `')">Live Demo</button>`;
  }
  if (projects[each]['github'] != "#"){
    github = `<button class="w3-button w3-black"><i class="fa fa-fw fa-github"></i></button>`;

  }
  var element = document.createElement('li');
  var intro =  `
            <div class="work-box projectcard slides">
              <div class="work-img"><img src="images/` + projects[each]['image_url'] + `" alt="project image" class="img-fluid">
              </div>
              <div class="data">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="w-title">` + projects[each]['title'] + `</h3>
                    <p class="work-content">` + projects[each]['description'] + `</p>
                    ` + demo + github + `
                  </div>
                </div>
              </div>
              </a>
            </div>
  `
  element.innerHTML = intro;
  parent_project.appendChild(element);
}

// Script to fetch all the project elements 
var parent_blog = document.getElementById('parent_blog');
count = 0
for (each in blogs){
  if (count < 5){
  var element = document.createElement('li');
  var intro =  `
              <div class="card-blog col-md-12">
                <div class="card-img">
                  <a href="` + blogs[each]['link'] + `">
                    <img src="images/` + blogs[each]['image_url'] + `" alt="blog images" class="img-fluid" style="height:200px;width: 100%;"">
                  </a>
                </div>
                <div class="card-body">
                  <div class="card-category-box">
                    <div class="card-category">
                      <h6 class="category">` + blogs[each]['category'] + `</h6>
                    </div>
                  </div>
                  <h3 class="card-title"><a href="` + blogs[each]['link'] + `">` + blogs[each]['title'] + `</a></h3>
                  <p>` + blogs[each]['description'].substr(0, 70) + `...</p>
                <div class="post-author"><a><img src="images/me.png" alt="image" class="avatar rounded-circle"> 
                  <span class="author"><b>Pranit Bhujel </b> on ` + blogs[each]['date'] + `</span></a></div>
                </div>
                </div>
              <br />
  `
  element.innerHTML = intro;
  parent_blog.appendChild(element);
  count++;
  }
  else if (count<10){

  }
}

function loadProject(url){
  console.log('Here')
  window.open(url, '_blank').focus();
}