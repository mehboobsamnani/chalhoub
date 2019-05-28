
# Single Page App
React js single page app to display news by categories

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 8.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/mehboobsamnani/chalhoub.git chalhoub-master

# Change directory
cd chalhoub-master

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Access the application
http://localhost:3000

# Optional with docker
 docker-compose up --build

# Build application
npm run build

#Run Build
serve -s build

# Test
npm test

# Lint
npm run lint

# Coverage
npm run coverage


Project Structure
-----------------

| Name                               | Description                                          
------------------------------------------------------------ |
| **src/components**/*               | Contains all of the views.
| **helpers**/*                      | Utility methods.
| .eslintrc                          | Rules for eslint linter.                             
| .gitignore                         | Folder and files ignored by git.                     
| .travis.yml                        | Configuration files for continuous integration.      
| app.js                             | The main component.                                  
| index.js                           | Entry point of the application.
| package.json                       | NPM dependencies.                                    | Dockerfile                         | commands for building docker image
| package-lock.json                  | Locked versions of NPM dependencies.

