# MERN-authentication-profile
# Server
npm intsall
# Client
cd client

npm install


# Together (concurrently)
npm run dev

# backend base url : http://localhost:3600/
# frontend base url : http://localhost:3000/

change the content of MONGO_URI in your .env file with you access URI mongoDB cloud

# List of routes (backend)

#Register

/api/register (POST)

#Login

/api/login (POST)

#Add profile

/api/profiles (POST)

#Get one profile

/api/profile (GET)

#get all profiles

/api/profiles (GET)

#Delete one profile

/api/profiles/:id (DELETE)

# List of routes (frontend)

/ (profile)
/register 
/login
/admin
/notfound
/noaccess