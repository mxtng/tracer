# Tracer web app

## Setup process
1. Clone repository
2. Create .env file in root directory
3. In .env file, create 3 env variables:
   * process.env.MONGODB_URI -> MongoDB URI; (e.g. MongoDB Atlas or MongoDB Compass(local) )
   * process.env.PORT -> Port number for server. (e.g. 5000)
   * process.env.JWT_SECRET -> Secret key for jsonwebtoken. (e.g. dontellanyone)
4. In terminal, run 'npm start' for initial setup & 'npm run dev' for subsequent start