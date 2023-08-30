import { FC } from 'react';

import styled from 'styled-components';

type Props = {
  owner: string;
  repo: string;
};

export const IssueHeader: FC<Props> = ({ owner, repo }) => {
  return (
    <StyledTitle>
      {owner}/{repo}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 30px;
`;
