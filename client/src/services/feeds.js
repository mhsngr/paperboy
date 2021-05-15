import axios from 'axios';

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

export { getFeed, getUserFeeds };