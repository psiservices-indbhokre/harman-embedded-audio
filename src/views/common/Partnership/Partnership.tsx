import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import classname from "classnames";
import { Hidden } from "@material-ui/core";
import Carousel from "react-slick";
import withStyles, {
  StyledComponentProps
} from "@material-ui/core/styles/withStyles";

import * as styles from "./Partnership.scss";
import * as coreStyles from "@src/index.scss";
import carouselStyle from "@src/assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

import samsung from "./samsung.png";
import asus from "./asus.png";
import tcl from "./tcl.png";
import ms from "./ms.png";
import lenovo from "./lenovo.png";
// import dell from './dell.png';
import cisco from "./cisco.png";
// import motorola from './motorola.png';
import kt from "./kt.png";
import softbank from "./softbank.png";
import huawei from "./huawei.png";
import netgear from "./netgear.png";
import cardo from "./cardo.png";
import msc from "./msc.png";
import sharp from "./sharp.png";
import peloton from "./peloton.png";
import mi from "./mi.png";
import sena from "./sena.png";
import lovesac from "./lovesac.png";
import viewsonic from "./viewsonic.png";
import xgimi from "./xgimi.png";

interface Brand {
  img: string;
  width: number;
}

const brands: Brand[] = [
  { img: samsung, width: 175 },
  { img: asus, width: 124 },
  { img: tcl, width: 114 },
  { img: ms, width: 161 },
  { img: lenovo, width: 142 },
  { img: sena, width: 142 }, // Added on 02-Feb-2022
  // { img: dell, width: 82 }, // Removed
  { img: cisco, width: 124 },
  { img: viewsonic, width: 182 }, // Added on 02-Feb-2022
  // { img: motorola, width: 87 }, // Removed
  { img: kt, width: 72 },
  { img: softbank, width: 222 },
  { img: huawei, width: 66 },
  { img: netgear, width: 162 },
  { img: cardo, width: 97 },
  { img: msc, width: 150 },
  { img: sharp, width: 176 },
  { img: peloton, width: 84 },
  { img: mi, width: 82 }, // Added on 02-Feb-2022
  { img: lovesac, width: 112 }, // Added on 02-Feb-2022
  { img: xgimi, width: 122 } // Added on 02-Feb-2022
];

function Partnership(props: StyledComponentProps & WithTranslation) {
  let i = 0;
  const brandsByPages: Brand[][] = [];
  brandsByPages.push([]);
  brands.forEach(el => {
    if (i >= 6) {
      i = 0;
      brandsByPages.push([]);
    }
    brandsByPages[brandsByPages.length - 1].push(el);
    i++;
  });
  const customDots = () => <div className={styles.dot} />;
  const settings = {
    autoplaySpeed: 10000,
    customPaging: customDots,
    dotsClass: styles.dotsContainer,
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: styles.carousel
  };

  const { classes } = props;
  if (!classes) {
    return <div />;
  }
  return (
    <div className={classname(coreStyles.container, styles.container)}>
      <h2 className={classname(styles.title, coreStyles.fontLight)}>
        {props.t("partnership_section_title")}
      </h2>
      <h3 className={classname(styles.subtitle, coreStyles.fontLight)}>
        {props.t("partnership_section_subtitle")}
      </h3>
      <Hidden smDown>
        <div className={styles.brands}>
          {brands.map((brand, index) => {
            return (
              <div key={index} className={styles.brand}>
                <img src={brand.img} width={brand.width} />
              </div>
            );
          })}
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classname(classes.container, "brands-carousel")}>
          <Carousel {...settings}>
            {brandsByPages.map((page, pageIndex) => (
              <div key={pageIndex}>
                <div className={styles.brands}>
                  {page.map((brand, index) => (
                    <div key={pageIndex + "_" + index} className={styles.brand}>
                      <img src={brand.img} width={brand.width} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Hidden>
    </div>
  );
}

export default withTranslation("common")(
  withStyles(carouselStyle)(Partnership)
);
