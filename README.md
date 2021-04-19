# Getting started
To get the Node server running locally:
- Clone this repo
-  `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instruction](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run devStart` to start the local server


## Code Overview
### Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-validator](https://express-validator.github.io/docs/) - A set of express.js middlewares that wraps validator.js validator and sanitizer functions
- [mongoose](https://mongoosejs.com) - elegant mongodb object modeling for node.js
- [pug](https://pugjs.org/api/getting-started.html) -Return a string of HTML rendered with your data


## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API. They contain
- `models/` - This folder contains the schema definitions for our Mongoose models.


## Result

### [Catalog](http://localhost:3000/catalog):

[![Brought to you by Thinkster](https://cdn.glitch.com/4b860bd1-8827-4afa-81ef-0d7dc00f8c8b%2F3b0fce9b-6dcd-4e10-bf8d-5303077ebe24.image.png)](https://cdn.glitch.com/4b860bd1-8827-4afa-81ef-0d7dc00f8c8b%2F3b0fce9b-6dcd-4e10-bf8d-5303077ebe24.image.png)

### [All books](http://localhost:3000/catalog/books):

[![Brought to you by Thinkster](https://cdn.glitch.com/4b860bd1-8827-4afa-81ef-0d7dc00f8c8b%2F2a593154-a212-4acd-99bc-66ad3ed338a6.image.png?v=1618849836448)](http://localhost:3000/catalog)


### [All book-instances](http://localhost:3000/catalog/authors):
[![Brought to you by Thinkster](https://cdn.glitch.com/4b860bd1-8827-4afa-81ef-0d7dc00f8c8b%2F9052af87-ac11-4751-9c6f-afe56300fef0.image.png?v=1618850564197)](https://cdn.glitch.com/4b860bd1-8827-4afa-81ef-0d7dc00f8c8b%2F9052af87-ac11-4751-9c6f-afe56300fef0.image.png?v=1618850564197)
