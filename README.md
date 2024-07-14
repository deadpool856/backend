# webdev
  # Blog Demo with React.js

Overview

This is a demo project for a blog application built with React.js for the frontend and MySQL for the backend. The application allows users to view articles, leave comments, like articles, and pin articles. It also includes categories and article views tracking.

## Features

- View articles with images, titles, summaries, and content.
- Leave comments on articles.
- Like and pin articles.
- View articles by categories.
- Track article views.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)

## Backend Setup

1. Set up your MySQL database. Create a database and run the provided SQL script to create and populate the tables. The SQL script is available in the `backend` directory as `setup.sql`.

2. To execute the SQL script, use a MySQL client (e.g., MySQL Workbench) or the MySQL command line:

   ```sh
   mysql -u root -p your_database < setup.sql
