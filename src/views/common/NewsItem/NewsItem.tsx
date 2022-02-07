import React, {ReactNode} from 'react';
import Button from "@src/components/CustomButtons/Button.jsx";
import * as coreStyles from '@src/index.scss';
import i18next from 'i18next';
import { Link } from 'react-router-dom';


import * as styles from './NewsItem.scss';

export interface NewsItemProps {
  readonly image: string;
  readonly category: string;
  readonly title: string;
  readonly content: string;
  readonly link: string;
  readonly target: string;

  readonly t: i18next.TFunction;
}

interface CustomLinkProps {
  target: string;
  link: string;
  children: ReactNode;
}

export function NewsItem(props: NewsItemProps) {
  return (
    <div className={styles.newsItem}>
      <div className={styles.imageContainer}>
        <CustomLink target={props.target} link={props.link}>
          <img src={props.image} />
          {/* Showing designs as of now 22 */}
        </CustomLink>   
        <div className={styles.category}>{props.category}</div>                  
      </div>   
      {/* <div className={styles.category}>{props.category}</div> */}
      <div className={styles.newsItemContent}>
        <CustomLink target={props.target} link={props.link}>
          <h4 className={styles.newsItemTitle}>{props.title}</h4>
        </CustomLink>
        <div className={styles.newsItemText}>{props.content}</div>
        <CustomLink target={props.target} link={props.link}>
          <Button color={'Harman'}>
            <span className={coreStyles.buttonWhite}>{props.t('read_more')}</span>
          </Button>
        </CustomLink>        
      </div>
    </div>
  );
}

function CustomLink(props: CustomLinkProps){
  return (
    <>
    {
      props.target ? 
      (
        <a href={props.link} target={props.target}>
          {props.children}
        </a>
      ) :
      (
        <Link to={props.link}>
          {props.children}
        </Link>
      )
    }
    </>
  );
}