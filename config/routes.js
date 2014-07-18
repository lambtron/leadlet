'use strict';

(function() {
  // Helpers ===================================================================
  var Stacklead = require('../app/helpers/stacklead');

	module.exports = function (app) {
		// Application routes ======================================================
    app.post('/api/email', function (req, res) {
      // email, namespace.
      var email = '';
      var namespace = '';
      Stacklead.getLeadInfo(email, function (err, data) {
        // Send stacklead info to namespace.

      });
    });

		app.get('/', function (req, res) {
	    res.sendfile('index.html', {'root': './public/views/'});
	  });
	};
}());