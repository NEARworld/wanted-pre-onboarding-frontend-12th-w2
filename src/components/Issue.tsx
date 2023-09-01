import { CSSProperties, FC, memo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IssueType } from 'pages/IssueList';

type Props = IssueType & {
  cursor?: CSSProperties['cursor'];
};

export const getKoreanDateFormat = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;
};

const Issue: FC<Props> = ({
  number,
  title,
  user,
  created_at,
  comments,
  body,
  cursor = 'pointer',
}) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const navigateToIssueDetail = () =>
    pathname === '/' &&
    navigate(`${number}`, { state: { number, title, user, created_at, comments, body } });

  return (
    <StyledContainer onClick={navigateToIssueDetail} cursor={cursor}>
      <div>
        <StyledHeader>
          <span>#{number}</span>
          <StyledTitle>{title}</StyledTitle>
        </StyledHeader>
        <StyledBody>
          <span>작성자: {user.login}</span>
          <span>작성일: {getKoreanDateFormat(created_at)}</span>
        </StyledBody>
      </div>
      <StyledCommentCount>
        <span>코멘트: {comments}</span>
      </StyledCommentCount>
    </StyledContainer>
  );
};

export const MemoizedIssue = memo(Issue);

const StyledContainer = styled.div<{ cursor: CSSProperties['cursor'] }>`
  width: 500px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px black solid;
  cursor: ${props => props.cursor};
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
const StyledTitle = styled.span`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledBody = styled.div`
  padding: 10px;
`;
const StyledCommentCount = styled.div`
  display: grid;
  place-items: center;
`;
