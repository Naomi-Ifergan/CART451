let express = require('express');
const portNumber =4200;
const app = express();
app.get('/', requestHandler);
app.use('/veg',vegRoutes);
app.use('/fruit',fruitRoutes);

function requestHandler(request,response){
    // send a default response to the client...
    response.send("HELLO WORLD");
     console.log(request); //built in
      console.log(response); //built  in
    console.log(request.url);
    }

    function fruitRoutes(req, res, next){
        // req is the Node.js http request object
       // res is the Node.js http response object
       // next is a function to call to invoke the next middleware
       console.log("IN FRUIT FUNCTION ");
       console.log(req);
      res.send("WE ARE HERE FRUIT ROUTE");
     }

     function vegRoutes(req, res, next){
        // req is the Node.js http request object
       // res is the Node.js http response object
       // next is a function to call to invoke the next middleware
       console.log("IN VEG FUNCTION ");
       console.log(req);
      res.send("WE ARE HERE VEG ROUTE");
     }


app.listen(portNumber, function () {
    console.log("Server is running on port "+portNumber);
  });
  
  
  