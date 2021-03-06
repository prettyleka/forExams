import { By, WebElement } from "selenium-webdriver";
import { PassThrough } from "stream";
import { Browser } from "../../infra/driver-wrapper/browser";
import { ElementBase } from "../../infra/pages-infra/element-base";

class LabelElement extends ElementBase {

    constructor(seleniumElement: WebElement) {
        super(seleniumElement);
    }

    async text(): Promise<string> {
        return this.element.getText();
    }

    async sendText(smth: string) {
        this.element.sendKeys(smth)
    }


}

export { LabelElement }