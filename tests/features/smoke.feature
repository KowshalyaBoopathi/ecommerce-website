@smokeTest
Feature: Shopping website Smoke suite

@login @addToCart
Scenario: Validate successful login
Given Homepage is loaded
When Enter the username and password and login
Then Add "ADIDAS ORIGINAL" product to cart
Then Go to cart
Then Checkout and enter name, cvv and country as "Testing", "123", "India"
Then Place the order
Then Match the order ID in Order history page