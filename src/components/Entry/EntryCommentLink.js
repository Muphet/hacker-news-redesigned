import styled from 'styled-components';
import commentIcon from '../../images/icon-comment.svg'
import { colors } from '../../styles/settings/colors';

// 1. The recommended size for tap targets is about 44x44px.
// Adding a faux padding around the small elements makes it
// harder to miss on touch devices.

const EntryCommentLink = styled.a`
  display: block;
  position: relative;
  margin: -8px 0 -8px auto; // [1]
  padding: 8px 0; // [1]
  color: ${colors.neutral['30']};
  text-decoration: none;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &::after {
    vertical-align: middle;
    display: inline-block;
    width: 24px;
    height: 21px;
    margin-left: 8px;
    background-image: url(${commentIcon});
    content: '';
  }

  &:hover {
    opacity: 0.8;
    color: ${colors.neutral['40']};
  }

  &:active {
    opacity: 0.6;
  }
`;


export default EntryCommentLink;