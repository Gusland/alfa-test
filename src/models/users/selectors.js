import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  state => state,
  state => state.users
);

export const isFetchingSelector = createSelector(
  usersSelector,
  ({ fetching }) => fetching
);

export const isCollectionFetchedSelector = createSelector(
  usersSelector,
  ({ collectionFetched }) => collectionFetched
);

export const collectionSelector = createSelector(
  usersSelector,
  users => users.collection || []
);
