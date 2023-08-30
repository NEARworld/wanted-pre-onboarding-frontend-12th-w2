import { useEffect, useState } from 'react';

import { getIssueList } from 'apis/config';
import { MemoizedAdvertisement } from 'components/Advertisement';
import { MemoizedIssue } from 'components/Issue';
import { IssueType } from 'pages/IssueList';

export const useIssueList = (target: { owner: string; repo: string; ad_nth: number }) => {
  const [issues, setIssues] = useState<IssueType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { owner, repo, ad_nth } = target;

  const filterIssue = (idx: number, issue: IssueType) => {
    const isAdLocation = (idx + 1) % ad_nth;
    if (isAdLocation) return <MemoizedIssue key={idx} {...issue} />;
    return <MemoizedAdvertisement key={idx} />;
  };

  useEffect(() => {
    setIsLoading(true);
    getIssueList({ owner, repo, page: 1 })
      .then(res => {
        const { status, data } = res;
        if (status) setIssues(data);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return {
    issues,
    isLoading,
    filterIssue,
  };
};
