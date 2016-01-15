(function(){
	angular
		.module('pi.googleAdsense', []);

	angular
      .module('pi.googleAdsense')
      .provider('googleAdsenseConfig', function(){
        var configs = {
          'format': 'auto'
        };
        
        return {
          setClient: function(value) {
            configs['client'] = value;
          },
          setSlot: function(value) {
            configs['slot'] = value;
          },
          setFormat: function(value) {
            configs['format'] = value;
          },
          $get: function(){

            this.getClient = function() {
              return configs['client'];
            }

            this.getSlot = function() {
              return configs['slot'];
            }

            this.getFormat = function() {
              return configs['format'];
            }
            return this;
          }
        }
      })
      .directive('googleAdsense', function (googleAdsenseConfig) {
          return {
              restrict: 'A',
              replace: true,       
              template: '<ins class="adsbygoogle" style="display:block" data-ad-client="{{client}}" data-ad-slot="{{slot}}" data-ad-format="{{format}}"></ins>',
              controller: ['$scope', function ($scope) {
                  (adsbygoogle = window.adsbygoogle || []).push({});
                  $scope.client = googleAdsenseConfig.getClient();
                  $scope.slot = googleAdsenseConfig.getSlot();
                  $scope.format = googleAdsenseConfig.getFormat();
              }]
          };
      });
})();