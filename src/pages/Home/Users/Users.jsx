import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import styles from './Users.scss';

const Users = ({ list, fetching, updateUser, deleteUser }) => (
  <div className={styles.root}>
    {fetching ? (
      'Loading...'
    ) : (
      <>
        <div className={styles.usersList}>
          {list.map(user => (
            <User
              key={user.id}
              user={user}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          ))}
        </div>
      </>
    )}
  </div>
);

Users.propTypes = {
  fetching: PropTypes.bool,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  list: PropTypes.array,
};

Users.defaultProps = {
  fetching: false,
  list: [],
};

export default Users;
