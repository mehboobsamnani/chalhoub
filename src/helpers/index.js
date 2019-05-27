import axios from 'axios';

axios.defaults.headers.common.Authorization = 'Bearer 504e9018163d426baeeb5cd16695a729';

// Thunk action to   fetch the News Headlines
export function fetchHeadlines() {
  return new Promise((resolve, reject) => {
    if (!navigator.onLine) {
      resolve(JSON.parse(localStorage.getItem('fetchHeadlines')));
      return;
    }
    axios.get('https://newsapi.org/v2/top-headlines?country=us')
      .then((response) => {
        resolve(response.data);
        localStorage.setItem('fetchHeadlines', JSON.stringify(response.data));
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function fetchNews(category) {
  return new Promise((resolve, reject) => {
    if (!navigator.onLine) {
      resolve(JSON.parse(localStorage.getItem('fetchNews')));
      return;
    }
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`)
      .then((response) => {
        resolve(response.data);
        localStorage.setItem('fetchNews', JSON.stringify(response.data));
      })
      .catch((e) => {
        reject(e);
      });
  });
}
