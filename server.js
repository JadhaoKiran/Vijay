var express = require('express');
var app = express();

app.get("/",(res,resp)=>
{
    resp.send(
        "<h1>Welcome to Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Product for sales</h3>"
        + "<br/>"
            + "<ol>"
            +"<li>Laptops</li>"
            +"<li>Mobile Phones</li>"
            +"<li>Hololgraphic Devices</li>"
            +"<li>Samrt Watches</li>"
            +"<li>Gaming Consoles</li>"
            + "</ol>"

        
    );
});

var server = app.listen(7000);
console.log("server start at port 7000");