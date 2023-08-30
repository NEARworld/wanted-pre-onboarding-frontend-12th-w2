import { FC, memo } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { type Issue } from 'pages/IssueList';

const Issue: FC<Issue> = ({ number, title, user, created_at, comments }) => {
  const navigate = useNavigate();
  const navigateToIssueDetail = () =>
    navigate(`${number}`, { state: { number, title, user, created_at, comments } });
  return (
    <StyledContainer onClick={navigateToIssueDetail}>
      <div>
        <StyledHeader>
          <span>#{number}</span>
          <span>{title}</span>
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px black solid;
  cursor: pointer;
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
const StyledBody = styled.div`
  padding: 10px;
`;
const StyledCommentCount = styled.div`
  display: grid;
  place-items: center;
`;
