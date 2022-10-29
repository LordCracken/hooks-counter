import { FC } from 'react';

import { ICard } from '../interfaces';
import classes from './Card.module.css';

const Card: FC<ICard> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
