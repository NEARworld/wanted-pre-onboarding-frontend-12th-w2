import { useLocation } from 'react-router-dom';

import { MemoizedIssue, Props as IssueProps } from './Issue';

export const IssueDetail = () => {
  const navigateState = useLocation().state ?? 100;

  const validateState = (state: IssueProps): state is IssueProps => {
    if (!state) return false;
    return typeof state === 'object';
  };

  const { id, title, author, date, comments } = navigateState as IssueProps;

  if (validateState(navigateState))
    return (
      <div>
        <MemoizedIssue id={id} title={title} author={author} date={date} comments={comments} />
      </div>
    );
  return null;
};
