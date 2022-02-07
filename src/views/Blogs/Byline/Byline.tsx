import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import classname from "classnames";
import { Banner } from "@src/views/common/Banner/Banner";
import Button from "@src/components/CustomButtons/Button.jsx";
import bottomBg from "@src/assets/app_img_common/software_bottom_banner.jpg";
import styles from "../Blogs.scss";
import { Link } from "react-router-dom";
import { PATHS } from "@src/modules/navigation/models";
import byline_banner from "./byline_banner.png";
import coreStyles from "@src/index.scss";

function Byline(props: WithTranslation) {
  return (
    <div className={styles.contentContainer}>
      <Helmet>
        <title>{props.t("title")}</title>
      </Helmet>
      <div className={styles.bannerContainer}>
        <img src={byline_banner} />
      </div>
      <div className={styles.articleContainer}>
        <div className={styles.releaseDateContainer}>
          <p>
            <span>{props.t("byline_article_label")}</span>
          </p>
        </div>
        <div className={styles.title}>{props.t("blogs_title")}</div>
        <div className={styles.textContainer}>
          <p className={classname(styles.subtitle, styles.indent)}>
            {props.t("blogs_sub_title")}
          </p>
        </div>

        <div className={styles.subtitle}>
          <p>{props.t("finding_the_right_fit")}</p>
        </div>
        <div className={styles.textContainer}>
          <p>{props.t("as_voice_tech_details")}</p>
        </div>
        <div className={styles.textContainer}>
          {props.t("read_more")}:
          <div className={styles.subtitle}>
            <p>{props.t("finding_the_right_fit")}</p>
          </div>
        </div>
      </div>
      <Banner
        title={props.t("ensure_accurate")}
        image={bottomBg}
        subtitle={props.t("discover_how")}
        bottomContent={
          <div className={styles.buttons}>
            <Button
              color={"HarmanTransparent"}
              component={Link}
              to={PATHS.CONTACT}
              underline={"none"}
            >
              <span className={coreStyles.buttonWhite}>
                {props.t("contact_us")}
              </span>
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default withTranslation("blogs_byline")(Byline);
