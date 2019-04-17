TODOS: 

DEPLOY TO HEROKU
MODIFY AND COMPLETE README
FIX COMMENT FUNCTION
FIX ARTICLE IMAGES


9. **NOTE**: If you want to earn complete credit for your work, you must use all six of these packages in your assignment.

10. In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:

11. Create a Heroku app in your project directory.

12. Run this command in your Terminal/Bash window:

    * `heroku addons:create mongolab`

    * This command will add the free mLab provision to your project.

13. When you go to connect your mongo database to mongoose, do so the following way:

```js
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});
```

* This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer.

14. [Watch this demo of a possible submission](mongo-homework-demo.mov). See the deployed demo application [here](http://nyt-mongo-scraper.herokuapp.com/).

15. Your site doesn't need to match the demo's style, but feel free to attempt something similar if you'd like. Otherwise, just be creative!

## File Structure

```
├── controllers
|  ├── fetch.js
|  ├── headline.js
|  └── note.js
├── models
|  ├── Article.js
|  ├── index.js
|  └── Note.js
├── public
|  └── assets
|  └── app.js
└── views
|  ├── index.handlebars
|  └── saved.handlebars
|  └── layouts
|     └── main.handlebars
├── package-lock.json
├── package.json
└── README.md
└── server.js
```

TODO
### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

---
TODO
### Finish README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

---

TODO
### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

---

TODO: fill in below

# Project Title

One Paragraph of project description goes here


### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system
