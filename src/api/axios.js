import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost/stripe/',
  headers: {
    'Content-Type': 'application/json'
  }
});