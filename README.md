[`logich-loggly-browser`](https://www.npmjs.org/package/logich-loggly-browser) is [loggly.com](http://loggly.com) middleware plugin for [`logich`](https://www.npmjs.org/package/logich) logger to be used in browser.
Can be used with Browserify or Webpack.

Install:

    npm install logich
    npm install logich-loggly-browser
        
Start logging:

```js
var logich = require("logich");
var loggly = require("logich-loggly-browser");
var logger = logich()

    // Transform all log messages into an object.
    .use(logich.object)
    
    // Add timestamp to log message.
    .use(logich.time)
    
    // Custom log entry middleware.
    .use(function(message, next) {
        message.source = "streamich.com";
        next(message);
    })
    
    // Print log message in console.
    .use(logich.console)
    
    // Send logs to loggly.com.
    .use(loggly("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"));
    
// Send log message to console and loggly.com:
logger.log({
    type: "error"
    message: "Hello world!"
});
```