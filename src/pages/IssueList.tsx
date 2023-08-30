import styled from 'styled-components';

import { MemoizedAdvertisement } from 'components/Advertisement';
import { MemoizedIssue } from 'components/Issue';
import { IssueHeader } from 'components/IssueHeader';
import { useIssueList } from 'hooks/useIssueList';

export type IssueType = {
  number: number;
  title: string;
  comments: number;
  created_at: string;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
};

const OWNER = 'facebook';
const REPO = 'react';
const AD_LOCATION = 5;

export const IssueList = () => {
  const { issues, isLoading } = useIssueList({ owner: OWNER, repo: REPO });

  const filterIssue = (idx: number, issue: IssueType) => {
    const isAdLocation = !((idx + 1) % AD_LOCATION);
    if (isAdLocation) return <MemoizedIssue key={idx} {...issue} />;
    return <MemoizedAdvertisement key={idx} />;
  };

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
