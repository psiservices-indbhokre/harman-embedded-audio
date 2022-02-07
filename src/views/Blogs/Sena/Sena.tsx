import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Card from "@src/views/common/Card/Card";
import styles from "../Blogs.scss";

import sena_banner from "./sena_banner.png";
import sena_product1 from "./product1.png";
import sena_product2 from "./product2.png";
import sena_product3 from "./product3.png";
import sena_product4 from "./product4.png";
import sena_product5 from "./product5.png";
import sena_product6 from "./product6.png";
import sena_product7 from "./product7.png";
import sena_banner2 from "./sena_banner2.png";

function Sena(props: WithTranslation) {
  return (
    <div className={styles.contentContainer}>
      <Helmet>
        <title>{props.t("title")}</title>
      </Helmet>
      <div className={styles.bannerContainer}>
        <img src={sena_banner} />
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
        <div className={styles.doubleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={sena_product1} />
          </div>
          <div className={styles.imageContainer}>
            <img src={sena_product2} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("sena_technology")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("each_product_in")}</p>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              src={`https://www.youtube.com/embed/TJLRD5zWrXg?rel=0&modestbranding=1`}
            />
          </div>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("sound_by_HK")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("the_quantum_series")}</p>
        </div>

        <div className={styles.doubleImageContainer}>
          <Card
            title={props.t("sena_50R")}
            image={sena_product3}
            description={props.t("sena_50R_detail")}
          />
          <Card
            title={props.t("sena_50C")}
            image={sena_product4}
            description={props.t("sena_50C_detail")}
          />
        </div>
        <div className={styles.doubleImageContainer}>
          <Card
            title={props.t("impulse")}
            image={sena_product5}
            description={props.t("impulse_detail")}
          />
          <Card
            title={props.t("stryker")}
            image={sena_product6}
            description={props.t("stryker_detail")}
          />
        </div>

        <div className={styles.singleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={sena_product7} />
          </div>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("new_sena_moto_app")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("new_sena_moto_app_detail")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("ext_warn")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("ext_warn_detail")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("eicma_2011")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("eicma_2011_detail")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("product_avail")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("product_avail_detail")}</p>
        </div>
        <div className={styles.singleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={sena_banner2} />
          </div>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("about_sena_tech")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("about_sena_tech_detail_p1")}</p>
          <p>{props.t("about_sena_tech_detail_p2")}</p>
          <p>{props.t("about_sena_tech_detail_p3")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("about_harman_international")}</p>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("about_harman_international_detail")}</p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("blogs_sena")(Sena);
