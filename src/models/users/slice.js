/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    collection: [],
    fetching: true,
    meta: {},
    collectionFetched: false,
  },
  reducers: {
    fetchUsers: state => {
      state.fetching = true;
    },
    fetchUsersSuccess(state, { payload }) {
      const { results, info } = payload;
      state.fetching = false;
      state.collectionFetched = true;
      state.collection = results.map(item => {
        return { ...item, isLiked: false };
      });
      state.meta = info;
    },
    updateUser: state => {
      state.fetching = true;
    },
    updateUserSuccess(state, { payload }) {
      const { id, isLiked } = payload;
      state.collection = state.collection.map(item => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          isLiked,
        };
      });
      state.fetching = false;
    },
    deleteUser: state => {
      state.fetching = true;
    },
    deleteUserSuccess(state, { payload }) {
      state.collection = state.collection.filter(item => item.id !== payload);
      state.fetching = false;
    },
    filterUsersByLiked: (state, { payload }) => {
      state.collection = state.collection.filter(
        item => item.isLiked === payload
      );
    },
  },
});

export const actions = actionTypes(usersSlice.actions);

export default usersSlice.reducer;
