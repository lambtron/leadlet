'use strict';

(function() {
  var request = require('request');
  var path = 'https://stacklead.com/api/leads';
  var API_KEY = process.env.STACKLEAD_API_KEY;

  module.exports = {
    getLeadInfo: function getLeadInfo (email, cb) {
      var opts = {
        uri: path,
        method: 'POST',
        timeout: 50000,
        followRedirect: true,
        maxRedirects: 10,
        qs: {
          api_key: API_KEY,
          delivery_method: 'webhook',
          email: email,
          // callback: 'http://leadscrub.herokuapp.com/api/leads/' + namespace
          // callback: 'http://3bc71287.ngrok.com/api/leads/' + namespace
        }
      };

      request(opts, cb);
    }
  };
}());