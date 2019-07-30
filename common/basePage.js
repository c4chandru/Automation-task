var assert = require('assert');


class basePage {

    openBrowserLaunchUrl() {
        browser.url("/");
        browser.windowHandleSize({width:1400,height:900});
    }

    launchFooUrl(){
        browser.url("/foo");
        browser.windowHandleSize({width:1400,height:900});
    }

    validatePageTitle() {
        var title = browser.getTitle();
        assert.equal(title, "Jobs Fabrik | Jobs offers list");
    }

}

module.exports = new basePage;