import { API_URL, GET_RANDOM_JOKE_FETCH_CONFIG } from '../config';

export const getRandomJoke = () => {
  return fetch(API_URL, GET_RANDOM_JOKE_FETCH_CONFIG).then((response) =>
    response.json()
  );
};
