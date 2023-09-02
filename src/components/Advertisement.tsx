import { memo } from 'react';

const Advertisement = () => {
  return (
    <a href='https://wanted.co.kr'>
      <img
        alt='advertisement'
        width='500px'
        height='100px'
        src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
      />
    </a>
  );
};

export const MemoizedAdvertisement = memo(Advertisement);
