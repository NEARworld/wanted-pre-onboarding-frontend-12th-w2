import { useLocation } from 'react-router-dom';

import { type Issue } from 'pages/IssueList';

import { MemoizedIssue } from './Issue';

export const IssueDetail = () => {
  const navigateState = useLocation().state ?? 100;

  const validateState = (state: Issue): state is Issue => {
    if (!state) return false;
    return typeof state === 'object';
  };

  const { number, title, user, created_at, comments } = navigateState;

  if (validateState(navigateState))
    return (
      <div>
        <MemoizedIssue
          number={number}
          title={title}
          user={user}
          created_at={created_at}
          comments={comments}
        />
      </div>
    );
  return null;
};
