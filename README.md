# Smart Pet Collar

< Insert Description >

### Instructions

cd server

node index.js

docker run --name pet-db -v /home/seansamu/Projects/petco/data:/data/db -p 6379:6379 -d redis

go to localhost:3000 for main page

to post, have packet sent in using the example in index.html (src/public)