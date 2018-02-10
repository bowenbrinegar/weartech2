import axios from "axios";


export default {
  clear: function() {
    return axios.get('/api/db/clear')
  },
  getInstitutions: function() {
    return axios.get("/api/db/institution")
  },
  getCushions: function() {
    return axios.get('/api/db/cushion')
  },
  getShoes: function() {
    return axios.get('/api/db/shoe')
  },
  getBeds: function() {
    return axios.get('/api/db/bed')
  },
  getCushionData: function() {
    return axios.get('/api/db/data/cushion')
  },
  getShoeData: function() {
    return axios.get('/api/db/data/shoe')
  },
  getBedData: function() {
    return axios.get('/api/db/data/bed')
  },
  createInstitution: function(data) {
    return axios.post('/api/db/institution', data)
  },
  createCushion: function(data) {
    return axios.post('/api/db/cushion', data)
  },
  createShoe: function(data) {
    return axios.post('/api/db/shoe', data)
  },
  createBed: function(data) {
    return axios.post('/api/db/bed', data)
  },
  createCushionData: function(data) {
    return axios.post('/api/db/data/cushion', data)
  },
  createShoeData: function(data) {
    return axios.post('/api/db/data/shoe', data)
  },
  createBedData: function(data) {
    return axios.post('/api/db/data/bed', data)
  }
}