import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { getIssueList } from 'apis/config';
import { MemoizedAdvertisement } from 'components/Advertisement';
import { MemoizedIssue } from 'components/Issue';
import { IssueHeader } from 'components/IssueHeader';

export type Issue = {
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
  const [issues, setIssues] = useState<Issue[]>();

  useEffect(() => {
    getIssueList({ owner: OWNER, repo: REPO, page: 1 })
      .then(res => {
        const { status, data } = res;
        if (status) setIssues(data);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log(issues);
  }, [issues]);

  const checkIdxForAd = (idx: number) => (idx + 1) % 5;

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
};

const StyledContainer = styled.div`
  display: grid;
  width: 500px;
`;
