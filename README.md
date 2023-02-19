# Contact Form Backend

This is a simple Node.js server that provides an API for accepting and storing contact form submissions.

## Setup

- Clone the repository.

- Install Node.js (if not already installed).

- Install the project dependencies by running npm install.

## Usage

To start the server, run node index.js <port> where <port> is the port number to listen on.

For example, to listen on port 3000, run node index.js 3000.

## API

**POST /contact**  
Accepts a JSON payload containing the following fields:

- name (required)
- email (required)
- subject (required)
- message (required)

Upon successful submission, the payload will be appended to a file named `contact.txt` in the root directory of the project.

## Response

The server will return a 200 status code with an empty response body.
