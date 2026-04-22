import { Page, Locator, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export async function homePageLoad(page: Page) {
  let url = process.env.BASE_URL!;
  await page.goto(url);
}

export async function verifyText(page: Page, text: string) {}
