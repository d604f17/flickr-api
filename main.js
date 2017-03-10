const Flickr = require('flickrapi');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        name: 'flickr api',
        version: '0.0.1',
        authors: [
            'Rasmus Nørskov (rhnorskov)',
            'Mathias Wieland (cuntbag)',
            'Andreas Sommerset (flapjack)'
        ]
    })
});

app.get('/:text', (req, res) => {
    req.params.text
    Flickr.tokenOnly({
        api_key: "85f11febb88e3a4d49342a95b7bcf1e8",
        secret: "429ecaa952bd0757"
    }, function (error, flickr) {
        flickr.photos.search({
            text: req.params.text
        }, function (error, result) {
            if (!error) {
                result.photos.photo = result.photos.photo.map(photo => {
                    return Object.assign(photo, {url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`})
                });
                res.json(result)
            }
        });
    });
});

// export FLICKR_USER_ID="84174915@N08"
// export FLICKR_ACCESS_TOKEN="72157677679254294-afea93d392d1ac88"
// export FLICKR_ACCESS_TOKEN_SECRET="ea8c60ebe0656431"

app.listen(process.env.port || 4000);