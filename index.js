/*!
 * dronetest <https://github.com/doowb/dronetest>
 *
 * Copyright (c) 2015 Brian Woodward.
 * Licensed under the MIT license.
 */

'use strict';

var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('My port is ' + port + '\n');
}).listen(port);
console.log('Server running on port ' + port);
