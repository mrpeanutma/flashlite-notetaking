

# FlashLITE Learning Platform

This is our final project for the CSCI 4300 Web Programming Course.

FlashLITE is a website that allows users to create their own sets of flashcards and display them to other users. All flashcard sets and users are stored in a MongoDB server and users are verified with authentication and their passwords are hashed on the database. Users have sets that they "own", so that only they can edit the set and its cards, but they can also view sets created by other users.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Team Members:

1. **Team Leader:** Joshua Young
2. **Communication Lead:** Emily Cheng
3. **Miro Captain:** Bailey Greer
4. **GitHub Captain:** Connor Stephens

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

