# GetThemAll Middleware

Use this module like middleware in express application.

`const middleware = require('getthemall');`

`app.get(/api/resources, middleware);`

GetThemAll provide handling multiple API routes.

## Exaple

Suppose you have an API 
- GET api/users, api/users/:id
- GET api/customers, api/customers:id
- GET api/countries etc

Now you can go GET request like this:

`GET api/resources?users=api/users&customer=api/customers/23&countries=api/countries`

GetThemAll use Node.js Stream, which sequentially loads data from requested routes.

Have a nice requesting <3
