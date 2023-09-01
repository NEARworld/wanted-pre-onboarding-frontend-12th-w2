import { FC } from 'react';

type Props = {
  error: string;
};

export const ErrorComponent: FC<Props> = ({ error }) => {
  return <div>{error}</div>;
};
