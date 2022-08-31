This branch is to only be deployed to Heroku. The package.json file is different
along with the end points. 

The .env and server file variables are renamed to match what Heroku is looking for exactly. 

🔴These two lines of code go in your main server file:

app.use(express.static(path.resolve(__dirname, "../build")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

🔴These two lines of code go in your package.json:

"main": "./server/index.js",

"start": "node ./server/index.js && npm build",
        
        -Brady Bott


These are some of the code you must have in order for Heroku to compile correctly. 