import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import News from '@src/views/common/News/News';
import { ImageBanner } from '../common/ImageBanner/ImageBanner';

import header from './CoBranding_Header.jpg';

import logo from './Collage.jpg';

import improveImage1 from '@src/assets/app_img_common/background_1.png';
import improveImage2 from '@src/assets/app_img_common/background_2.png';
import improveImage3 from '@src/assets/app_img_common/background_3.jpg';

import jbl_logo from './jbl_logo.jpg';
import jbl_image from './jbl_image.jpg';
import harman_kardon_logo from './harman_kardon_logo.jpg';
import harman_kardon_image from './harman_kardon_image.jpg';
import infinity_logo from './infinity_logo.jpg';
import infinity_image from './infinity_image.jpg';

import style from './CoBranding.scss';
import coreStyle from '@src/index.scss';
// import Button from '@src/components/CustomButtons/Button.jsx';
// import { PATHS } from '@src/modules/navigation/models';
// import { Link } from 'react-router-dom';
// import { Hidden } from '@material-ui/core';

class CoBranding extends React.Component<WithTranslation> {
    public render() {
        const { t } = this.props;
        return (
            <div className={style.displayFlexColoumn}>
                <Helmet>
                    <title>{t('title')}</title>
                </Helmet>
                <ImageBanner title={t('more_than_a_name')} subtitle={t('from_stunning_sound')}
                    image={header} />
                <div className={classname(style.missionContainer, coreStyle.container)}>
                    <div className={style.mission}>
                        <h2 className={classname(coreStyle.fontLight, style.missionHeader)}>{t('make_a_bigger')}</h2>

                        <div className={style.missionImg}>
                            <img src={logo} />
                        </div>
                        <div className={classname(style.missionText, coreStyle.fontLight, coreStyle.wrap)}>
                            <div>{t('HARMAN_offers')}</div>
                        </div>
                    </div>
                </div>
                <div className={classname(style.improveBackground, style.displayFlexColoumn)}>
                    <div className={classname(coreStyle.container, style.improve)}>
                        <div>
                            <h2 className={classname(coreStyle.fontLight, style.improveHeader, coreStyle.wrap)}>{t('improve_your_positioning')}</h2>

                            <h3 className={classname(coreStyle.fontLight, style.improveText)}>{t('from_mesmerizing_sound')}</h3>
                            <div className={style.improveContainer}>
                                <div className={classname(style.displayFlexColoumn, style.improveCard, coreStyle.wrap)}>
                                    <img className={style.improveImg} src={improveImage1} />
                                    <div className={classname(style.displayFlexRow, style.improveCardText, coreStyle.fontRegular)}>{t('excellent_differentiator')}</div>
                                </div>
                                <div className={classname(style.displayFlexColoumn, style.improveCard, coreStyle.wrap)}>
                                    <img className={style.improveImg} src={improveImage2} />
                                    <div className={classname(style.displayFlexRow, style.improveCardText, coreStyle.fontRegular)}>{t('increase_consumer')}</div>
                                </div>
                                <div className={classname(style.displayFlexColoumn, style.improveCard, coreStyle.wrap)}>
                                    <img className={style.improveImg} src={improveImage3} />
                                    <div className={classname(style.displayFlexRow, style.improveCardText, coreStyle.fontRegular)}>{t('inbox_accessories')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={coreStyle.container}>
                    <div>
                        <h2 className={classname(coreStyle.fontLight, style.videoTitle)}>{t('video_title')}</h2>
                        <div>
                            <div className={style.takeLook}>
                                <div className={style.takeLookImg}>
                                    <img src={jbl_image} />
                                </div>
                                <div className={style.takeLookText}>
                                    <img src={jbl_logo} />
                                    <div>{t('sound_by_jbl')}</div>
                                </div>
                            </div>

                            <div className={style.takeLook}>														
                                <div className={style.takeLookText}>
                                    <img src={harman_kardon_logo} />
                                    <div>{t('sound_by_harman_kardon')}</div>
                                </div>
                                <div className={style.takeLookImg}>
                                    <img src={harman_kardon_image} />
                                </div>
                            </div>

                            <div className={style.takeLook}>
                                <div className={style.takeLookImg}>
                                    <img src={infinity_image} />
                                </div>
                                <div className={style.takeLookText}>
                                    <img src={infinity_logo} />
                                    <div>{t('sound_by_infinity')}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <News />
            </div >
        );
    }
}

export default withTranslation('co-branding')(CoBranding);