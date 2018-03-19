import React from 'react';
import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';
import EntryWrapper from './EntryWrapper';
import EntryTitle from './EntryTitle';
import EntryLink from './EntryLink';
import EntryHostname from './EntryHostname';
import EntryMeta from '../Meta/Meta';
import { Author, Score, Time } from '../Meta/MetaItem';
import EntryUserLink from './EntryUserLink';
import EntryCommentLink from './EntryCommentLink';

const Entry = ({ id, type, url, title, text, score, author, time, commentCount }) => {
  const isJob = (type === 'job');
  let isLink = typeof url !== 'undefined'; // Whether or not is an external link

  return (
    <EntryWrapper>
      <EntryTitle>
        <EntryLink href={isLink ? url : `/${id}`}>
          {title}
        </EntryLink>

        {isLink &&
        <EntryHostname>({getHostName(url)})</EntryHostname>
        }
      </EntryTitle>

      <EntryMeta>
        {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
        <Score>+ {score}</Score>}

        {!isJob && author &&
        <Author>
          by <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
        </Author>}

        <Time
          dateTime={timeUtils.getISOTime(time)}
          title={timeUtils.getExactTime(time)}
        >
          {timeUtils.getTimePassed(time)}
        </Time>

        {commentCount && commentCount > 0 && // check for descendants/kids instead ?
        <EntryCommentLink href="" title={`${commentCount} comments`}>
        {commentCount}
        </EntryCommentLink>}
      </EntryMeta>
    </EntryWrapper>
  );
};

export default Entry;
