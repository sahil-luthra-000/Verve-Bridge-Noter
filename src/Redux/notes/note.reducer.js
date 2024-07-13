import {
    GET_NOTES_LOADING,
    GET_NOTES_SUCCESS,
    GET_NOTES_ERROR,
    CREATE_NOTES_LOADING,
    CREATE_NOTES_SUCCESS,
    CREATE_NOTES_ERROR,
    DELETE_NOTES_LOADING,
    DELETE_NOTES_SUCCESS,
    DELETE_NOTES_ERROR,
    UPDATE_NOTES_LOADING,
    UPDATE_NOTES_SUCCESS,
    UPDATE_NOTES_ERROR,
  } from './note.types';
  
  const initialState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export default function noteReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_NOTES_LOADING:
      case CREATE_NOTES_LOADING:
      case UPDATE_NOTES_LOADING:
      case DELETE_NOTES_LOADING:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      case GET_NOTES_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
  
      case CREATE_NOTES_SUCCESS:
      case UPDATE_NOTES_SUCCESS:
      case DELETE_NOTES_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
        };
  
      case GET_NOTES_ERROR:
      case CREATE_NOTES_ERROR:
      case UPDATE_NOTES_ERROR:
      case DELETE_NOTES_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  }
  