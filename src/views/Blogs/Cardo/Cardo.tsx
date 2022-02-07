import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import classname from "classnames";

import styles from "../Blogs.scss";

import cardo_banner from "./cardo_banner.png";
import cardo_freecom1 from "./cardo_freecom_1.png";
import cardo_freecom2 from "./cardo_freecom_2.png";
import cardo_freecom3 from "./cardo_freecom_3.png";
import jbl_speakers from "./jbl_speakers.png";

function Cardo(props: WithTranslation) {
  return (
    <div className={styles.contentContainer}>
      <Helmet>
        <title>{props.t("title")}</title>
      </Helmet>
      <div className={styles.bannerContainer}>
        <img src={cardo_banner} />
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
        <div className={styles.textContainer}>
          <p className={classname(styles.subtitle, styles.indent)}>
            {props.t("blog_sub_title")}
          </p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("the_challenge")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("the_challenge_detail")}</p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("the_solution")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("the_solution_detail")}</p>
        </div>

        <div className={styles.doubleImageContainer}>
          <div>
            <img src={cardo_freecom1} />
          </div>
          <div>
            <img src={jbl_speakers} />
          </div>
        </div>

        <div className={styles.textContainer}>
          <p>{props.t("cardo_system_p1")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("cardo_system_p2")}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("finding_the_right")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("finding_the_right_detail_p1")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("finding_the_right_detail_p2")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("finding_the_right_detail_p3")}</p>
        </div>
        <div className={styles.singleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={cardo_freecom2} />
          </div>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("getting_to_work")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("getting_to_work_detail_p1")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("getting_to_work_detail_p2")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("getting_to_work_detail_p3")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("getting_to_work_detail_p4")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("getting_to_work_detail_p5")}</p>
        </div>
        <div className={styles.singleImageContainer}>
          <div className={styles.imageContainer}>
            <img src={cardo_freecom3} />
          </div>
        </div>
        <div className={styles.subtitle}>
          <p>{props.t("cardo_sees_results")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("cardo_sees_results_detail_p1")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("cardo_sees_results_detail_p2")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("cardo_sees_results_detail_p3")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("cardo_sees_results_detail_p4")}</p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("blogs_cardo_PR")(Cardo);
