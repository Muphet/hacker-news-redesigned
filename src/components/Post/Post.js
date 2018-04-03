import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import getHostName from '../../utils/getHostname';

import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';
import Time from '../Time';

import PostHeader from './PostHeader';
import PostTitle from './PostTitle';
import PostBody from './PostBody';
import CommentList from '../CommentList/CommentList';
import CommentsEmptyState from '../CommentList/CommentsEmptyState';
import PollContainer from '../../containers/PollContainer';

const Post = ({ id, type, url, title, text, score, author, time, parts, commentCount }) => {
  const isLink = (url !== null);
  
  return (
    <Fragment>
      <article>
        <PostHeader>

          <PostTitle>
            {isLink ? (
                <Fragment>
                  <EntryLink title={title} href={url} external={isLink} />

                  <EntryHostname>({getHostName(url)})</EntryHostname>
                </Fragment>)

              : title}
          </PostTitle>

          <Meta>
            {score &&
            <Score>+ {score}</Score>}

            {author &&
            <Author>
              by <EntryUserLink href={`/user/${author}`}>{author}</EntryUserLink>
            </Author>
            }

            <Time
              to={`/post/${id}`}
              time={time}
            />
          </Meta>

        </PostHeader>

        {text &&
        <PostBody dangerouslySetInnerHTML={{ __html: text }} />
        }

        {type === 'poll' && parts && parts.length > 0 &&
        <PollContainer pollIDs={parts}/>
        }
      </article>

      {/*{commentCount > 0*/}
        {/*? <CommentList commentIDs={comments} commentCount={commentCount} />*/}
        {/*: <CommentsEmptyState>No one commented yet</CommentsEmptyState>*/}
      {/*}*/}
    </Fragment>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  score: PropTypes.number.isRequired,
  author: PropTypes.string,
  time: PropTypes.number.isRequired,
  parts: PropTypes.array,
  commentCount: PropTypes.number,
  kids: PropTypes.array,
};

export default Post;
