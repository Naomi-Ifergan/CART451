window.onload = function()
{
    // get the myFavs element and add an event listener (click) to it:
    document.getElementById("myFavs").addEventListener("click", function() 
    {
        // get the values of the two input fields
        let favFruit =   document.getElementById("fruit").value;
        let favVeg =   document.getElementById("veg").value;
        console.log(favVeg);
        console.log(favFruit);

        // use the JQUERY ajax (not covering here) GET function to make a get request ... 
        // the endpoint and the vars we are passing...
        $.get(
            "/passingTheVars", // this si the endpoint (where i'm passing the values to)
            {paramOne : favFruit, paramTwo : favVeg}, // this data is formatted as a JavaScript object

            // if we get a response from the server .... 
            function(response) 
            {
                console.log('page content: ' + response);
            }
        ); // get
    }) //click function
}