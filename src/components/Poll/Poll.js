import React from 'react';
import PropTypes from 'prop-types';
import PollChoice from './PollChoice';
import * as styles from './Poll.scss';

const Poll = ({ totalVotes, options }) => (
  <div className={styles.Poll}>
    {options.map((option) => (
      <PollChoice key={option.text} {...option} />)
    )}

    <div className={styles.PollTotal}>{totalVotes} votes</div>
  </div>
);

Poll.propTypes = {
  totalVotes: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Poll;

// TODO: Decrease font-size, increase spacing between choices. This example with long choice text show why it's ugly: http://localhost:3050/post/126809
