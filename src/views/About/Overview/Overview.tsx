import React from "react";
import { TopBanner } from "./TopBanner/TopBanner";
import { withTranslation, WithTranslation } from 'react-i18next';
import coreStyle from '@src/index.scss';
import style from './Overview.scss';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import hardware_ico from './ico_hardware.png';
import software_ico from './ico_software.png';
import proddesign_ico from './ico_productdesign.png';
import cobranding_ico from './ico_cobranding.png';
import bitmap from './Bitmap.jpg';
import bannerBg from '@src/assets/app_img_common/software_bottom_banner.jpg';

import Button from '@src/components/CustomButtons/Button.jsx';
import { Banner } from '@src/views/common/Banner/Banner';
import { PATHS } from '@src/modules/navigation/models';
import { Link } from 'react-router-dom';


class Overview extends React.Component<WithTranslation>{
    public render() {
        const { t } = this.props;
        return (
            <div className={style.container}>
                <Helmet>
                    <title>{this.props.t('title')}</title>
                    <meta name="description" content={this.props.t('description')} />
                </Helmet>
                <TopBanner t={this.props.t} />
                <div className={classname(coreStyle.container, style.heightFix)}>
                    <div className={style.mission}>
                        <h2 className={classname(coreStyle.fontLight, style.missionHeader)}>{t('at_harman_embedded')}</h2>

                        <div className={style.missionContent}>
                            <div className={style.missionImg}>
                                <img src={bitmap} />
                            </div>
                            <div className={classname(coreStyle.fontLight, style.missionText)}>
                                {t('our_years')}
                                <b>{t('good_reasons')}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner image={bannerBg} title={this.props.t('big_enough_to')} subtitle={this.props.t('from_startups')}
                    subtitleStyle={style.middleSubtitle} />
                <div className={style.solutionsBackground}>
                    <div className={coreStyle.container}>
                        <div className={style.solutions}>
                            <h2 className={classname(coreStyle.fontLight, style.solutionsHeader, coreStyle.wrap)}>{t('broad_experience')}</h2>

                            <h3 className={classname(coreStyle.fontLight, style.solutionsText)}>{t('todays_global')}</h3>
                            <div className={style.solutionsContainer}>
                                <div className={style.solutionsCard}>
                                    <div className={style.solutionsImg}>
                                        <img src={hardware_ico} />
                                    </div>
                                    <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('hardware')}</div>
                                </div>
                                <div className={style.solutionsCard}>
                                    <div className={style.solutionsImg}>
                                        <img src={software_ico} />
                                    </div>
                                    <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('software')}</div>
                                </div>
                                <div className={style.solutionsCard}>
                                    <div className={style.solutionsImg}>
                                        <img src={proddesign_ico} />
                                    </div>
                                    <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('product-design')}</div>
                                </div>
                                <div className={style.solutionsCard}>
                                    <div className={style.solutionsImg}>
                                        <img src={cobranding_ico} />
                                    </div>
                                    <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('co-branding')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={coreStyle.container}>
                    <div className={style.industries}>
                        <h2 className={classname(coreStyle.fontLight, style.industriesHeader, coreStyle.wrap)}>{t('industries')}</h2>

                        <h3 className={style.industriesText}>{t('our_talented_workforce')}</h3>
                        <div className={style.industriesContainer}>
                            <div className={classname(style.industriesImg, style.industriesConsumer)}>
                                {t('consumer_electronics')}
                            </div>
                            <div className={classname(style.industriesImg, style.industriesEnterprise)}>
                                {t('enterprise')}
                            </div>
                            {/* Removed on 02-Feb-2022
                                 <div className={classname(style.industriesImg, style.industriesRobotics)}>
                                {t('robotics')}
                            </div> */}
                            <div className={classname(style.industriesImg, style.industriesFitness)}>
                                {t('fitness')}
                            </div>
                            <div className={classname(style.industriesImg, style.industriesIot)}>
                                {t('internet_of_things')}
                            </div>
                            <div className={classname(style.industriesImg, style.industriesHealth)}>
                                {t('healthcare')}
                            </div>
                            <div className={classname(style.industriesImg, style.industriesIot)}>
                                {t('recreation')}
                            </div>
                            <div className={classname(style.industriesImg, style.industriesSafety)}>
                                {t('safety')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.readyBackground}>
                    <div className={coreStyle.container}>
                        <div className={style.ready}>
                            <div className={classname(coreStyle.fontLight, coreStyle.wrap, style.readyHeader)}>{t('ready_to_get')}</div>

                            <div className={style.readyText}>{t('our_talented_workforce2')}</div>
                            <Button color="Harman" component={Link} to={PATHS.CONTACT}>
                                <div className={coreStyle.buttonWhite}>
                                    {t('reach_out')}
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation('overview')(Overview);