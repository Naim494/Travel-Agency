Trippr Read Me
	This website aims to create an all inclusive website that helps customers plan and book their trip. The website supports various modes of transportation, various trips, and even contains a review form. Payment information can also be saved to allow for a seamless booking experience.

Sign Up:
When a user first lands on the homepage, they are presented with two options. They are able to login or sign up if they do not have an account. Signing up requires a multitude of fields and as long as they are valid, they will be inserted into the Users table of the database.

Login:
This is similar to sign up in that it will query the Users table from the database. The username and password is checked and if the user is found then the user is routed to the user page where they are able to add a trip, payment, review and view their previous trips.

Log out:
Allows a user to log out of there current account. This function is found in the top navbar and brings the user back to the homepage.

Add trip:
The add trip panel allows a user, once logged in, to fill in relevant information for their trip. Once the form is created, the trip information can be saved and accessed in the view trips panel, where it can be loaded and edited.

Add payment: 
When a user makes a trip, it's important to be able to add a method of payment. The current way we implemented was via a credit or debit card. The user enters their card number, security code, and expiration date.

Add review:
This allows the user to be able to add a review to the trip they have created. It

Display reviews:
This panel, located on the admin page, displays all the reviews the user had previously created.

Display users:
Also located on the admin page, this panel allows the administrator to view all current users. It displays there name in one column, and gives the option to delete the user from the database.
Delete user:
Admin is able to delete any user in the database.
