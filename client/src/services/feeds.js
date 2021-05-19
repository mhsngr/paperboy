import axios from 'axios';

const addFeed = (url) => {
  return axios.post('/api/feeds', { url })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const getFeed = (id) => {
  return axios.get(`/api/feeds?id=${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getFeedItems = (id, query, skip, limit) => {
  return axios.get(`/api/feeds?id=${id}&q=${query}&skip=${skip}&limit=${limit}`)
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

const getAge = (date) => {
  const age = Date.now() - new Date(date);
  if (Math.floor(age / (1000 * 60 * 60 * 24 * 365 )) > 0) return `${Math.floor(age / (1000 * 60 * 60 * 24 * 365 ))}y`;
  if (Math.floor(age / (1000 * 60 * 60 * 24 * 7 ))) return `${Math.floor(age / (1000 * 60 * 60 * 24 * 7 ))}w`;
  if (Math.floor(age / (1000 * 60 * 60 * 24 ))) return `${Math.floor(age / (1000 * 60 * 60 * 24))}d`;
  if (Math.floor(age / (1000 * 60 * 60 ))) return `${Math.floor(age / (1000 * 60 * 60))}h`;
  if (Math.floor(age / (1000 * 60))) return `${Math.floor(age / (1000 * 60))}min`;
  if (Math.floor(age / (1000))) return `${Math.floor(age / (1000))}s`;
}

const starItem = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { starred: true })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const unstarItem = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { starred: false })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
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
  return axios.put(`/api/feeds/item/${id}`, { unread: false })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const unmarkRead = (id) => {
  return axios.put(`/api/feeds/item/${id}`, { unread: true })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const markFeedRead = (id) => {
  return axios.put(`/api/feeds?id=${id}&unread=${false}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const getUnread = (id) => {
  return axios.get(`/api/feeds?id=${id}&unread=${true}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

// const getAllRead = () => {
//   return axios.get('/api/feeds/read')
//     .then(response => {
//       return response.data;
//     })
//     .catch(err => {
//       return err;
//     })
// }

const getReadStarred = () => {
  return axios.get('/api/feeds/read-starred')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const getReadLater = (id) => {
  return axios.get('/api/feeds/read-later')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

const unfollowFeed = (id) => {
  return axios.delete(`/api/feeds/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

export { addFeed, getFeed, getFeedItems, getUserFeeds, getAllFeeds, getIcon, getAge, starItem, unstarItem, getStarred, markRead, unmarkRead, markFeedRead, getUnread, getReadStarred, getReadLater, unfollowFeed };