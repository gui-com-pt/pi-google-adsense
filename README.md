# Pi Google Adsense

AngularJS module for Google Adsense

### Usage

    angular
    	.module('yourApp', ['pi.google-adsense']);

    angular
    	.module('yourApp')
    	.config(['googleAdsenseConfigProvider', function(googleAdsenseConfig) {
    		googleAdsenseConfig.setClient('your-client-id');
    		googleAdsenseConfig.setSlot('slot');
    		googleAdsenseConfig.setFormat('auto');
    	}]);


Then use the directove google-adsense:

    <div data-google-adsense></div>