import { setTimeout } from "timers/promises";
import LoginPage from "../pageobjects/login.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("gehihad897@daypey.com", "SKJJ*&^SDsdfsdf8sdfsd");
    await setTimeout(15_000);
  });
});
