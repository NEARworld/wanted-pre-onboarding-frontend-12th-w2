import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { IssueType } from 'pages/IssueList';

import { MemoizedIssue } from './Issue';

export const IssueDetail = () => {
  const navigateState = useLocation().state ?? 100;

  const validateState = (state: IssueType): state is IssueType => {
    if (!state) return false;
    return typeof state === 'object';
  };

  if (validateState(navigateState)) {
    const { number, title, user, created_at, comments } = navigateState;

    return (
      <StyledContainer>
        <img width='100' height='100' src={user.avatar_url} />
        <MemoizedIssue
          number={number}
          title={title}
          user={user}
          created_at={created_at}
          comments={comments}
          cursor='inherit'
        />
      </StyledContainer>
    );
  }
  return null;
};

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
