# node-jwt-authentication-api

Node.js + Express 4 - JWT Authentication API

Documentation at https://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api



## To use

`token=$(http :4000/users/authenticate username=test password=test|jq -r .token)`

Take that token and use it to make a call to `/users`:

`http :4000/users Authorization:"Bearer $token"`

