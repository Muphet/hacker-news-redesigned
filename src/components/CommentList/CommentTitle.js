import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/spacing';

const CommentsTitle = styled.h2`
  margin-bottom: ${spacing(8)};
  padding-bottom: ${spacing(3)};
  border-bottom: 1px solid ${colors.neutral['70']};
`;


export default CommentsTitle;
