import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Entry from '../Entry/index';
import { DirectionalNav } from '../DirectionalNav/';
import { NextLink, PrevLink } from '../DirectionalNav';
import { ENTRIES_PER_PAGE } from '../../constants';
import EntryPlaceholder from '../Entry/EntryPlaceholder';

const EntryList = ({ entries, entryCount, feed, page, loading, someProp}) => {
  if (loading) {
    return Array(ENTRIES_PER_PAGE).fill(1).map((x, i) =>
      <EntryPlaceholder key={i} />
    );
  }
  
  const currentPage = parseInt(page, 10);
  
  const pageCount = Math.ceil(
    entryCount / ENTRIES_PER_PAGE
  );
  
  // Make sure top feed is just homepage: i.e. top -> "/", top page 2 -> "/2"
  const baseUrl = feed !== 'top' ? `/${feed}` : '';
  // Don't render add "/1" to the path
  const prevUrl = (currentPage === 2) ? baseUrl : `${baseUrl}/${currentPage - 1}`;
  const nextUrl = `${baseUrl}/${currentPage + 1}`;
  
  return (
    <Fragment>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))}
      
      {entryCount > ENTRIES_PER_PAGE &&
        <DirectionalNav>
          {currentPage > 1 &&
            <PrevLink
              to={prevUrl}>
              Previous
            </PrevLink>
          }
          
          {currentPage < pageCount &&
            <NextLink
              to={nextUrl}>
              Next
            </NextLink>
          }
        </DirectionalNav>
      }
    </Fragment>
  );
};

EntryList.defaultProps = {
  page: '1',
  feed: 'top',
};

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
  entryCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
};

export default EntryList;

// TODO: Consider renaming EntryList -> Feed, Entry -> FeedItem
