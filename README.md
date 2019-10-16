## ENDANGERED SPECIES

This app will allow you to learn, browse, save, leave comments and connect to users with shared passion for conservation.

## Built with the following technologies:

Developed REStful API using Ruby on Rails.

Built front-end with React.

Implemented authentication and authorization using JSON Web Token.

Carefully selected all data used in the project and integrated Google Maps API.

Created the visual design incorporating CSS, Flexbox and MDBootstrap and photos from Unsplashed website.

You can find the backend for this project on my repos, pinned at the top.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You will have to use your own Google maps api key, to store it:

## Helpful tip to securely store your api key:

  Create a .env file in your root directory
  
  Inside that .env file create a variable and set it equal to your api key and prepend REACT_APP to the name of your variable:
    ``` REACT_APP_GOOGLE_API_KEY = your_api_key ```
    
  Add .env file to .gitignore file:
    ``` .env ```
    
  Acces your key by replacing the actual api key with your variable preceded by process.env:
    ``` process.env.REACT_APP_GOOGLE_API_KEY ```
  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

