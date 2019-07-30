var homePage = require('../pageObjects/homePage');
var jobPage = require('../pageObjects/jobPage');
var common = require('../common/basePage');
var fooPage = require('../pageObjects/errorPage');

describe('Testing job listing page and job details page', function () {

    /*
    When users open the job list, they can see a list of 5 jobs with pictures, company names and locations.
     */

    it('launch browser, validate title and job listings', function () {
        common.openBrowserLaunchUrl();
        common.validatePageTitle();
        homePage.homePageValidateCompanies();
        homePage.homePageValidateImage();

    });

    /*
    After users click on a job from the list, they can see job details.
    Users can navigate back from a job details page to the job list.
     */

    it('click on a job list and assert the details', function(){
        common.openBrowserLaunchUrl();
        homePage.clickOnJob();
        jobPage.validateJobTitle();
        jobPage.validateHeaders();
        jobPage.validateCompayDetails();
        jobPage.clickOnBack();
        common.validatePageTitle();
    });

    /*
    Users see error message when they visit an unknown URL e.g. http://localhost:3333/foo.
     */

    it('open /foo endpoint and validate the page details', function () {
        common.launchFooUrl();
        fooPage.validateFooPage();
    });


});
