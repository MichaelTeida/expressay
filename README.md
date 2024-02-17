# Expressay

Expressay is a platform designed for swift expression and sharing. It facilitates the creation, sharing, and exploration of entries from a diverse community of users, fostering connection, inspiration, and discovery through the power of expression.

## Technologies Used

- React
- Next.js 14.1.0
- MongoDB
- bcrypt
- Mongoose
- next-auth

## Features

- **Google Login:** Seamlessly log in using your Google account.
- **Create Entry:** Express yourself by adding new entries.
- **Share Entry:** Share your entries with the community.
- **Copy Entry:** Easily copy entries to share through other mediums.
- **Delete Entry:** Remove entries when needed.
- **Edit Entry:** Modify and refine your entries over time.
- **Visit Other Profiles:** Explore the entries and profiles of other users.

## Installation

To get started with Expressay, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Configure your MongoDB connection.
5. Configure your Google Cloud connection (OAuth).
6. Create a `.env` file in the project directory.
7. Add the following parameters to the `.env` file:
    ```
    GOOGLE_ID=
    GOOGLE_CLIENT_SECRET=
    MONGODB_URL=
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=
    ```
8. Configure the values for `GOOGLE_ID`, `GOOGLE_CLIENT_SECRET`, `MONGODB_URL`, and `NEXTAUTH_SECRET` according to your environment.
9. Start the development server with `npm run dev` or `yarn dev`.
10. Open `http://localhost:3000` in your browser to see the result.