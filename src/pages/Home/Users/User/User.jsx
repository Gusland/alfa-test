import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  faHeart,
  faHeartBroken,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './User.scss';

const User = ({ user, updateUser, deleteUser }) => {
  const handleLikeClick = useCallback(() => {
    updateUser({ id: user.id, isLiked: !user.isLiked });
  }, [updateUser, user]);

  const handleDeleteUser = useCallback(() => {
    deleteUser(user.id);
  }, [deleteUser, user.id]);

  return (
    <div className={s.root}>
      <div className={s.delete} onClick={handleDeleteUser}>
        {' '}
        <FontAwesomeIcon icon={faTrash} />{' '}
      </div>
      <div className={s.like} onClick={handleLikeClick}>
        {user.isLiked ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={faHeartBroken} />
        )}
      </div>
      <div className={s.nameWrapper}>
        <img className={s.avatar} src={user.image} alt="avatar" />
        <h3>{user.name}</h3>
      </div>
      <dl>
        <dt>Species</dt>
        <dd>{user.species}</dd>
        <dt>Status</dt>
        <dd>{user.status}</dd>
      </dl>
    </div>
  );
};

User.propTypes = {
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    isLiked: PropTypes.bool,
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }),
};

User.defaultProps = {
  user: {},
};

export default User;
