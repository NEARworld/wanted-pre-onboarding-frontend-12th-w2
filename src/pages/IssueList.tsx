import styled from 'styled-components';

import { IssueHeader } from 'components/IssueHeader';
import { Loading } from 'components/Loading';
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

export const OWNER = 'facebook';
export const REPO = 'react';
const AD_LOCATION = 5;

export const IssueList = () => {
  const { issues, isLoading, filterIssue, errorMessage } = useIssueList({
    owner: OWNER,
    repo: REPO,
    ad_nth: AD_LOCATION,
  });

  if (errorMessage) return <ErrorComponent error={errorMessage} />;

  if (issues?.length !== 0)
    return (
      <StyledContainer>
        <IssueHeader owner={OWNER} repo={REPO} />
        {issues && issues.map((issue, idx) => filterIssue(idx, issue))}
        {isLoading && <Loading />}
      </StyledContainer>
    );
  return <span>loading...</span>;
};

const StyledContainer = styled.div`
  display: grid;
  width: 500px;
`;
