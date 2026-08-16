# electronics-catalog# ElectroShop - Catalog & Discovery

ElectroShop is the Catalog & Discovery Microfrontend for an electronics and gadgets e-commerce application.

This Microfrontend is responsible for displaying the store catalog, product categories, product listings, product details, and product discovery features.

## Team Role

- Role: Catalog & Discovery
- Framework: React
- UI Library: MUI (Material UI)
- Integration Method: iframe composition
- Application Type: Electronics & Gadgets Store

## Features

- Home page
- Product categories
- Product listing
- Product details
- Product search
- Product cards
- Product ratings and reviews
- Add to Cart
- Wishlist / favorite products
- Responsive design
- Material Design UI using MUI

## Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/categories` | Product categories |
| `/products` | Product listing |
| `/products/:id` | Product details |
| `/product/:id` | Product details |

## Microfrontend Integration

This project is developed as an independent Microfrontend and can run separately from the other components.

The application is integrated into the main Shell using iframe composition.

The Shell loads this deployed Catalog Microfrontend:

https://electronics-catalog.vercel.app/

The other Microfrontends in the project are:

- Cart & Checkout - Vue
- Account & Orders - Lit

The Shell is responsible for loading the deployed Microfrontends and connecting them together.

## Communication

The Catalog Microfrontend communicates with the Shell using browser events.

For example, when a user adds a product to the cart, the Catalog application dispatches an event containing the product ID and quantity.

Example event:


window.dispatchEvent(
  new CustomEvent("ElectroShop:add-to-cart", {
    detail: {
      productId: product.id,
      delta: 1,
    },
  })
);