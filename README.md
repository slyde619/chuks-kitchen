# Chuks Kitchen — Food Ordering Website

Frontend implementation of a food ordering web app for Chuks Kitchen, built from Figma designs provided by the TrueMinds Innovations design team. This is a frontend-only project — no backend, no APIs, no real authentication. 9 screens fully built, 2 more routed and in progress.

**Live Demo:** [https://chuks-meal.netlify.app](https://chuks-meal.netlify.app/)

---

## What I Built

Chuks Kitchen is a food business run by Mr. Chukwudi Okorie. The company wants to move away from taking orders over WhatsApp and phone calls, so the product team designed a web-based ordering experience. My job was to take the Figma screens and turn them into a working, responsive frontend.

I built 9 screens covering the core user journey — onboarding, auth (login and signup), homepage, browsing the menu, viewing a meal, and the full ordering flow from cart through payment. The cart shows your items, the order summary breaks down pricing with a delivery/pickup option, and checkout handles delivery details and payment in two steps. Order confirmation and account pages are routed but not built out yet.

---

## Tech Stack

- **React** with **Vite** — Fast dev server, hot reload, and Vite's build speed made development smooth.
- **Tailwind CSS v4.1** — Styled everything with utility classes directly in the markup.
- **React Router DOM** — Handles navigation between pages without full reloads.
- **pnpm** — Package manager. Faster and more disk-efficient than npm.

I went with this stack because it's what I'm comfortable with and it's well-suited for this kind of project — lots of UI components, no complex state, and the priority is speed and visual accuracy.

---

## Project Structure

```
src/
├── assets/                     # Images, organized by where they're used
│   ├── auth/                   # Auth screen banner image
│   ├── banners/                # Hero and promo banner images
│   └── foodCategories/         # All food images (categories, meals, explore page)
│       ├── chefs/              # Chef's Specials images
│       └── explore/            # Explore page images
│
├── components/
│   ├── cards/
│   │   ├── categoryCard.jsx    # Simple image + label (used in Popular Categories)
│   │   ├── mealCard.jsx        # Full card with image, name, description, price, and "Add to cart"
│   │   └── MenuItemCard.jsx    # Variant used on the Explore page
│   ├── cart/
│   │   └── CartItem.jsx        # Single item row with image, name, quantity controls, price, and remove
│   ├── checkout/
│   │   ├── DeliveryDetails.jsx # Delivery address form (checkout step 1)
│   │   ├── OrderSummary.jsx    # Price breakdown, promo code, delivery/pickup (used on /orders)
│   │   └── PaymentForm.jsx     # Card details form (checkout step 2)
│   ├── layout/
│   │   ├── authBanner.jsx      # Side banner on login/signup pages
│   │   ├── footer.jsx          # Footer (appears on every page)
│   │   └── navbar.jsx          # Top nav (appears on every page)
│   ├── sections/               # Homepage sections — each one is its own component
│   │   ├── banner.jsx          # "New Menu Additions" promo block
│   │   ├── chefSpecials.jsx    # Chef's Specials meal grid
│   │   ├── hero.jsx            # Hero image with headline and CTA
│   │   └── popularCategories.jsx
│   └── ui/                     # Small reusable pieces
│       ├── button.jsx          # Shared button component
│       ├── scrollToTopBtn.jsx  # Floating scroll-to-top circle
│       ├── searchBar.jsx       # Search input
│       └── sectionHeading.jsx  # Consistent section titles
│
├── data/                       # Static data (replaces what would normally come from an API)
│   ├── categories.js
│   ├── footer.js
│   ├── meal.js
│   └── menuItems.js
│
├── pages/
│   ├── auth/
│   │   ├── login.jsx
│   │   ├── onboarding.jsx
│   │   └── signup.jsx
│   ├── account.jsx
│   ├── cart.jsx
│   ├── checkout.jsx
│   ├── explore.jsx
│   ├── home.jsx
│   ├── mealDetail.jsx
│   ├── myOrders.jsx
│   └── orderConfirmation.jsx
│
├── router/
│   └── appRouter.jsx           # All route definitions in one place
│
├── App.jsx
├── main.jsx
└── index.css
```

A few things worth noting about how this is organized:

The homepage doesn't have all the layout code stuffed into one file. Instead, `home.jsx` just imports and stacks the section components — Hero, SearchBar, PopularCategories, ChefSpecials, Banner. Each section handles its own layout and pulls its own data.

All the meal names, prices, descriptions, and category labels live in the `data/` folder as plain arrays. Components just import and `.map()` over them. If this ever gets connected to a real API, you'd swap out the imports for fetch calls and the components wouldn't need to change much.

The checkout page uses local state (`useState`) to manage a two-step flow — delivery details and payment — under a single route. Each step is its own component (DeliveryDetails, PaymentForm), and the page just switches between them. This keeps the URL clean while still splitting the UI into focused, manageable pieces.

---

## How I Translated the Figma Design

I went through each Figma screen and broke it down before coding — looking at what's most prominent, how things are spaced, what colors are used where, and the font sizing hierarchy.

**Colors:** Orange (`#FF7A18`) is the primary action color — buttons, active nav states, prices. Blue (`#1E88E5`) is used for secondary elements like the scroll-to-top button. Dark gray (`#1F2937`) for text and the footer. Body background is a light gray (`#F3F4F6`), not pure white.

**Typography:** The logo uses **Island Moments** (a cursive Google Font) for the handwritten, personal feel. Everything else uses **Inter** — clean, highly readable, and scales well across sizes.

**Assumptions I made** (where the Figma or BRD didn't specify):

- **Auth screens:** Login and signup are visual only. The BRD said phone vs email auth wasn't decided, so the forms just look right without doing anything.
- **Payment:** The checkout payment form doesn't process anything. BRD said the payment provider wasn't chosen yet.
- **Cart behavior:** Cart items are static/representative. There's no state management keeping track of what the user adds, so refreshing the page resets everything.
- **Hero images:** I provided `.webp` formats for assets for the hero to keep load times reasonable.
- **Scroll-to-top:** Added the blue floating button I saw in the Figma footer area for long-page navigation.

---

## Pages Built

| Page               | Route                 | Status      | What it does                                                                                                                                  |
| ------------------ | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Onboarding         | `/`                   | Done        | Landing/welcome screen — first thing users see                                                                                                |
| Login              | `/login`              | Done        | Login form                                                                                                                                    |
| Sign Up            | `/signup`             | Done        | Registration form                                                                                                                             |
| Home               | `/home`               | Done        | Hero, search bar, categories, chef's specials, promo banner                                                                                   |
| Explore            | `/explore`            | Done        | Full menu with food items                                                                                                                     |
| Meal Detail        | `/meal/:id`           | Done        | Individual meal info with add-to-cart                                                                                                         |
| Cart               | `/cart`               | Done        | Item list with quantity controls (+/−), prices, and remove buttons                                                                            |
| Order Summary      | `/orders`             | Done        | Promo code input, price breakdown (subtotal, delivery, service fee, tax), delivery/pickup toggle, special instructions, "Proceed to Checkout" |
| Checkout           | `/checkout`           | Done        | Two-step flow: step 1 is delivery details, step 2 is payment. "Pay" navigates to order confirmation                                           |
| Order Confirmation | `/order-confirmation` | Coming soon | Success screen after payment                                                                                                                  |
| Account            | `/account`            | Coming soon | User profile                                                                                                                                  |

The ordering flow is: **Cart → Order Summary → Checkout (delivery details → payment) → Order Confirmation**.

The checkout steps live under a single route and switch via component state rather than separate URLs.

The navbar is hidden on the onboarding, login, and signup pages since those are pre-auth screens. It shows on everything else. The footer and scroll-to-top button appear on all pages.

---

## Responsiveness

- Nav collapses into a hamburger menu on mobile
- Card grids go from 3 columns → 2 → 1 as the screen gets smaller
- Hero section scales down and the image swaps to a smaller variant
- Footer columns stack vertically on mobile
- Forms go full-width on small screens

All done with Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`), flexbox, and CSS grid.

---

## Running Locally

```bash
# Clone and install
git clone https://github.com/slyde619/chuks-kitchen
cd chuks-kitchen
pnpm install

# Start dev server
pnpm dev
```

Opens at `http://localhost:5173`.

To build for production: `pnpm build` — output goes to `dist/`.

---

## What's Missing & What I'd Do Next

**What's not there right now:**

- Two pages (order confirmation, account) are routed but still placeholder screens — not yet built out.
- No persistent cart state. Adding items doesn't actually carry over between pages or survive a refresh.
- Forms don't validate anything. You can submit empty fields.
- Search bar is visual only — doesn't filter anything.
- All data is hardcoded. No API calls.
- No error or empty states (empty cart, failed checkout, etc.).

**What I'd tackle with more time:**

- Finish the remaining two screens — order confirmation with a success state, and account with profile details.
- Hook up cart state with Zustand or React Context so adding/removing items actually works across the app.
- Add form validation on checkout and auth forms — required fields, email format, that sort of thing.
- Make the search bar filter meals from the data files in real time.
- Add page transitions and hover effects on cards for a smoother feel.
- Do a proper accessibility pass — ARIA labels, keyboard nav, focus management, contrast checks.
- Build out the re-order flow mentioned in the BRD (a button on My Orders that refills the cart).

---

Built as part of the TrueMinds Innovations frontend developer internship.
