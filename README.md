# Odin Mini Message Board

## 📖 Project Overview
The **Odin Mini Message Board** is a simple full-stack web application built as part of *The Odin Project* curriculum.  
It allows users to post short messages to a shared message board and view all submitted messages on a dedicated page.  

When a message is submitted:
1. The server validates and processes the input.
2. The message, along with the username and timestamp, is stored in a **PostgreSQL** database.
3. The application redirects to a messages page, where all stored messages are displayed in chronological order.

This project demonstrates:
- Server-side programming with **Express.js**.
- Template rendering with **EJS**.
- Database interaction with **PostgreSQL**.
- Styling with plain **CSS**.

---

## 🛠 Tech Stack
- **Backend:** Express.js
- **Templating Engine:** EJS
- **Database:** PostgreSQL
- **Styling:** CSS

---

## ✨ Features
- Add new messages to the message board.
- View all stored messages on a dedicated page.
- Messages include username, text, and timestamp.
- Persistent storage via PostgreSQL.

---

## 🚀 Installation & Setup

Follow the steps below to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/odin-mini-message-board.git
   cd odin-mini-message-board

2. **Install dependencies**
   ```bash
   npm install

3. **Create the database**
  Open pgshell (or psql) and run:
   ```bash
   CREATE DATABASE message_group;

4. **Configure environment variables**
  Create a .env file in the root directory and add:
   ```bash
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_NAME=message_group

5. **Update database connection in `populatedb.js`**  
   In the `populatedb.js` file:

   - **Comment out** the Render connection string line:
     ```js
     const connectionString = process.env.DATABASE_URL; // render connection string
     ```

   - **Uncomment** the local connection string line:
     ```js
     // const connectionString = `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
     ```


6. **Seed the database**
  This will create the necessary tables and sample data:
   ```bash
   npm run seed

7. **Start the development server**
   ```bash
   npm run start

8. **License**
  This project is open-source and available under the MIT License.