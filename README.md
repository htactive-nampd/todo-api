# Run 
```
# Install dependencies
$ yarn install

# Serve on localhost:2500
$ yarn start

# build js file
$ yarn build
```
### End point:
```
register:
POST:/ localhost:2500/register

login: 
POST:/ localhost:2500/login

get list:
GET:/ localhost:2500/api

get item by listId
GET:/ localhost:2500/api/ {listId}

add item
POST:/ localhost:2500/api

run test:
$ yarn test-register
$ yarn test-login
$ yarn test-get
$ yarn test-getList
$ yarn test-post
```