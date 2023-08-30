import { CSSProperties, FC, memo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IssueType } from 'pages/IssueList';

type Props = IssueType & {
  cursor?: CSSProperties['cursor'];
};

const Issue: FC<Props> = ({ number, title, user, created_at, comments, cursor = 'pointer' }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const navigateToIssueDetail = () =>
    pathname === '/' &&
    navigate(`${number}`, { state: { number, title, user, created_at, comments } });
  return (
    <StyledContainer onClick={navigateToIssueDetail} cursor={cursor}>
      <div>
        <StyledHeader>
          <span>#{number}</span>
          <StyledTitle>{title}</StyledTitle>
        </StyledHeader>
        <StyledBody>
          <span>작성자: {user.login}</span>
          <span>작성일: {created_at}</span>
        </StyledBody>
      </div>
      <StyledCommentCount>
        <span>코멘트: {comments}</span>
      </StyledCommentCount>
    </StyledContainer>
  );
};

export const MemoizedIssue = memo(Issue);

const StyledContainer = styled.div<{ cursor: CSSProperties['cursor'] }>`
  width: 500px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px black solid;
  cursor: ${props => props.cursor};
  &:hover {
    background-color: whitesmoke;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  gap: 10px;
  font-size: 20px;
  padding: 10px;
`;
const StyledTitle = styled.span`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledBody = styled.div`
  padding: 10px;
`;
const StyledCommentCount = styled.div`
  display: grid;
  place-items: center;
`;
