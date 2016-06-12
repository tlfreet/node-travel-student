var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {


	console.log("Travel application is running!");

	var myName = "Theresa Lynne";
	app.get("/", function (req, resp) {
    resp.render('index');
	//	resp.write("<html><body><h1>Welcome to "+myName+"'s first web app!</h1> <p>Hello Friends!</p> <div><button>Let's Get Started with Traveling</button></div></body></html>");
//		resp.end();
	});

  app.get('/icecream/:flavor', function(req, resp) {
    resp.render('icecream', {
      flavor: req.params.flavor
    });
  })

  app.get('/blog', function(req, resp) {
    db.findArray({}, function(results) {
      console.log(results);
      resp.render('blog', { results: results })
    })
  });
})