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
  user: {
    login: string;
    avatar_url: string;
  };
};

const OWNER = 'facebook';
const REPO = 'react';

export const IssueList = () => {
  const { issues, isLoading } = useIssueList({ owner: OWNER, repo: REPO });
  const checkIdxForAd = (idx: number) => (idx + 1) % 5;

  if (!isLoading)
    return (
      <StyledContainer>
        <IssueHeader owner={OWNER} repo={REPO} />
        {issues &&
          issues.map(({ number, title, user, created_at, comments }, idx) =>
            checkIdxForAd(idx) ? (
              <MemoizedIssue
                key={idx}
                number={number}
                title={title}
                user={user}
                created_at={created_at}
                comments={comments}
              />
            ) : (
              <MemoizedAdvertisement key={idx} />
            ),
          )}
      </StyledContainer>
    );
  return <span>loading...</span>;
};

const StyledContainer = styled.div`
  display: grid;
  width: 500px;
`;
