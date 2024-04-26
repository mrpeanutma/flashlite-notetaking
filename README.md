

# FlashLITE Learning Platform

This is our final project for the CSCI 4300 Web Programming Course, made by Joshua Young, Bailey Greer, Emily Cheng, and Connor Stephens.

FlashLITE is a website that allows users to create their own sets of flashcards and display them to other users. We are also working on implementing a way to study them. All flashcard sets and users are stored in a MongoDB server and users are verified with authentication and their passwords are hashed on the database.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**1. Install all dependencies:**
```bash
npm i
cd app
npm i
cd server
npm i
cd ../..
```

If you want to run FlashLITE on your own database, modify the `.env` file with your personal connection string and JWT key.

**2. Run the development server:**
```bash
npm run develop
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Note: We have been getting issues with CORS where it will not connect to the server, we were able to find a workaround with the Firefox extension "CORS Everywhere".
