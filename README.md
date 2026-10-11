# MyNotes

[View the repository on GitHub](https://github.com/GitArman007/MyNotes)

MyNotes is a simple Node.js note-taking web application that stores notes as text files and provides a browser interface for creating, viewing, and renaming them.

## Features

- Create notes with a title and text content
- Store notes as `.txt` files in the `files/` directory
- View a list of saved notes
- Read note contents in the browser
- Rename existing note files
- Server-rendered pages using EJS templates
- Tailwind CSS loaded through the CDN in the views

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Templating:** EJS
- **Storage:** Local text files using Node.js `fs`
- **Styling:** Tailwind CSS via CDN
- **Language:** JavaScript

## Project Structure

```text
MyNotes/
├── files/                  # Text files used to store notes
│   ├── filestart.txt
│   ├── filestartupdated.txt
│   ├── MongoDB.txt
│   └── this is not my file at all .txt
├── views/                  # EJS templates
│   ├── edit.ejs            # Rename-note form
│   ├── show.ejs            # Displays a note's contents
│   └── viewindex.ejs       # Main page and note creation form
├── index.js                # Express application and route definitions
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked dependency versions
└── zcontent.txt            # Initial setup notes
```

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GitArman007/MyNotes.git
   ```

2. Navigate into the project directory:

   ```bash
   cd MyNotes
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

MyNotes does not currently use environment variables. The application runs on port `3000`, which is configured directly in `index.js`.

## Running Locally

Start the application with:

```bash
node index.js
```

Then open the application in your browser:

```text
http://localhost:3000
```

The `package.json` file does not currently define a start script. Its available test script is a placeholder and exits with an error:

```bash
npm test
```

## Routes and Main Pages

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Lists all files in the `files/` directory and displays the note creation form |
| `POST` | `/create` | Creates a new text file from the submitted title and details |
| `GET` | `/file/:filename` | Displays the contents of a selected note |
| `GET` | `/edit/:filename` | Displays the form for renaming a note |
| `POST` | `/edit` | Renames an existing note file |

New notes are saved in the `files/` directory with a `.txt` extension.

## Future Improvements

- Add a proper `npm start` script
- Add automated tests
- Add note deletion functionality
- Allow editing note contents, not only filenames
- Validate and sanitize filenames and form input
- Move the port configuration to an environment variable
- Improve error pages and user feedback
- Add a persistent database option for larger collections of notes

## License

This project is licensed under the **ISC License**, as specified in `package.json`.
