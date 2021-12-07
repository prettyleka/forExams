import { Button, By } from "selenium-webdriver";
import { ClickableElement } from "../elements/clickable-element";
import { Browser } from "../../infra/driver-wrapper/browser";
import { CreateNewRestaurantPopUp } from "../popups/create-new-restaurant-popup";
import { extend, keys } from "lodash";
import { PageBase } from "../../infra/pages-infra/page-base";
import { time } from "console";
import { TIMEOUT } from "dns";
import { SSL_OP_EPHEMERAL_RSA } from "constants";
import { setTimeout } from "timers/promises";
import { elementIsNotVisible, elementIsVisible } from "selenium-webdriver/lib/until";

class RestaurantPage extends PageBase {

    private createNewRestaurantButtonLocator = "//button[text()='Create new']"

    constructor(browser: Browser) {
        super(browser);
    }

    async openCreateRestaurantPopup() {
        const button = await this.browser.findElement(ClickableElement, By.xpath(this.createNewRestaurantButtonLocator));
        button.click();
        return new CreateNewRestaurantPopUp(this.browser);
    }

    //locators
    private idField = "//input[@id='id']"
    private nameField = "//input[@id='name']"
    private addressField = "//input[@id='address']"
    private scoreField = "//input[@id='score']"
    private btnAccept = "//button[@class = 'btn btn-primary']"
    private succeedPopUp = "//div[@id='alert-popup']"
    private btnOK = "//button[.='OK']"
    private checkMyRest = "//td[.='frog']"
    private btnXtoFrog = "//td[.='frog']/following-sibling::td/button[.='X']"
    private checkIDInlist = "//tbody/tr/td[1]"


    async fillTheNewRestPopUp(id: string, name: string, address: string, score: string) {
        const idFieldEl = await this.browser.findElement2(By.xpath(this.idField));
        await this.browser.clear(idFieldEl)
        await idFieldEl.sendKeys(id)
        const nameFieldEl = await this.browser.findElement2(By.xpath(this.nameField));
        await this.browser.clear(nameFieldEl)
        await nameFieldEl.sendKeys(name);
        const addressFieldEl = await this.browser.findElement2(By.xpath(this.addressField));
        await this.browser.clear(addressFieldEl)
        await addressFieldEl.sendKeys(address);
        const scoreFieldEl = await this.browser.findElement2(By.xpath(this.scoreField));
        await this.browser.clear(scoreFieldEl)
        await scoreFieldEl.sendKeys(score)

    }

    async clickOnAccept() {
        const button = await this.browser.findElement(ClickableElement, By.xpath(this.btnAccept));
        await button.click();
    }

    async checkSucceedPopUp() {
        const button = await this.browser.findElement(ClickableElement, By.xpath(this.btnOK));
        await button.click();
    }

    async ifMyRestInPage() {
        if (await this.browser.findElement2(By.xpath(this.checkMyRest))) {
            return true
        }
        else {
            return false
        };
    }

    async deleteMyRest() {
        const xBtn = await this.browser.findElement(ClickableElement, By.xpath(this.btnXtoFrog));
        await xBtn.click();
    }

    async validationRestIDNotInTable() {
        const ids = await this.browser.findElement2(By.xpath(this.checkIDInlist))

        if ("123" in ids.getText()) {
            return false
        }
        else {
            return true
        }
    }


}




export { RestaurantPage }