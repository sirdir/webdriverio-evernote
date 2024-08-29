import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("#email");
  }

  public get inputPassword() {
    return $('input[placeholder="Password"]');
  }

  public get btnContinue() {
    return $('.//button[contains(.,"Continue")]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.btnContinue.click();
    await this.inputPassword.setValue(password);
    await this.btnContinue.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.openFull("https://accounts.evernote.com/login");
  }
}

export default new LoginPage();
