# node-teradata
Simple node-jdbc wrapper for teradata with promisified functions

**NOTE: I do not claim ownership of, and will not support the teradata jdbc drivers. This package is in no way endorsed by teradata**

A simple module to make working with teradata connections in node easier. Most of the work is done by the awesome [node-jdbc](https://www.npmjs.com/package/jdbc) module. I have simply provided a wrapper to save some time. It allows you to run queries against a teradata database. This wrapper returns [bluebird](https://www.npmjs.com/package/bluebird) promises to avoid nested callbacks. This module mostly follows the [node-jdbc](https://www.npmjs.com/package/jdbc) syntax for executing queries.

## Setup 
Add  teradata jars to your Project:

1. [Download Drivers](http://downloads.teradata.com/download/connectivity/jdbc-driver)
2. Create a directory named "jars" at the root of your project
3. Extract downloaded drivers
4. Copy "tdgssconfig.jar" and "terajdbc4.jar" into the newly created jars directory

** Alternatively you can make use of the teradataJarPath option and store your jars wherever you like

Install module
```
npm install teradata
```

**NOTE: on OSX 10.10 with java 8.60 I had to set the CXX environment variable:**

```
export CXX=gcc
```

then:
```
npm rebuild
```

Include module:
```
var Teradata = require("teradata");
```

Connect:
```
Teradata.connect('[url]' ,'[user]', '[password]')
    .then(function () {    
        // you are now connected
     });
```
          
You can also specify some options when connecting:
```
var options = {
    verbose: true,
    teradataJarPath: "[path-to...]/teradata-jdbc-drivers/"
};
Teradata.connect('[url]' ,'[user]', '[password]')     
```
verbose: turns on logging within the teradata package. can be useful for debugging
teradataJarPath: Allows you to store your downloaded Teradata JDBC jars somewhere other than the root of your project directory

Disconnect:
```
Teradata.disconnect()
    .then(function () {    
        // you are now disconnected
     });
```

## Example Insert
Make sure to change the url, username, password, and insert query. Call .executeUpdate(query) for updates and inserts

```    
    var Teradata = require("teradata");
        
    Teradata.connect('[url]' ,'[user]', '[password]')
        .then(function () {       
            return Teradata.executeUpdate("[insert query]");
        })
        .then(function (update count) {
            console.log("Updated %d records", updateCount);
            return Teradata.disconnect();
        });        
```
## Example Select
Make sure to change the url, username, password, and select query. You can also optionally set a limit by changing [limit]
```
     var Teradata = require("teradata");
         
     Teradata.connect('[url]' ,'[user]', '[password]')
         .then(function () {       
             return Teradata.executeQuery("[select query]", [limit]);
         })
         .then(function (update count) {
             console.log("Updated %d records", updateCount);
             return Teradata.disconnect();
        });  
```

## Dependencies
[node-jdbc](https://www.npmjs.com/package/jdbc)

[bluebird](https://www.npmjs.com/package/bluebird)

[chalksay](https://www.npmjs.com/package/chalksay)

[Teradata jdbc driver](http://downloads.teradata.com/download/connectivity/jdbc-driver)

## Contribute
Pull requests are welcome and will probably result in quicker changes than issues. Issues are of course welcome, and I will respond ASAP.

## License
Module specific code licensed under [MIT](https://github.com/gantrim/node-teradata/blob/development/LICENSE)
See Dependencies for included module licenses
See [Teradata site](http://downloads.teradata.com/download/connectivity/jdbc-driver) for JDBC driver
