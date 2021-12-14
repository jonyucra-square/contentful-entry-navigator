# contentful-entry-navigator
Navigator to go to-and-from contentful entries and their project pages

# How to use

### Starting the server

`npm install`

`nodemon`

This should start the server on port 3001 and start the MySql connection to local supportcenter_development.

### Loading the extension

Go to `chrome://extensions`

Toggle `Developer mode`

`Load unpacked` and select this project directory

### Go from Contentful Entry to Supportcenter Article

On Contentful, go to a "Support Article" entry. On this page, click on the extension icon in the task bar. If the server is running, you have an instance of the local DB, and you're running supportcenter locally, you should be redirected to the corresponding Supportcenter Article for this Contentful entry.