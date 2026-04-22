import { BrowserContext, Page } from "@playwright/test";
import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";
import { loginPage, addToCartPage } from "../pages";

export class PageFixture {
  page: Page;
  loginPage: loginPage;
  addToCartpage: addToCartPage;

  constructor(newPage: Page) {
    this.page = newPage;
    this.loginPage = new loginPage(this.page);
    this.addToCartpage = new addToCartPage();
  }

  getObject(): PageFixture {
    return this;
  }
}

export class CustomWorld extends World {
  browserContext!: BrowserContext;
  pageFixture!: PageFixture;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
