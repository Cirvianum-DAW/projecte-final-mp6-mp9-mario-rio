# AirsoftMunteanu Website Overview
[Videoprojecte Mario]()

## Description
The website is primarily based on ReactJS for managing the page. With a modular structure and essential functionalities, it offers users the options to participate in Airsoft activities, purchase equipment, and book appointments for different events or specific fields.

## Features
### Login and Register:
- **Login Page**: Allows user authentication with validation functionality.
- **User Registration Page**: Includes a registration form for new users.

### Shop:
- **Shop Page**: Displays a list of products available for sale.
- **Cart Functionality**: Allows users to add products to their shopping cart and specify the quantity.
- **Admin Functions**: Allows admins to add, edit, or delete products.

### Event/Field Reservations:
- **Reservation Page**: Allows booking an appointment for a specific event/field with a data entry form.
- **Admin Functions**: Allows admins to add, edit, or delete events.

### Other Pages:
- **About Us Page**: Displays information about the Airsoft field.
- **Policies Page**: Shows the field's policies.
- **Contact Page**: Allows users to get in touch with the field.
- **Sources Page**: Lists all the image sources used on the website.

### CRUD Operations:
- **Implementation**: Includes Create, Read, Update, Delete operations related to users, products, and event reservations.

### Sorting and Filtering:
- **Functionality**: Allows sorting and filtering products and event reservations based on different criteria like date, price, etc.

### Asynchronous API Requests:
- **Usage**: Implements asynchronous operations for making CRUD requests to the backend API.

## Technologies Used
The platform is implemented with ReactJS for the frontend, providing a friendly and responsive interface. CRUD operations are managed via RESTful API, ensuring efficient communication with the backend. Asynchronous operations are used for API requests, ensuring quick and smooth interaction with the platform.

## Project Structure
### public folder:
- **index.html**: Main page of the website.

### src folder:
#### api:
- **api.js**: Generic functions for interacting with the REST API (GET, POST, PUT, DELETE) related to users, products, and event reservations.

#### components:
- **AboutUs.js**: Component for displaying information about the Airsoft field.
- **AdminEventForm.js**: Form component for adding/editing events by admin.
- **Carousel.js**: Component for displaying a carousel of images or content.
- **ContentSection.js**: Component for displaying a section of content.
- **EventReservationForm.js**: Form component for booking an event/field.
- **Footer.js**: Component for displaying the footer of the website.
- **LoginForm.js**: Login form component.
- **Logout.js**: Component for handling user logout.
- **Navbar.js**: Component for displaying the navigation bar.
- **Policies.js**: Component for displaying the field's policies.
- **ProductList.js**: Component for displaying the product list in the shop.
- **RegisterForm.js**: Registration form component.
- **UserManagement.js**: Component for managing users (admin function).

#### pages:
- **AboutPage.js**: "About Us" page using the AboutUs component.
- **AddEditEventPage.js**: Page for adding/editing events by admin.
- **AddEditProductPage.js**: Page for adding/editing products by admin.
- **CartPage.js**: Shopping cart page.
- **ContactPage.js**: Contact page for users to get in touch.
- **EventPage.js**: Event/Field reservation page using the EventReservationForm component.
- **HomePage.js**: Home page displaying an introduction to the Airsoft field and links to other pages.
- **LoginPage.js**: Login page using the LoginForm component.
- **PoliciesPage.js**: Policies page using the Policies component.
- **ProfilePage.js**: Profile page for users to view and edit their profile, view reservations and orders.
- **RegisterPage.js**: Registration page using the RegisterForm component.
- **ShopPage.js**: Shop page using the ProductList component.
- **UserManagementPage.js**: Page for managing users by admin.
- **SourcesPage.js**: Page listing all image sources used on the website.

#### styles:
- **tailwind.css**: CSS file for styling using Tailwind CSS.

#### utils:
- **auth.js**: Manages user authentication (login, logout, session verification, etc.).
- **helpers.js**: General utility functions that can be reused throughout the project.

## Content
### Home Page (HomePage):
The home page serves as the entry point to the platform. It offers an introduction to the Airsoft field, highlighting its advantages and features. Additionally, it provides links to other key sections of the site, such as the shop, event reservations, the "About Us" section, and the field's policies.

### Authentication (Login and Register):
The authentication functionality allows users to log in or register on the platform. The login page offers a data entry form where users can enter their credentials to access their accounts. The registration page offers a similar form but allows new users to create an account by providing the necessary information.

### Shop (ShopPage):
The shop section presents a list of Airsoft-related products available for sale. Each product includes an image, a description, the price, and options to add it to the shopping cart. Users can explore the products, select the ones they want, and proceed to purchase them through a simple and intuitive interface. Admins have additional functionalities to add, edit, or delete products.

### Event/Field Reservations (EventPage):
This section allows users to book an appointment for a specific Airsoft event or field. The reservation form collects relevant information such as the event date, the number of participants, and reservation preferences. Once the request is submitted, users will receive a reservation confirmation and additional instructions if necessary. Admins can also manage events by adding, editing, or deleting them.

### About Us (AboutPage):
This page provides detailed information about the Airsoft field, including its history, mission, and vision. It also highlights the available facilities, the services offered, and other relevant aspects that may interest visitors.

### Policies (PoliciesPage):
The policies page provides an overview of the rules and regulations governing the use of the Airsoft field. This section addresses issues such as safety, user responsibility, age restrictions, and other important aspects that must be considered before participating in Airsoft activities at the field.

### Contact (ContactPage):
This page allows users to get in touch with the Airsoft field. It includes a contact form for submitting inquiries, a map showing the field's location, and links to the field's social media profiles.

### Sources (SourcesPage):
This page lists all the image sources used on the website. It provides attribution and links to the original sources of the images.

### CRUD Operations and Sorting/Filtering:
The platform allows users to perform CRUD (Create, Read, Update, Delete) operations related to their user profiles, event reservations, and shop purchases. Additionally, it offers sorting and filtering functionalities to help users easily find the information or products they are looking for, whether by sorting them by price, category, or other relevant criteria.