const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div><input id="name" name="name" type="text" class="form-control" placeholder= "Author Name"/></div>
    
    <div><input id="email" name="email" type="email" class="form-control" placeholder = "Author Email"/></div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><input id="content" name="content" type="text" class="form-control"placeholder = "Add Content"/></div>
    
    <div><input type="radio" id="open"
                  name="status" value="open">
                    <label for="contactChoice1">open</label>
          <input type="radio" id="closed"
                    name="status" value="closed">
                  <label for="contactChoice1">closed</label>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);