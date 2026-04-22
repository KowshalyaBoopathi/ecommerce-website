// support/hooks.ts
import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { PageFixture } from "./pageFixture"; // Import the class

let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false, channel: "chrome" });
});

Before(async function () {
  this.browserContext = await browser.newContext();
  const page = await this.browserContext.newPage();
  this.pageFixture = new PageFixture(page);
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    const img = await this.pageFixture.page.screenshot();
    await this.attach(img, "image/png");
  }
  await this.pageFixture.page.close();
  await this.browserContext.close();
});

AfterAll(async function () {
  await browser.close();
});
