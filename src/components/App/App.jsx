import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

import AppRouter from 'components/AppRouter';
import 'styles/normalize.scss';
import styles from './App.scss';
import useBrowser from 'hooks/useBrowser';

const App = ({ routes }) => {
  const browser = useBrowser();

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  return (
    <>
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>{config.app.title}</h1>
        </div>
        <hr />
        <AppRouter routes={routes} />
      </div>
    </>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
