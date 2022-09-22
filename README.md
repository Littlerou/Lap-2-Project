# Achieved

## Project Aims

The project was to develop a habit tracker app that provided the following functionalities:

- Login/Registration system.
- Manage user habits.
- Mark habits off as complete.

## Table of Contents

1. [Installation](#installation)
2. [Technologies](#technologies)
3. [Routes](#routes)
4. [Design](#site-design)
5. [Wins & Challenges](#wins-&-challenges)

## Installation

### *Site*

The site is deployed on [netlify](https://brilliant-monstera-150a9f.netlify.app/static/html/home_page).

### *Server*

The server is deployed on [heroku](https://lap2-project-achieved.herokuapp.com/).

### *To run locally*

- Clone or download the repo.
- Open a terminal from the within the backend folder.
- ```npm install``` to get all the required dependencies.
- ```npm run dev``` to initialise the server.
- Run home_page.html within the client-side folder on a live server.

## Technologies

- #### Client-side: HTML/CSS/JS
- #### Server-side: Node.js/JS
- #### Database: PostgreSQL

### Planning

- GitHub issues
- Excalidraw
- Slack

### Dependencies

- bcrypt
- express
- Jest
- pg
- Nodemon
- Jsonwebtoken
- JSDom

## Routes

```
router.get('/:id', completedController.show);
router.post('/', completedController.create)
```
- Gets a habit id and completion status.
- Posts completion dates.
---
```
router.get('/:id', habitsController.showById);
router.get('/user/:id', verifyToken, habitsController.showByUserId);
router.post('/', habitsController.create)
router.delete('/:id', habitsController.destroy)
```
- Gets all habits for a user id.
- Gets a habit by habit id.
- Posts habit data.
- Deletes by habit id. 
---
```
router.get('/', usersController.index)
router.post('/', usersController.create)
router.post('/login', usersController.showByUsername)
```
- Gets user data.
- Creates a new user account.
- Logs in to a user account.

## Site Design

#### *Home page*
![image](https://user-images.githubusercontent.com/86776447/191809825-1994ad0e-9cd4-425f-b41c-3c2726186fdc.png)
---
#### *Log in form*

![image](https://user-images.githubusercontent.com/86776447/191809937-d088d53c-2392-4b55-9ef9-f8d13f6db67b.png)
---
#### *Sign up form*

![image](https://user-images.githubusercontent.com/86776447/191809963-e3b780fb-dbe8-422b-a062-cadad0874b94.png)
---
#### *User home page*
![image](https://user-images.githubusercontent.com/86776447/191810228-dcd7405e-af7b-44c6-9e1e-2c365c64a522.png)
---
#### *Habit calendar*
![image](https://user-images.githubusercontent.com/86776447/191810350-788ae0df-8fa8-4a1c-82bf-54ccbedad3cb.png)
---
#### *Create habit form*
![image](https://user-images.githubusercontent.com/86776447/191810408-8143c277-28d9-4333-a72f-a877c84a2fd1.png)
