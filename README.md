# Web-shop React-SPA and REST-API #

#Install locally#
To install, clone down repository and do `yarn install` to get dependencies. Then run `node index.js` to start the API.
Then, open the `/client` folder and run `yarn install`, and then `yarn start` to run the client. 

# Paths #

List of all the paths and what HHTP method they use, protected paths are marked with an asterisk \*

## GET requests ##
* \*/user lists all users
* \*/user/:id fetches one user with the id
* /item lists all items
* /item/:id fetches one item with :id
* /item/tag/:tag fetches all items of :tag
* \*/order lists all orders
* \*/order/:id fetches order with :id
## POST requests
* /login authenticates a user
* /user creates a new user
* \*/item creates a new item
* /order creates a new order
## PUT requests ##
* \*/order/ship change status of order to shipped
* \*/order/pay change status of order to paid
## DELETE requests ##
* \*/user/:id deletes user of :id
* \*/item/id: deletes item of :id
* \*/order/:id deletes order of :id