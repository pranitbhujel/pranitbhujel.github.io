// Script to fetch all the blog elements 
var parent_project = document.getElementById('parent_project');
for (each in projects){
var element = document.createElement('li');
var intro =  `
          <div class="work-box projectcard slides">
            <div class="work-img"><img src="images/` + projects[each]['image_url'] + `" alt="project image" class="img-fluid">
            </div>
            <div class="data">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="w-title">` + projects[each]['title'] + `</h2>
                  <p class="work-content">` + projects[each]['description'] + `</p>
                  <button class="w3-button w3-black" onclick="loadProjectDemo()">Live Demo</button><button class="w3-button w3-black"><i class="fa fa-fw fa-github"></i></button>
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
for (each in blogs){
var element = document.createElement('li');
var intro =  `
            <div class="card-blog">
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
              </div>
              <div class="card-footer w3-border-right w3-border-left">
                <div class="post-author"><a><img src="images/me.png" alt="image" class="avatar rounded-circle"> 
                <span class="author">` + blogs[each]['date'] + `</span></a></div>
              </div>
            </div>
            <br />
`
element.innerHTML = intro;
parent_blog.appendChild(element);
}