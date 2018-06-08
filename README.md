# Codaisseur Final Assignment Client Side

This is the Server side for an app to evaluator students in the Codaissuer program. You can add and view current batches of students, add and view students progress, and evaluate them. There is also a random student generator that will pick a random stuck from the class to ask a question. The generator is weighted towards students will lower previous evaluation scorings

The Final Assignment Client side contains the client side for this app


## Running

* You need a working Postgres database that is preferrably empty (drop all the tables) and running 
* Install the dependencies using `yarn install`
* Compile the app (Typescript > Javascript) using `yarn compile` (during development you can use `yarn watch`)
* `yarn start`

You can run the tests with `yarn test`. Currently they only cover the game logic. 
