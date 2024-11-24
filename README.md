# Install Project Dependencies
npm install

# Install Project Dependencies
Create a .env file in the root directory of the project and add the following environment variables:
SECRET_KEY=your_secret_key
API_URL=https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a

SECRET_KEY: Use this for your application's security for JWT.
API_URL: This is the API endpoint used to fetch data.


## Libraries Used
axios: For making HTTP requests.
body-parser: For parsing incoming request bodies.
cors: To enable Cross-Origin Resource Sharing.
dotenv: To load environment variables.
express: Web framework for building the backend.
jsonwebtoken: For adding authentication via JWT.


## Backend Authentication
The backend includes authentication functionality, secured with a SECRET_KEY for signing JWT tokens.

##  Running the Project
npm run dev

## Implemented two apis 
BASE_URI:- http://localhost:3000/api/phones
1. get Al Data (/)
2. Filter no on status (/filter-numbers)

   
