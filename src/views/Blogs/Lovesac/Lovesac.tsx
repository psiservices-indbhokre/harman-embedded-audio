import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import styles from "../Blogs.scss";

import lovesac_banner from "./lovesac_banner.png";
import lovesac_product1 from "./lovesac_product1.png";
import lovesac_product2 from "./lovesac_product2.png";
import RemoveIcon from "@material-ui/icons/RemoveSharp";

function Lovesac(props: WithTranslation) {
  return (
    <div className={styles.contentContainer}>
      <Helmet>
        <title>{props.t("title")}</title>
      </Helmet>
      <div className={styles.bannerContainer}>
        <img src={lovesac_banner} />
      </div>
      <div className={styles.articleContainer}>
        <div className={styles.releaseDateContainer}>
          <p>
            <span>{props.t("press_release_date_key")}</span>
            <span>
              <strong>{props.t("press_release_date_value")}</strong>
            </span>
          </p>
        </div>
        <div className={styles.title}>{props.t("blog_title")}</div>

        <div className={styles.doubleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={lovesac_product1} />
          </div>
          <div className={styles.imageContainer}>
            <img src={lovesac_product2} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("the_lovesac_comp")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("the_sys_includes_twosound")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("partnering_with_harman_title")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            <RemoveIcon className={styles.iconCenter} />
            {props.t("forbes_magazine")}
          </p>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              src={`https://www.youtube.com/embed/d1tIRpP385E?rel=0&modestbranding=1`}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("lovesac_holds_patents")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("customers_can_constrol")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("we_wanted_to_give")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("customers_can_visit")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("about_the_lovesac_cmp")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("about_the_lovesac_cmp_detail")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("about_harman_international")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("about_harman_international_detail")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("links")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("forbes_maganize_title")}</p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("blogs_lovesac_PR")(Lovesac);
