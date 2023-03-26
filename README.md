###**What's a URL Shortener?**
URL shortening is a technique to convert a long URL (site or page address) to a shorter version. This shorter version of the URL is usually cleaner and easier to share or remember. When someone accesses the shortened address, the browser redirects to the original (large) url address. It is also called URL redirection or URL redirect.

###**How does it work?**
Essentially, your database has 2 fields: longUrl, shortUrl.

When a url passes to the body for shorten then it check the database, longurl is already saved in it, if it is there return the short url, otherwise it will keep it in the database and create short url for the given url.

Here two api's are created : '/shorturl' , '/longurl'.
'/shorturl' : return the shortURL
'/longurl' : return the LongURL already saved in DB.(used to retrieve the longURL)

DataBase : MongoDB

###**How to use this code?**
Make sure you have the latest stable version of Node.js installed

- step 1 : 
```npm i```

- step 2 : add `.env` file , inside .env add your MONGO_URI. 

- step 3 : 
```npm run devStart```

