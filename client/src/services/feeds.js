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

const starItem = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { starred: true })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const unstarItem = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { starred: false })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getStarred = () => {
  return axios.get('/api/feeds/starred')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const markRead = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { read: true })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const unmarkRead = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { read: false })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

export { addFeed, getFeed, getUserFeeds, getAllFeeds, getIcon, starItem, unstarItem, getStarred, markRead, unmarkRead };