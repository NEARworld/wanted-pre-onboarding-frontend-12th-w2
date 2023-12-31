import { useEffect, useState } from 'react';

import { getIssueList } from 'apis/config';
import { MemoizedAdvertisement } from 'components/Advertisement';
import { MemoizedIssue } from 'components/Issue';
import { AD_LOCATION, IssueType, OWNER, REPO } from 'pages/IssueList';

type OctokitError = {
  status: 403 | 404 | 422;
};

export const useIssueList = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const filterIssue = (idx: number, issue: IssueType) => {
    const isAdLocation = (idx + 1) % AD_LOCATION;
    if (isAdLocation) return <MemoizedIssue key={idx} {...issue} />;
    return <MemoizedAdvertisement key={idx} />;
  };

  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= scrollableHeight) {
      setIsLoading(true);
      setPage(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getIssueList({ owner: OWNER, repo: REPO, page })
      .then(res => {
        if (res.status) setIssues(prevState => [...prevState, ...res.data]);
        setIsLoading(false);
      })
      .catch((error: OctokitError) => {
        if (error && typeof error === 'object' && 'status' in error) {
          setErrorMessage(
            {
              404: '찾고자하는 데이터가 없습니다.',
              403: 'API 요청 제한 횟수 초과로 인해 요청이 제한되었습니다.',
              422: '인증이 실패했거나 너무 많은 요청 시도가 있습니다.',
            }[error.status],
          );
        } else setErrorMessage('알 수 없는 네트워크 에러가 발생했습니다.');
      });
  }, [page]);

  return {
    issues,
    isLoading,
    filterIssue,
    errorMessage,
  };
};
