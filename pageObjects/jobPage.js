var assert = require('assert');

class jobPage{


    get selectors (){

        return{
            jobHeader : "//h1[@class='sc-EHOje eymTpQ']",
            backButton: "//main[@class='sc-bxivhb hLwyNE']//a[@class='active']",
            applyButton : "//section[@class='sc-gqjmRU hHDMYY']//button//div//div",
            companyName : "//strong[@class='sc-gZMcBi crfCZD']",
            companyDetails : "//h3[@class='sc-iwsKbI hwUAYs']",
            jobBrief: "//h2[contains(text(),'Job brief')]",
            responsibilities: "//h2[contains(text(),'Responsibilities')]",
            requirements : "//h2[contains(text(),'Requirements')]"

        }
    }

    clickOnBack(){
        browser.click(this.selectors.backButton);

    }

    validateJobTitle(){
        var headerText = browser.getText(this.selectors.jobHeader);
        assert.equal(headerText, "Senior Frontend Developer");
    }

    validateCompayDetails(){
        var companyName = browser.getText(this.selectors.companyName);
        assert.equal(companyName, 'superoid');
        var companyDetails = browser.getText(this.selectors.companyDetails);
        assert.equal(companyDetails, 'Learn more about the company on the website: www.superoid.com');
    }

    validateHeaders(){
        browser.isExisting(this.selectors.applyButton);
        browser.isExisting(this.selectors.jobBrief);
        browser.isExisting(this.selectors.responsibilities);
        browser.isExisting(this.selectors.requirements);
    }


}
module.exports = new jobPage();