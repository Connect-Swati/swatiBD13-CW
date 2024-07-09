let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log("port is running at https://localhost", port);
});

/*Question 1:

Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative. */

app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if (number > 0) {
    result = number + " Number is positive";
  } else {
    result = number + " Number is negative";
  }
  res.send(result);
});
/*Question 2:

Create an endpoint that takes a number as a query parameter and returns if the number is even or odd. */

app.get("/check-even-odd", (req, res) => {
  let number = parseInt(req.query.number);
  let result = "";
  if (number % 2 === 0) {
    result = number + " Number is even";
  } else {
    result = number + " Number is odd";
  }

  res.send(result);
});

/* Question 3:

Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.*/

app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;
  let booleanValue = isLoggedIn === "true" ? true : false;
  /*console.log("isLoggedIn value = " + isLoggedIn + " and data type of isLoggedIn =" + typeof isLoggedIn,
  ); 
  */

  /*
  console.log( "booleanValue of isLoggedIn = " +  booleanValue + " and data type of booleanValue = " +  typeof booleanValue,
  );
  */
  let result = "";

  if (booleanValue) {
    result = "User is logged in";
  } else {
    result = "User is not logged in";
  }

  res.send(result);
  //console.clear();
});

/*Question 4:

Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65). */

app.get("/check-discount", (req, res) => {
  let age = parseInt(req.query.age);
  let result = "";
  console.log("age of user is = " + age);
  if (age > 65) {
    // console.log("age of user is = " +  age)
    result = "age of user = " + age + " , User is eligible for discount";
  } else {
    result = "age of user = " + age + " , User is not eligible for discount";
  }
  res.send(result);
});

/*Question 5:

Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero
*/

app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if (number > 0) {
    result = "Number = " + number + " Number is positive";
  } else if (number < 0) {
    result = "Number = " + number + " Number is negative";
  } else {
    result = "Number = " + number + " Number is zero";
  }
  res.send(result);
});

/* Question 6:

Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).
*/
app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result = "";

  if (temperature < 15) {
    result = "Temperature = " + temperature + " , Temperature is cold";
  } else if (temperature >= 15 && temperature <= 25) {
    result = "Temperature = " + temperature + " , Temperature is warm";
  } else {
    result = "Temperature = " + temperature + " , Temperature is hot";
  }
  res.send(result);
});

/*Question 7:

Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).
*/

app.get("/check-activity-level", (req, res) => {
  let steps = parseInt(req.query.steps);
  let result = "";
  if (steps < 5000) {
    result = "Steps = " + steps + " , User's activity level is low";
  } else if (steps >= 5000 && steps <= 10000) {
    result = "Steps = " + steps + " , User's activity level is moderate";
  } else {
    result = "Steps = " + steps + " , User's activity level is high";
  }

  res.send(result);
});

/*Question 8:

Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).
*/
app.get("/check-engagement", (req, res) => {
  let likes = parseInt(req.query.likes);
  let result = "";
  if (likes < 100) {
    result = "Likes = " + likes + " , Social media post has low engagement";
  } else if (likes >= 100 && likes <= 500) {
    result = "Likes = " + likes + " , Social media post has medium engagement";
  } else {
    result = "Likes = " + likes + " , Social media post has high engagement";
  }
  res.send(result);
});
