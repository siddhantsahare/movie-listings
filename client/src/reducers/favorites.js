import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_ALL_FAVORITES,
  GET_FAVORITE,
  FAVORITES_ERROR
} from '../actions/types';

const initialState = {
  favorites: [],
  favorite: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favorites: payload,
        loading: false
      };
    case GET_FAVORITE:
      return {
        ...state,
        favorite: payload,
        loading: false
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [payload, ...state.favorites],
        loading: false
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite._id !== payload),
        loading: false
      };
    case FAVORITES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
