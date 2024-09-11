# Orchard-fed-test
Testing by Orchard

# Project Orchard FED Test

This project is a webpage that uses Bootstrap 5 for design and Sass for custom styles. The goal is to create a modern and responsive page with clear navigation and a dynamic modal.

## Rationale

### HTML and CSS Structure

- **Use of Bootstrap:**: 
  - Bootstrap 5 has been chosen to provide a modern and responsive design. Bootstrap simplifies the creation of a responsive and styled layout without the need to write extensive amounts of CSS from scratch.
  
- **Custom Styles:**:
 - The project uses a Sass file (`main.scss`)to apply custom styles. Sass allows for more granular control over the design and facilitates style management through variables, mixins, and nesting.

### Navigation and ScrollSpy

- **Header and Navbar:**:
  - The fixed navbar in the header enhances navigation by allowing quick and accessible access to different sections of the content. This practice improves the user experience by making it easier to locate important sections.

- **ScrollSpy**:
  - ScrollSpy has been configured not to alter the hash in the URL. This prevents changes in the address bar while scrolling between sections. The `initializeScrollSpyAndHandlers` function initializes ScrollSpy and handles the custom behavior of the navigation links.

### Dynamic Modal

- **`updateModal` Function**:
  - The `updateModal`  function allows for dynamically updating the modal content without the need to duplicate HTML. This makes modal content management more efficient and facilitates its reuse for different buttons or cards.

### JavaScript for Interaction

- **Navbar Click Events:**:
  - Each navigation link has an associated click event that changes the class of the active item. This provides a clear visual indication of the section where the user is located.

- **Active Class Management:**:
  - The code for managing the active class (`nav__item--current`) in the navbar ensures that the active state is dynamically updated, improving navigation and user experience.

## Project Structure

- **`index.html`**: 
  - Main HTML file that contains the page structure, including the navbar, content sections, and a modal.

- **`sass/main.scss`**: 
  - Sass file for custom styles. It should be compiled to CSS to apply styles to the page.

- **`path/to/your/bundle.js`**: 
  - JavaScript file compiled by Webpack that contains the page logic, including ScrollSpy initialization and modal management.

## Project Setup

1. **Install Dependencies:**:
   ```bash
   npm install

2. **Run Wepack**:
    npx webpack serve