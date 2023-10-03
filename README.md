<h1 align="center"> Inkstory </h1>

<div align="center" text-align="center">
  
![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-brightgreen)
  
</div>
  
## About
Inkstory is a modern day online bookstore at (https://aditi-inkstory.netlify.app/). It is based on the goodreads dataset comprising of 11 thousand books. The book store supports basic CRUD operations for books and a cart functionality to place order.

## Table of Contents
- [Features implemented :boom:](#features-implemented)
- [How to use](#how-to-use)
- [Installation 🐣](#installation)
- [Starting the app](#starting-the-app)

## Features Implemented
- User login and logout using JWT.
- Redux based state managment for cart.
- CRUD operations for Books for authenticated users.
- Pagination for browsing books in an organised manner.
- MongoDB database with proper schemas.
- Frontend deployment on Netlify.
- Backend deployment on Render.

## How to use
1. Go to the website https://aditi-inkstory.netlify.app/
2. Sign up using providing basic details like name and phone number(format: +91XXXXXXXXXX).
You can use the following for testing email: test@gmail.com password: Test@123 
3. The authenticated users get an option to edit, add and delete books.
4. Browse through the book list on All Books page in a pginated manner.
5. Search through the entire databased of 11 thousand books using the author name or title.
6. Add to cart books of your choice.
7. Navigate to cart page you the 'Cart' option in Navbar.
8. Proceed to checkout after confirming the total.

## Installation

Follow these steps to install this project directory:

```
# clone the repo
$ git clone https://github.com/Aditi-Gorde/Online_Bookstore

# install backend dependencies
$ npm i

# go into frontend directory:
$ cd client

# install frontend dependencies
$ npm i

# This app by default uses the production database. If you wish to use local database
# Inside the .env in client directory set environment = debug

```

## Starting the app

Follow these steps to run the app on your local machine:

```
# With the production database
# from the root directory go into app's frontend directory:
$ cd client
  
# launch the app
$ npm run start

# With the local database
# in the root directory
$ npm run start

# in another terminal
$ cd client
$ npm run start

```
