# Tracer web app

![Home page](/screenshots/home_page.png)

## Setup process

1. Clone repository
2. Create .env file in root directory
3. In .env file, create 3 env variables:
   - process.env.MONGODB_URI -> MongoDB URI; (e.g. MongoDB Atlas or MongoDB Compass(local) )
   - process.env.JWT_SECRET -> Secret key for jsonwebtoken. (e.g. dontellanyone)
4. In terminal, run 'npm run initial' for initial setup & 'npm start'

Frontend default to Port 3000
Backend default to Port 5000

## How It Works

### 1. Register

![Register page](/screenshots/register_page.png)

### 2. Sign in & click generate check-in link in dashboard page

![Generate link](/screenshots/generate_link.png)

### 3. Copy check-in link for customers to check-in

![Dashboard](/screenshots/dashboard.png)

### 4. Customer check-in form

![Checkin form](/screenshots/checkin_form.png)

### 5. View customer check-ins

![Dashboard_2](/screenshots/dashboard_2.png)
