# Virus - F                                       


## Description
 
**This Virus if for educational purposes only!**

The virus is a node.js based virus, build to infect all node.js applications on the computer, which depend on express webservers.

It will infect the express server of the application by adding one line of code. This line injects a http header to detect the infected webserver "Acccess-Control-Allow-Origin".
To call the virus, just send get request to any route of the webserver with the header "origin-header". It will respond with "Yes i am hacked" and executes a "ls -la" command on unix based systems.

## Hands-On
If you want to test the virus, edit the varriable "debugPath" in "srh-group-f/libs/spreading/walker/index.js" and change it to a path where a simple node.js server is located.
A example express server for a test:

index.js
`
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000)
`

package.json
`{
  "name": "express-1",
  "description": "express-test-server-1",
  "main": "index.js",
  "dependencies": {
    "express": "4.14.0"
  }
}`


## Credits
The idea of making a node.js based virus is based on a proof of concept by Mattias Gattermeier:
https://medium.com/node-and-beyond/a-node-js-proof-of-concept-virus-df6772afaaff#.ti2n81c9r
https://github.com/Gattermeier/nodejs-virus

## Author
Made by Group F from the SRH University Heidelberg.
