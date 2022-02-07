import React from "react";
// import i18next from 'react-i18next';
// import i18next from 'i18next';
// react component for creating beautiful carousel
import Carousel from "react-slick";
import styles from './BasicCarousel.scss';
// core components
// import coreStyles from '@src/index.scss';

import classname from 'classnames';

import arrow from './arrow.png'
// import { type } from "os";

interface Props {
  children: JSX.Element[]
	propSettings?: typeof configurableSettings
};

const customDots = () => <div className={styles.dot} />

const defaultSettings = {
	customPaging: customDots,
	dotsClass: styles.dotsContainer,	
	dots: true,
	fade: false,
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
};

const configurableSettings = {
	dots: true,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={classname(styles.navArrow, styles.nextArrow)}
      onClick={onClick}
    >
			<img src={arrow} />
		</div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={classname(styles.navArrow, styles.prevArrow)}
      onClick={onClick}
    >
			<img src={arrow} />
		</div>
  );
}

export function BasicCarousel(props: Props) {
	const { children, propSettings } = props;
	const settings = {...defaultSettings, ...propSettings}
	return (
		<div className={classname('basic-carousel')}>
			<Carousel {...settings}>
				{ children }
			</Carousel>
		</div>
	)
}

export default BasicCarousel;