# eCommerce Back End
## Description
A back-end database handler for a generic ecommerce application. The database contains tables for Categories, Tags, Products (which have one category and multiple tags), and ProductTags (the junction table of Product and Tag). The back end also defines routes for each of the three tables, allowing users to view, update, and delete items, as well as post new ones.
The purpose of this project was to practice working with databases using ORMs such as Sequelize (the ORM used in this application). Through the development of the application, I've learned a lot about how databases work and how to create and modify tables. It has also served as good practice working with routing methods. I also learned a lot about asynchronous functions and proper syntax when fetching api data.

## Installation
The application requires node, mysql, and an API workflow like Postman. The application also has dependencies, so make sure to run npm install to get sequelize, express, etc.

## Usage
Install dependencies using npm install. Then, to seed the database with example items, first enter the mysql shell and source the schema located in the db folder. Then, in a new terminal, use npm run seed to seed the database. Finally, the application can be deployed using npm start.
Once the application is deployed, the user can make various requests to the api/ routes. Individual rows can be targeted by their ids. For example, a GET request to /api/categories/2 will return the category with the id of 2. For PUT and POST routes, refer to the models in the models folder for proper column names.

[This video](https://drive.google.com/file/d/1npBeSWUEItTYjC1L_08APdqCjfJE8R7h/view) shows how to start the application and each of the possible requests.

## Credits
The [starter code](https://github.com/coding-boot-camp/fantastic-umbrella) for this project was provided by the University of Minnesota Full Stack Coding Bootcamp.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://opensource.org/licenses/MIT

## Questions
I can be reached with questions or feedback at https://github.com/owenphineas

or via email: opjoh10@gmail.com
