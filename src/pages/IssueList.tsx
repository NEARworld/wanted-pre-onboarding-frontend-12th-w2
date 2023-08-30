import styled from 'styled-components';

import { MemoizedAdvertisement } from 'components/Advertisement';
import { MemoizedIssue } from 'components/Issue';
import { IssueHeader } from 'components/IssueHeader';

export const IssueList = () => {
  const checkIdxForAd = (idx: number) => (idx + 1) % 5;

  return (
    <StyledContainer>
      <IssueHeader />
      {Array.from({ length: 20 }, () => ({
        id: 1,
        title: 'my issue title',
        author: 'nearworld',
        date: new Date(),
        comments: 100,
      })).map(({ id, title, author, date, comments }, idx) =>
        checkIdxForAd(idx) ? (
          <MemoizedIssue
            key={idx}
            id={id}
            title={title}
            author={author}
            date={date}
            comments={comments}
          />
        ) : (
          <MemoizedAdvertisement />
        ),
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  width: 500px;
  margin: 0 auto;
`;
