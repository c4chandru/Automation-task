var assert = require('assert');


class fooPage {

    get selectors(){
        return {

            header : '//h1[@class=\'sc-EHOje eymTpQ\']',
            message : '//p[contains(text(),\'Sorry, this url is not pointing anywhere\')]',
            backToHome: '//button'

        }


    }

    validateFooPage(){
        var header = browser.getText(this.selectors.header);
        var details = browser.getText(this.selectors.message);
        assert.equal(header, '404');
        assert.equal(details, 'Sorry, this url is not pointing anywhere');
        browser.isExisting(this.selectors.backToHome);

    }
}

module.exports = new fooPage();