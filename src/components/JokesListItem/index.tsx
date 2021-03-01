import { memo } from 'react';
import { JokesListItemProps } from '../../types';
import './styles.scss';

const JokesListItem = ({ joke, ...rest }: JokesListItemProps) => {
  return <li className={'list-item'} {...rest}>{joke}</li>;
};

export default memo(JokesListItem);
