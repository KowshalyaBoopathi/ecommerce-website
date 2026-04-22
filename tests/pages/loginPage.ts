import { Locator, Page, expect } from "playwright/test";

export class loginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.getByRole("textbox", {
      name: "email@example.com",
    });
    this.passwordInput = page.getByRole("textbox", {
      name: "enter your passsword",
    });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async enterUsernameAndPassword(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(
      "https://rahulshettyacademy.com/client/#/dashboard/dash",
      { timeout: 10000 },
    );
  }
}
