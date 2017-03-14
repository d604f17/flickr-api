import qs from 'qs';
import rp from 'request-promise';

export default class Flickr {
    constructor(key, format) {
        this.api_key = key;
        this.format = format;
        this.url = 'https://api.flickr.com/services/rest' || options.url;
    }

    query(method, parameters) {
        let query = qs.stringify(Object.assign({
            api_key: this.api_key,
            method: 'flickr.' + method,
            format: this.format,
            nojsoncallback: 1
        }, parameters));

        return rp({
            url: this.url + '?' + query,
            json: true
        });
    }
}