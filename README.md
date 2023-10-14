# Task Tracker (Front End)

This fullstack web application allows us to keep track of our pending tasks in a simple list, being able to add and delete items as needed. The application makes use of an online database for data persistance and accessibility across different devices, and presents a reactive and reponsive UI.

Note: This is the client-side frontend part of the application. For the backend, visit the following link:

**Link to backend:** https://github.com/borjaMarti/task-tracker-backend
**Link to project:** https://github.com/borjaMarti/task-tracker-frontend

---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Vite, Node.js, Express.js, MongoDB, Mongoose

On first use, any items present in the database are loaded into the app.

The user can then, through the user interface, add, delete, and toggle reminders.

All of these actions are passed to and handled by the back-end server, which routes the requests to their respective controller, communicating with MongoDB Atlas through the use of Mongoose schemas to persist the data.

---

## Install all the dependencies or node packages used for development via Terminal

`npm install`

---

## Things to add

- ## Add your API URL to `config.js` (`http://localhost:PORT` substituting `PORT` for the port number your used in the backend `.env` file).

Have fun testing and improving it! 😎
