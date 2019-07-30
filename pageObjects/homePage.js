var assert = require('assert');


class homePage {

    get selectors(){
        return{
            superiod : "//strong[text()='superoid']",
            bioyo : "//strong[text()='bioyo']",
            octonu : "//strong[text()='octonu']",
            forill :"//strong[text()='forill']",
            avanoodle :"//strong[text()='avanoodle']",
            superiodPic : "//a[1]//div[1]//span[1]//div[1]//div[1]//img[1]",
            bioyoPic : "//a[2]//div[1]//span[1]//div[1]//div[1]//img[1]",
            octonuPic : "//a[3]//div[1]//span[1]//div[1]//div[1]//img[1]",
            forillPic : "//a[4]//div[1]//span[1]//div[1]//div[1]//img[1]",
            avanoodlePic : "//a[5]//div[1]//span[1]//div[1]//div[1]//img[1]",
            actionSuperiod: "//div[@class='sc-bwzfXH jOGcac']//a[1]"
        }
    }

    homePageValidateCompanies(){
        browser.isExisting(this.selectors.superiod);
        browser.isExisting(this.selectors.bioyo);
        browser.isExisting(this.selectors.octonu);
        browser.isExisting(this.selectors.forill);
        browser.isExisting(this.selectors.avanoodle);
    }

    homePageValidateImage(){
        browser.isExisting(this.selectors.superiodPic);
        browser.isExisting(this.selectors.bioyoPic);
        browser.isExisting(this.selectors.octonuPic);
        browser.isExisting(this.selectors.forillPic);
        browser.isExisting(this.selectors.avanoodlePic);
    }

    clickOnJob(){
        var superiod = browser.isExisting(this.selectors.actionSuperiod);
        assert(superiod);
        browser.click(this.selectors.actionSuperiod);
        browser.pause(2000);
    }


}
module.exports = new homePage();