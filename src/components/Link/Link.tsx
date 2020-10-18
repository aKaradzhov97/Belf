import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styles from "./Link.module.scss";

type LinkVariation = 'outline' | 'solid';

interface IProps {
  children: React.ReactElement | string,
  variation: LinkVariation
}

export const Link = ({ children, variation }: IProps) => {
  return (
    <GatsbyLink to={"/"} className={variation === 'solid' ? `${styles.link} ${styles.solid}` : `${styles.link} ${styles.outlined}` }>
      {children}
    </GatsbyLink>
  );
};
