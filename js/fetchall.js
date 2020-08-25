// Script to fetch all the blog elements 
var parent_blog = document.getElementById('parent_blog');
for (each in blogs){
var element = document.createElement('div');
element.setAttribute("class", "col-md-4");
var intro =  `
        <div class="card card-blog">
          <div class="card-img"><a href="` + blogs[each]['link'] + `"><img src="images/` + blogs[each]['image_url'] + `" alt="website template image" class="img-fluid"></a></div>
          <div class="card-body">
            <div class="card-category-box">
              <div class="card-category">
                <h6 class="category">` + blogs[each]['category'] + `</h6>
              </div>
            </div>
            <h3 class="card-title"><a href=" ` + blogs[each]['link'] + `"> ` + blogs[each]['title'] + `</a></h3>
            <p class="card-description">`+ blogs[each]['description']+`</p>
          </div>
          <div class="card-footer">
            <div class="post-author"><a><img src="images/me.png" alt="image" class="avatar rounded-circle"> <span class="author">` + blogs[each]['date'] + `</span></a></div>
          </div>
        </div>
`
element.innerHTML = intro;
parent_blog.appendChild(element);
}

// Script to fetch all the project elements 
var parent_project = document.getElementById('parent_project');
for (each in projects){
var element = document.createElement('div');
element.setAttribute("class", "col-md-4");
var intro =  `
<div class="work-box projectcard slides">
    <div class="work-img"><img src="images/` + projects[each]['image_url'] + `" alt="project image" class="img-fluid"></div>
          <div class="data">
            <div class="row">
              <div class="col-sm-12">
                <h2 class="w-title">`+ projects[each]['title'] +`</h2>
                <p onclick="loadModal()" class="work-content">`+ projects[each]['description'] +`</p>
              </div>
            </div>
          </div>
          </a>
        </div>
`
element.innerHTML = intro;
parent_project.appendChild(element);
}