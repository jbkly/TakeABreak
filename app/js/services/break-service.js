// breakService
'use strict';

module.exports = function(app) {
  app.factory('breakService', function($http) {
    // helper functions...

    // breakScrambler object passed to controller
    var breakScrambler = {
      getBreak: function() {
        // return 'Here's a break.';
        var dbBreak = $http({
          method: 'GET',
          url: '/api/v_0_0_1/breakideas'
        }).error(function(data, status) {
          console.log(status);
        });
        return dbBreak;
      },
      newBreak: function(breakname, instructions, minutes) {
        var dbsubmitBreak = $http.post('/api/v_0_0_1/breakideas', {'name': breakname, 'instructions': instructions, 'minutes': minutes}).error(function(data, status) {
          console.log('error!');
          console.log(status);
        });
        return dbsubmitBreak;
      },
      timerLength: 2000,
      getTimerLength: function() {
        return this.timerLength;
      },
      setTimerLength: function(timer) {
        this.timerLength = timer;
      }
    };
    return breakScrambler;
  });
};
