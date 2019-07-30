const assert = require('chai').assert;
var _      = require( 'lodash' );


config.getCustomCommands = function() {

    browser.waitAndClick = function( selector, maxWait = 1000, trailingWait = 250 ) {

        browser.waitAndAction( selector, click, maxWait, trailingWait );

        function click( element ) {
            logSelector( selector, 'click' );
            element.click();
        }

    };

};

// module.exports = getCustomCommands;