import styled from 'styled-components';

import { IssueHeader } from 'components/IssueHeader';
import { useIssueList } from 'hooks/useIssueList';
import { ErrorComponent } from 'pages/ErrorComponent';

export type IssueType = {
  number: number;
  title: string;
  comments: number;
  created_at: string;
  body?: string;
  user: {
    login: string;
    avatar_url: string;
  };
};

const OWNER = 'facebook';
const REPO = 'react';
const AD_LOCATION = 5;

export const IssueList = () => {
  const { issues, isLoading, filterIssue, errorMessage } = useIssueList({
    owner: OWNER,
    repo: REPO,
    ad_nth: AD_LOCATION,
  });

  if (errorMessage) return <ErrorComponent error={errorMessage} />;

  if (!isLoading)
    return (
      <StyledContainer>
        <IssueHeader owner={OWNER} repo={REPO} />
        {issues && issues.map((issue, idx) => filterIssue(idx, issue))}
      </StyledContainer>
    );
  return <span>loading...</span>;
};

const StyledContainer = styled.div`
  display: grid;
  width: 500px;
`;
