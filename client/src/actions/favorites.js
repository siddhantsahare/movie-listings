import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_ALL_FAVORITES,
  FAVORITES_ERROR
} from './types';

// Get All Favorites
export const getAllFavorites = () => async dispatch => {
  try {
    const res = await axios.get('/api/favorites');

    dispatch({
      type: GET_ALL_FAVORITES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove From Favorites
export const removeFromFavorites = id => async dispatch => {
  try {
    await axios.delete(`/api/favorites/${id}`);
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add To Favorites
export const addToFavorites = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/favorites', data, config);
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
