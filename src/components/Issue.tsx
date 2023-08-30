import { FC, memo } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export type Props = {
  id: number;
  title: string;
  author: string;
  date: Date;
  comments: number;
};

const Issue: FC<Props> = ({ id, title, author, date, comments }) => {
  const navigate = useNavigate();
  const navigateToIssueDetail = () =>
    navigate(`${id}`, { state: { id, title, author, date, comments } });
  return (
    <StyledContainer onClick={navigateToIssueDetail}>
      <div>
        <StyledHeader>
          <span>#{id}</span>
          <span>{title}</span>
        </StyledHeader>
        <StyledBody>
          <span>작성자: {author}</span>
          <span>작성일: {date.toLocaleDateString()}</span>
        </StyledBody>
      </div>
      <StyledCommentCount>
        <span>코멘트: {comments}</span>
      </StyledCommentCount>
    </StyledContainer>
  );
};

export const MemoizedIssue = memo(Issue);

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px black solid;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  gap: 10px;
  font-size: 20px;
  padding: 10px;
`;
const StyledBody = styled.div`
  padding: 10px;
`;
const StyledCommentCount = styled.div`
  display: grid;
  place-items: center;
`;
