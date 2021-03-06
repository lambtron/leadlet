'use strict';

// Initialize server ===========================================================
var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || 3000;

// Environmental variables =====================================================
if (!process.env.STACKLEAD_API_KEY)
  require('./config/config');

// Configuration ===============================================================
app.set('views', __dirname + 'public/views');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.bodyParser());

// Routes ======================================================================
require('./config/routes.js')(app, io);

// Listen (start app with node server.js) ======================================
server.listen(port, function() {
	console.log("App is now listening on port " + port);
});