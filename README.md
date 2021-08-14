## Serverless netlify functions used with react

- [John Smilga tutorial](https://www.youtube.com/watch?v=AfAZ33XjIBU)
- Run: 'npm install' to install dependencies
- Start the react server on localhost:3000: npm start. Here we have an app served by create-react-app server. And when we add the serverless function to our react app, we'll have to start the server on localhost:8888. With: npm run netlify.

- First example: fetch data from external Api. In this case, we fetch from our serverless function basic-api, where we added a header in order to use it in apps that are not on its server.
  - The serverless function uses local data, but we added a header which means, we can access this data from any app.
- Second example: we add a serverless function to our react app and fetch data in react component. The function fetches product data from Airtable. Setup a single product page with react router dom. Deployment on Netlify.
  - We create Airtable.js component and function products.js. Take the code for the serverless function (the combined one) and the airtable key from serverless func project.
  - Run: npm run netlify. Now there are two apps, one that serve on localhost:3000, which is the create react app. And one on localhost:8888. Since we are going to use our serverless function, we are going to test the rest of our code in localhost:8888, because only here we have access to the serverless function. We can see our data: http://localhost:8888/api/product

#### Netlify TOML for create-react-app

[build]

- command = 'npm run build'
- publish = '/build'
- functions = './functions'

[[redirects]]

- from = '/api/\*'
- to = '/.netlify/functions/:splat'
- status = 200

[[redirects]]

- from = '/\*'
- to = '/index.html'
- status = 200

#### build Command

"build": "CI= react-scripts build"
