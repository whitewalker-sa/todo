
## Usage

![alt text](https://i.ibb.co/xJLFY9P/todo.png)

```bash

Select the api row you want to call
Collapse the row on the far right with the drop down icon
Click the  the button "Try it Now"
Modify your parameters by id(primary key), firstName, lastName or todo title.
Press the button Execute
If status code '200' or '201' is returned, the call was successful. 

```



## Description

NodeJS application that manages a database of users and a todo list for each user . The application uses NestJS Framework RESTful API, MySQL and Swagger documentation


## Installation

```bash
$ git clone https://github.com/whitewalker-sa/todo.git
$ cd todo
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

Navigate to 'http://localhost:3000/#/users' or 'http://localhost:3000/#/todos' to make CRUD API call using SWAGGER API UI.

Alternatively you may use Postman for API testing
```

Next up, generate mysql database.

If you already have mysql in your development environment, you can use that.

But if you don't have mysql database, try this process.

Install docker for your OS and run following commands.

If your docker is successfully installed, you can use docker cli.

```bash
  docker run --name nest -d -p 3306:3306 -e MYSQL_DATABASE=test -e MYSQL_ROOT_PASSWORD=root -v ~/database/nest:/var/lib/mysql mysql:5.7
```

And then, you can connect mysql in http://localhost:3306, username 'root' and password is 'root'.



## Start with docker

Build the image using docker cli

```bash
  docker build -t user-todo-api .
  docker images # list up docker images
```

And then you can create and run docker container using builded image.

```bash
  docker run -d -p 3000:3000 user-todo-api
  docker ps # list up running container
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Start with docker compose

Docker compose in this project is include api and mysql 5.7 for database.

Run followed command in project directory.

```bash
  docker-compose up -d # build images, create and run containers in background
```

If container is created, you can access api on http://localhost:3000/#/.

And you can access database through http://localhost:3306.


## Access phpmyadmin to view API call changes in MySQL database

```bash
Ensure that mysql server is running on port 3036 
Type 'http://localhost/phpmyadmin' in the browser
Login 'root' password 'root' database_name 'test'
```

## Stay in touch

- Author - [Mpho Louis](https://kamilmysliwiec.com)
- Twitter - [@whitewalker_01](https://twitter.com/barayiti)
- Linkedin  [Linkedin](https://linkedin.com/in/mpho-louis)

## License

[MIT licensed](LICENSE).
