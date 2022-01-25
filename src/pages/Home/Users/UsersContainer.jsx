import React, { useCallback, useState, useEffect } from 'react';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useSelector from 'hooks/useSelector';

import {
  collectionSelector,
  isFetchingSelector,
  isCollectionFetchedSelector,
} from 'models/users/selectors';

import styles from './Users.scss';
import Users from './Users';

const UsersContainer = () => {
  const [onlyLikedVisible, setOnlyLikedVisible] = useState(false);
  const onFetchUsers = useAction(actions.fetchUsers);
  const updateUser = useAction(actions.updateUser);
  const deleteUser = useAction(actions.deleteUser);
  const users = useSelector(collectionSelector);
  const fetching = useSelector(isFetchingSelector);
  const collectionFetched = useSelector(isCollectionFetchedSelector);

  useEffect(() => {
    if (!collectionFetched) {
      onFetchUsers();
    }
  }, [users, onFetchUsers, collectionFetched]);

  const handleUsersFilterByLike = useCallback(() => {
    setOnlyLikedVisible(!onlyLikedVisible);
  }, [onlyLikedVisible]);

  const likedUsers = users.filter(user => user.isLiked);

  return (
    <>
      <button onClick={handleUsersFilterByLike} className={styles.button}>
        {' '}
        Show only liked
      </button>

      {likedUsers.length === 0 && onlyLikedVisible ? (
        <h1 className={styles.emptyResult}> There are no users yet...</h1>
      ) : (
        <Users
          list={onlyLikedVisible ? likedUsers : users}
          fetching={fetching}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      )}
    </>
  );
};

export default UsersContainer;
