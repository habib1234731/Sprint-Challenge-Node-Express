# Review Questions

## What is Node.js?
Node is an opensource server framework. It is a JS environment that is able to execute JS code server-side.

## What is Express?
Express is a web application framework to help organiz web applications into an MVC architecture on the server side.

## Mention two parts of Express that you learned about this week.
Bodyparser, creating and using custom middleware.

## What is Middleware?
It is a function that has access to the request and response objects and the next function in the application's request-response cycle. The next function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

## What is a Resource?
A place we get our data from.

## What can the API return to help clients know if a request was successful?
Success status codes:200-299

## How can we partition our application into sub-applications?
By creating separate files for the routers and server.

## What is CORS and why do we need it?
CORS stands for Cross Origin Resource Sharing. It is used to allow outside sources to access our data from a different port.