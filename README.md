# Awesome Nettbutikk

Welcome to **Awesome Nettbutikk** a fully functional e-commerce App built with React 19 and vite

## Technologies & Libraries

Used following tools and libraries

**React 19** Used to leverage the newest standards in React ecosystem, also included the simplified context handling <Context> directly without use <.Provider>
**Vite** Chosen as the tool to build this APP with for faster server startup
**React Router Dom** Handles client-side routing (`createBrowserRouter`) for seamless navigation between the home feed, product details, and the shopping cart without page refreshes.
**Axios**Selected for centralized and streamlined HTTP communication with the API using a clean, pre-configured instance.
**TanStack React Query**Used for asynchronous data fetching. This handles caching, loading, and error states out of the box, eliminating the need for heavy local `useEffect` state triads.
**CSS Modules** Used to seperate the CSS styling into smaller and easy to controll CSS files.

## Project Structure

The structure of the Files

```text
src/
├── api/            # Centralized API layer (Axios instance and DummyJSON calls)
│   └── dummyApi.js
├── components/     # Reusable UI elements and layout shell
│   ├── Layout/     # Global layout structure surrounding the application
│   ├── Header/     # Top navbar with URL-based search bar and theme toggle
│   ├── Footer/     # Structured footer section with dynamic copyyear
│   ├── ProductCard/# Modular product cards used in the responsive grid
│   └── Spinner/    # Visual loading indicator (loading state)
├── context/        # Global states (React Context)
│   ├── CartContext/    # Shopping cart engine using strict immutability
│   └── ThemeContext/   # Global dark/light mode toggler via HTML classes
├── hooks/          # Custom hooks (Reusable stateful logic)
│   └── localStorage.js # Automatic synchronization of cart and theme to disk
├── pages/          # Full-screen route pages mounted by the router
│   ├── Home/           # Homepage containing grid, category filters, and pagination
│   ├── ProductDetails/ # Detailed product page fetched via URL parameter, incl. stock status
│   ├── Cart/           # Shopping cart view with item quantity management and totals
│   └── NotFound/       # User-friendly 404 error page for invalid URLs
├── App.css         # Global CSS variables, Star Wars theme parameters, and button radius
├── App.jsx         # Application core, routing setups, and Context wrappers
└── main.jsx        # Entry point creating the React root in StrictMode
```

## Installation and Setup Locally

1. **Clone the repository**:

   ```bash
   git clone <https://github.com/SS0391/minbutikk-oppgave.git>
   cd <minbutikk-oppgave>
   ```

2. **Install dependencies** (This installs all correct library versions configured for React 19):

   ```bash
   npm install
   ```

3. **Start the local development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**: Click on the local link provided in your terminal output

## Plans for the future with this App

If I developed this App further I would like to do the following

1 **Carusell** I would add a carusell to the project above the product grid that I have now
2 **Image Gallery Carusell** I would do the same to each products on ProductDetails page
3 **CategoryButtons** I would seperate them abit more. Make them lesser on the screen but still visable and easy to use
4 **New Products** Add a new page or more product futher down the page
**Sort** Make it possible to Sort products by price as an example
