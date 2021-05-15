import axios from 'axios';

const addFeed = (url) => {
  return axios.post('/api/feeds', { url })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getFeed = (id) => {
  return axios.get(`/api/feeds/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getUserFeeds = () => {
  return axios.get('/api/feeds')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getAllFeeds = () => {
  return axios.get('/api/feeds/all')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getIcon = (link) => {
  const url = new URL(link);
  return `https://logo.clearbit.com/${url.hostname}`
}

export { addFeed, getFeed, getUserFeeds, getAllFeeds, getIcon };