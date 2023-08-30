import { useEffect, useState } from 'react';

import { getIssueList } from 'apis/config';
import { IssueType } from 'pages/IssueList';

export const useIssueList = (target: { owner: string; repo: string }) => {
  const [issues, setIssues] = useState<IssueType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { owner, repo } = target;

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
  };
};
