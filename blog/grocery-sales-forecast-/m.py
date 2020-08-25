s = '''
body{
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    margin-top: 80px;
  }
  h1, h3, h4, h5, h6{
    font-family: sans-serif;
    color: #333;
  }
  h2{
    color: #333;
  }
  @media (min-width: 767px){
    body{
      padding: 0px 25%;
    }
  }
  #navbar {
    background-color: #333; 
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    transition: top 0.3s; 
    z-index: 1000;
    border-bottom: 2px solid #0078ff;
  }

  #navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 15px;
    margin-left: 10px;
    text-decoration: none;
  }

  #navbar a:hover{
    color: #0078ff;
  }
  .w3-tag{
    background-color: #0078ff;
  }
  .title{
    margin-left: 10px;
  }
  .post-date{
    margin-right: 10px;
    margin-top: 10px;
  }
  .author{
    text-decoration: underline;
  }
'''

# p = s.strip(" ")
print(s)