const prod = {
    url: {
      API_URL: 'http://unimorph.ethz.ch/api/',
    }
  }
  
const dev = {
    url: {
        API_URL: 'http://localhost:3005/api',
    }
}

export default {
    url: process.env.NODE_ENV === 'development' ? dev.url: prod.url
}