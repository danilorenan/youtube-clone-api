import axios from 'axios';

const KEY = 'AIzaSyAmog8BJqmZKbOm8bMkaJGcnr9A8QbrKq8';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY

    }
});

export default request;