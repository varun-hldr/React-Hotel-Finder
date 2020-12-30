# React Hotel Finder App

Dear Sir/Mam,

Before talking about the App I, want to clear out something, To be very honest I was having trouble  fetching the JWT,  Before I started working on this App, I might have missed something I don't know what's the reason. So I decided to work with Local Storage and Session Storage. 

## Video Introduction

[Video Link](https://drive.google.com/file/d/1F5zp8Fgc1iHH9ED7yM6jAhhgnOGZ0nMo/view)

## Here is my complete Introduction about the App

![alt text](https://i.imgur.com/sHOJpph.png)

#### Admin Details
Admin: {
      name: "Admin",
      email: "varun@123",
      password: "12345",
    },

#### Talking about the Structure:

I have Create a beautiful Navbar  where user can find link to the booking page, Once a user book a Hotel the app automatically redirects to the booking page where user can all see their booking histories

#####   These are the Booking Details:

- UserName 
- HotelName
- Starting Date
- Ending Date
- Status

On the Booking page Non-Admin User can only view their bookings.

I have created separate features for Admin User, Admin user can see, all the booking mark their status also I have created separate Dashboard for Admin user.

User can book hotels as many as he wants and all the bookings can be view at the view-booking page which both Admin and Non-Admin user can see.

#### Talking about the Signup Form

I have created a Minimal Pop-UP Signup for where user have can create their account and login to, I have also marked all the validation for signup and as I mention above I have used Session Storage to User Data. So if you sign up to the App your data will be available until the session is not expired.

For the Admin details I have kept all admin data hard coded in the App.js file which you can change according to your need. 

If a user successfully login a welcome text will be shown in the right side of the Navbar, and booking is only possible if the user is logged in, I have created separate logic for this also.

#### Talking about other features

User can search hotels by city, and filter hotels by pricing, A beautiful card view list of hotels will appear where user can view some details about the hotel before booking. 

I want to add more features on it but due to lack of time I was not able to, but I will work on this app and add more features also make it more easier to understand by any user.

## Installation

Clone this repository

Create your virtual environment

Before running the app install all the dependencies

### `npm i`

To run the App, this app will run on default port: 3000

### `npm start`

## Project status

This App is ready to use you can simply clone the repo and use it, but the App is still under development and in upcoming days you can see more features, very unique designs, with easy to use, and understandable UI.

## Contribute

**Contributions are always welcome!**

Please ensure your pull request adheres to the following guidelines:

- Alphabetize your entry.
- Suggested READMEs should be beautiful or stand out in some way.
- Make an individual pull request for each suggestion.
- Keep descriptions short and simple, but descriptive.
- Start the description with a capital and end with a full stop/period.
- Make sure your text editor is set to remove trailing whitespace.
- Use the `#readme` anchor for GitHub READMEs to link them directly

Thank you for your suggestions!

## License

[MIT](https://choosealicense.com/licenses/mit/)

