import { createBrowserRouter } from 'react-router-dom';

import { IssueDetail } from 'components/IssueDetail';
import { IssueList } from 'pages/IssueList';

export const router = createBrowserRouter([
  {
    path: '',
    element: <IssueList />,
  },
  {
    path: ':id',
    element: <IssueDetail />,
  },
]);
