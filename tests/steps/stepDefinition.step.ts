import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/pageFixture";
import { homePageLoad } from "../support/utilities";

Given("Homepage is loaded", async function (this: CustomWorld) {
  await homePageLoad(this.pageFixture.page);
});

When(
  "Enter the username and password and login",
  async function (this: CustomWorld) {
    let username = process.env.USERNAME!;
    let password = process.env.PASSWORD!;
    await this.pageFixture.loginPage.enterUsernameAndPassword(
      username,
      password,
    );
  },
);
