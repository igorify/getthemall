# GetThemAll Middleware

Use this module like middleware in Express application.

Install module via NPM `npm i debitoor-getthemall`

`const middleware = require('debitoor-getthemall');`

`app.get(/api/resources, middleware);`

GetThemAll provides handling multiple API routes.

## Example

Suppose you have an API
- GET api/users, api/users/:id
- GET api/customers, api/customers:id
- GET api/countries etc

Now you can go GET request like this:

`GET api/resources?users=api/users&customer=api/customers/23&countries=api/countries`

GetThemAll uses Node.js Stream, which sequentially loads data from requested routes.

Have a nice requesting <3
