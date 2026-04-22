import { Locator, Page, expect } from "playwright/test";

export class addToCartPage {
  private searchButton: Locator;
  private addToCartButton: Locator;
  private cartButton: Locator;
  private checkoutButton: Locator;
  private nameInput: Locator;
  private cvvInput: Locator;
  private countrySelect: Locator;
  private placeorderButton: Locator;
  private orderHistoryButton: Locator;

  constructor(private page: Page) {
    this.searchButton = page.getByRole("textbox", { name: "search" });
    this.addToCartButton = page
      .getByRole("button", { name: "Add To Cart" })
      .first();
    this.cartButton = page.getByRole("button", { name: "Cart" }).first();
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.cvvInput = page.locator('input[type="text"]').nth(1);
    this.nameInput = page.locator('input[type="text"]').nth(2);
    this.countrySelect = page.getByRole("textbox", { name: "Select Country" });
    this.placeorderButton = page.getByText("Place Order");
    this.orderHistoryButton = page.getByText('Orders History Page')
  }

  async clickSearchButton(productName: string) {
    await this.searchButton.fill(productName, { timeout: 10000 });
    await this.addToCartButton.click({ timeout: 10000 });
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async checkoutAndEnterDetails(name: string, cvv: string, country: string) {
    await this.checkoutButton.click({ timeout: 10000 });
    await this.cvvInput.fill(cvv);
    await this.nameInput.fill(name);
    await this.countrySelect.fill(country);
    //await this.page.getByRole("button", { name: country }).click({timeout: 10000});
  }

  async clickPlaceOrderButton() {
    await this.placeorderButton.click({ timeout: 10000 });
  }

  async matchOrderID() {
    let id = await this.page.locator("ng-star-inserted").innerText();
    let orderId = id.replaceAll("|", "").trim();
    await this.orderHistoryButton.click({timeout: 10000})
    let element = await this.page.locator("ng-star-inserted")
    await expect(element).toHaveValue(id);
  }
}
