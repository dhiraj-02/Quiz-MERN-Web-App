# Quiz-MERN-Web-App

#Steps to run the code

Open folder project in vscode
Open terminal in vs code and change directory by "cd client" command
Run command "npm install" in the client directory
Open other terminal goto server directory
Run npm install there
Create .env file in server directory
Create cluster in mongodb, you can refer youtube for this and get the link for your cluster
Create cloudinary account you can get name, api secret, api key there
ADD these variables in .env file DB_URI = "mongodb cluster link", CLOUDINARY_CLOUD_NAME="get this from cloudinary website", CLOUDINARY_API_SECRET="", CLOUDINARY_API_KEY=""
In server terminal run command "node index.js"
Make sure database connection is established to database after this in console
In client terminal run command "nodemon index.js"
You can create accounts, add quiz, take quiz Enjoyy!!
