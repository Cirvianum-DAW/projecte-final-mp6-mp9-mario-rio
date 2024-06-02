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
- **Cart Functionality**: Allows users to add products to their shopping cart.

### Event/Field Reservations:
- **Reservation Page**: Allows booking an appointment for a specific event/field with a data entry form.

### Other Pages:
- **About Us Page**: Displays information about the Airsoft field.
- **Policies Page**: Shows the field's policies.

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
- **login.html**: Login page for user authentication.
- **register.html**: User registration page.
- **shop.html**: Airsoft product shop page.
- **event.html**: Reservation page for specific events/fields.
- **about.html**: "About Us" page.
- **policies.html**: Policies page for the Airsoft field.

### src folder:
#### api:
- **api.js**: Generic functions for interacting with the REST API (GET, POST, PUT, DELETE) related to users, products, and event reservations.

#### components:
- **AboutUs.js**: Component for displaying information about the Airsoft field.
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

#### pages:
- **AboutPage.js**: "About Us" page using the AboutUs component.
- **ContactPage.js**: Contact page for users to get in touch.
- **EventPage.js**: Event/Field reservation page using the EventReservationForm component.
- **HomePage.js**: Home page displaying an introduction to the Airsoft field and links to other pages.
- **LoginPage.js**: Login page using the LoginForm component.
- **PoliciesPage.js**: Policies page using the Policies component.
- **ProfilePage.js**: Profile page for users to view and edit their profile.
- **RegisterPage.js**: Registration page using the RegisterForm component.
- **ShopPage.js**: Shop page using the ProductList component.

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
The shop section presents a list of Airsoft-related products available for sale. Each product includes an image, a description, the price, and options to add it to the shopping cart. Users can explore the products, select the ones they want, and proceed to purchase them through a simple and intuitive interface.

### Event/Field Reservations (EventPage):
This section allows users to book an appointment for a specific Airsoft event or field. The reservation form collects relevant information such as the event date, the number of participants, and reservation preferences. Once the request is submitted, users will receive a reservation confirmation and additional instructions if necessary.

### About Us (AboutPage):
This page provides detailed information about the Airsoft field, including its history, mission, and vision. It also highlights the available facilities, the services offered, and other relevant aspects that may interest visitors.

### Policies (PoliciesPage):
The policies page provides an overview of the rules and regulations governing the use of the Airsoft field. This section addresses issues such as safety, user responsibility, age restrictions, and other important aspects that must be considered before participating in Airsoft activities at the field.

### CRUD Operations and Sorting/Filtering:
The platform allows users to perform CRUD (Create, Read, Update, Delete) operations related to their user profiles, event reservations, and shop purchases. Additionally, it offers sorting and filtering functionalities to help users easily find the information or products they are looking for, whether by sorting them by price, category, or other relevant criteria.
