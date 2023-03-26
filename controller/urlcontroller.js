const Url = require('../model/urls');
const urlhelper = require('../helpers/urlhelper');
var validUrl = require('valid-url');
const { wrapSuccess, wrapError } = require("../utils").responseUtil; 


async function shorten(req,res) {
    try{
    const url = req.body.url;
    if (url){
        
        if (validUrl.isUri(url)){
            // res.status(400).send(wrapError(err))
        
            
        //Check if url already exists in the database
        const responce = await Url.findOne({ longUrl: url })

        //if url not exists in the database
        if (!responce){
            shorturl_sample = await urlhelper.generateShortUrl(url)
            const responce = await Url.create({ longUrl : url, shortUrl: shorturl_sample })
            res.status(201).send(wrapSuccess({ shortUrl: responce.shortUrl }, `ShortURL created Successfully`))
        }else{
        res.status(201).send(wrapSuccess({ shortUrl: responce.shortUrl }, `ShortURL created Successfully`))
        }
    }else{ res.status(400).send(wrapError("Please provide a valid URL"))}
}
    }catch (err) {
        res.status(400).send(wrapError(err))
      }
    }


    // To get the LongURL from the shortURL
    async function getlongurl(req,res){
        try{
        const hash = req.body.hash;
        const responce = await Url.findOne({ shortUrl: hash })
        //res.status(201).json({ longUrl: responce.longUrl });
        res.status(201).send(wrapSuccess({ longUrl: responce.longUrl }, `LongURL retrieved Successfully`)) 
    }catch (err) {
        res.status(400).send(wrapError(err))
      }
    }


module.exports = {
  shorten, getlongurl,
};