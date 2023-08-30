import { useLocation } from 'react-router-dom';

import { IssueType } from 'pages/IssueList';

import { MemoizedIssue } from './Issue';

export const IssueDetail = () => {
  const navigateState = useLocation().state ?? 100;

  const validateState = (state: IssueType): state is IssueType => {
    if (!state) return false;
    return typeof state === 'object';
  };

  const { number, title, user, created_at, comments } = navigateState;

  if (validateState(navigateState))
    return (
      <MemoizedIssue
        number={number}
        title={title}
        user={user}
        created_at={created_at}
        comments={comments}
        cursor='inherit'
      />
    );
  return null;
};
