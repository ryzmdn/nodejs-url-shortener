# NodeJS URL Shortener

A URL shortener makes a URL shorter for you. Long URLs can be hard to remember or share with others. A shortened URL version makes it easier to share your favorite link.

A URL shortener can also help in other ways. For instance, links shortened with the same tool look very similar, especially for the domain part. This makes the URL seem more authentic.

## Folder Structure

```bash
nodejs-url-shortener/
│
├── config/
│   └── db.js
│
├── models/
│   └── Url.js
│
├── routes/
│   └── urlRoutes.js
│
├── utils/
│   └── validation.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation

If you want to use this repository, follow the steps below:

```bash
# Clone repository
git clone https://github.com/ryzmdn/nodejs-url-shortener.git

# Change directory folder
cd nodejs-url-shortener

# Install Dependencies
npm install

# Open code editor
code .

# Run web server
node server.js
```

These are some packages if you want to install them directly.

```bash
npm install express mongoose dotenv nanoid
```

## Usage

Change the file name from ```.env.example``` to ```.env```, then you can see this variable:

```bash
PORT=
MONGO_URI=
BASE_URL=http://localhost:<PORT>
```

You can set the router endpoint from the ```server.js``` file

```js
app.use("/api", urlRoutes);
```

Create a new request with the POST method and endpoint input like this:

```bash
http://localhost:5000/shorten
```

On the Body tab, select raw and select the JSON format. Replace it with the URL you want to shorten.

```json
{
    "originalUrl": "https://www.example.com"
}
```

Once you've successfully shortened the URL, you should see the result look like this:

```json
{
  "shortUrl": "http://localhost:<PORT>/abc123"
}
```

## Packages

- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Mongoose](https://www.mongodb.com)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nanoid](https://www.npmjs.com/package/nanoid)
