var homePage = require('../pageObjects/homePage');
var jobPage = require('../pageObjects/jobPage');
var common = require('../common/basePage');
var fooPage = require('../pageObjects/errorPage');

describe('Testing job listing page and job details page', function () {

    it('launch browser, validate title and job listings', function () {
        common.openBrowserLaunchUrl();
        common.validatePageTitle();
        homePage.homePageValidateCompanies();
        homePage.homePageValidateImage();

    });

    it('click on a job list and assert the details', function(){
        common.openBrowserLaunchUrl();
        homePage.clickOnJob();
        jobPage.validateJobTitle();
        jobPage.validateHeaders();
        jobPage.validateCompayDetails();
        jobPage.clickOnBack();
        common.validatePageTitle();
    });

    it('open /foo endpoint and validate the page details', function () {
        common.launchFooUrl();
        fooPage.validateFooPage();
    });


});
