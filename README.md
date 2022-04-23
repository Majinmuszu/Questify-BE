Backend for GoIT final project questify, 
Best Team (one and only): 
Tomasz Mazur, 
Paweł Szatkowski (Scrum Master), 
Artur Kraśniewski (Tech Lead), 
Jakub Bełtowski, 
Kamil Witkowski, 
Bartek Świderski;


npm run start - to run in prod mode
npm run start:dev - to run in dev mode

USERS ROUTES: 

POST "/api/users/signup" - to register account
POST "/api/users/login" - to login to app
GET "/api/users/current" - to get current logged in user
GET "/api/users/logout" - to logout from account 

CARDS ROUTES: 

GET "/api/card" - to get all cards for currently logged in user 
POST "/api/card" - to post new card
PATCH "/api/card/:id" - to edit card by ID in path 
DELETE "/api/card/:id" - to delete card by id in path
PATCH "/api/card/complete/:id" to set card as completed
