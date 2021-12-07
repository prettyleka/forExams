import { By, WebElement } from "selenium-webdriver";
import { Browser } from "../../infra/driver-wrapper/browser";
import { LabelElement } from "./label-element";

class InputElement extends LabelElement {

    constructor(seleniumElement: WebElement) {
        super(seleniumElement);
    }

    async setText(text: string) {
        return this.element.sendKeys(text);
    }

    async clearText() {
        return this.element.clear();
    }

    async updateText(text: string) {
        this.element.clear()
        return this.element.sendKeys(text)
    }

}

export { InputElement }