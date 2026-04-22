import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/pageFixture";
import { homePageLoad } from "../support/utilities";
import { cursorTo } from "node:readline";

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

Then(
  "Add {string} product to cart",
  async function (this: CustomWorld, productName: string) {
    await this.pageFixture.addToCartpage.clickSearchButton(productName);
  },
);

Then("Go to cart", async function (this: CustomWorld) {
  await this.pageFixture.addToCartpage.goToCart();
});

Then(
  "Checkout and enter name, cvv and country as {string}, {string}, {string}",
  async function (
    this: CustomWorld,
    name: string,
    cvv: string,
    country: string,
  ) {
    await this.pageFixture.addToCartpage.checkoutAndEnterDetails(
      name,
      cvv,
      country,
    );
  },
);

Then("Place the order", async function (this: CustomWorld) {
  await this.pageFixture.addToCartpage.clickPlaceOrderButton();
});

Then("Match the order ID in Order history page", async function(this: CustomWorld){
  
})
