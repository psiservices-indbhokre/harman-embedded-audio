import React, { useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
// import VideoBanner from '@src/views/common/VideoBanner/VideoBanner';
import { HeaderBanner } from "@src/views/common/HeaderBanner/HeaderBanner";
import classname from 'classnames';
import { Hidden } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import Button from '@src/components/CustomButtons/Button.jsx';

// import * as clip from './Sonique.mp4';

// import * as background from './img_banner_sonique_mobile.jpg';
// import * as playButton from './ico_play_media_opc.png';
import bannerBackground from './Sonique_Header.png';
import bannerLogo from './Sonique_logo.png';
import logo from './Bitmap.jpg';
import sonique from './sonique.png';
import wave from './wave.png';
import line from './line.png';
import alexa from './alexa.png';
import google from './google.png';
import siri from './siri.png';
import cortana from './cortana.png';
import ibm from './ibm.png';
import baidu from './baidu.png';

import style from './Sonique.scss';
import coreStyle from '@src/index.scss';
import { Link } from 'react-router-dom';
import { PATHS } from '@src/modules/navigation/models';
import DownloadPopup from '@src/views/common/DownloadPopup/DownloadPopup';

import { isIE } from '@src/browserDetector.jsx';

function Sonique(props: WithTranslation) {
    const { t } = props;
    const [opened, setOpened] = useState(false);

    function open() {
        setOpened(true);
    }

    function close() {
        setOpened(false);
    }

    return (
        <div className={style.displayFlexColoumn}>
            <Helmet>
                <title>{props.t('title')}</title>
                <meta name="description" content={props.t('description')} />
            </Helmet>
            <DownloadPopup url='https://goembed.harman.com/l/273722/2019-05-18/3ymzv38' opened={opened} onClose={close} />
						<HeaderBanner backgroundImage={bannerBackground} logoImage={bannerLogo} sublabel={props.t("experience_the_new")} />
            {/* <div className={style.video}>
                <VideoBanner clips={[clip]} image={background} title={t('better_interaction')}
                    subtitle={t('get_a_leading')} playImage={playButton} overlayStyle={style.overlay}
                    youtubeId='XURzXYlMybw' />
                <Hidden smDown><img src={sonique} /></Hidden>
            </div> */}
            <div className={classname(style.soniqueBackground, style.displayFlexColoumn)}>
                <div className={style.sonique}>
                    <div className={coreStyle.container}>
                        <h2 className={classname(coreStyle.fontLight, style.soniqueHeader, coreStyle.wrap)}>{t('sonique_is_the_total')}</h2>

                        <h3 className={classname(coreStyle.fontLight, style.soniqueText)}>{t('less_use_of')}</h3>
                    </div>
                    <div className={style.introductionContainer}>
                        <div className={style.introductionGrid}>
                            <div className={style.introductionImageContainer}>
                                <div>
                                    <img className={style.introductionInfoImg} src={logo} />
                                    <img className={style.soniqueLogo} src={sonique} />
                                </div>
                            </div>
                            <div className={style.introductionContentContainer}>
                                <div className={classname(coreStyle.fontLight, style.soniqueSmallHeader)}>{t('quality_flexibility_reputation')}</div>
                                <div className={classname(coreStyle.fontLight, style.soniqueDescription)}>{t('from_customizable_microphone')}</div>
                                <div className={style.soniqueList}>
                                    <div className={coreStyle.fontMedium}>{t('customizable_microphone')}</div>
                                    <li className={coreStyle.fontLight}>{t('optimized_for')}</li>
                                    <div className={coreStyle.fontMedium}>{t('software_algorithms')}</div>
                                    <li className={coreStyle.fontLight}>{t('dynamic_beamforming')}</li>
                                    <li className={coreStyle.fontLight}>{t('dynamic_beamforming1')}</li>
                                    <li className={coreStyle.fontLight}>{t('dynamic_beamforming2')}</li>
                                    <div className={coreStyle.fontMedium}>{t('systems_integration')}</div>
                                    <li className={coreStyle.fontLight}>{t('full_stack_integration')}</li>
                                    <li className={coreStyle.fontLight}>{t('full_stack_integration1')}</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
						<div className={coreStyle.container}>
							<div className={style.videoContainer}>
								<div className={style.videoSingle}>
										<div>
												<div>
														<iframe height="100%" width="100%"  src={`https://www.youtube.com/embed/XURzXYlMybw?rel=0&modestbranding=1&autoplay=0`}
															allowFullScreen frameBorder="0" />
												</div>
										</div>
								</div>
							</div>  
						</div>

            <div className={classname(style.solutionsBackground, style.displayFlexColoumn)}>
                <div className={classname(style.displayFlexColoumn, style.solutions)}>
                    <div className={coreStyle.container}>
                        <h2 className={classname(coreStyle.fontLight, style.solutionsHeader, coreStyle.wrap)}>{t('solutions_for_every')}</h2>

                        <Hidden mdUp>
                            <h3 className={classname(coreStyle.fontRegular, style.solutionsText)}>{t('sonique_offers_three')}</h3>
                        </Hidden>
                        <Hidden smDown>
                            <h3 className={classname(coreStyle.fontLight, style.solutionsText)}>{t('sonique_offers_three')}</h3>
                        </Hidden>
                    </div>
                    <div className={classname(style.displayFlexRow, style.solutionsContainer)}>
                        <div className={classname(style.displayFlexColoumn, style.solutionsCard, coreStyle.wrap)}>
                            <h4 className={classname(coreStyle.fontRegular, style.solutionsCardTitle)}>{t('threemic')}</h4>
                            <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('built_for_home')}</div>
                        </div>
                        <div className={classname(style.displayFlexColoumn, style.solutionsCard, coreStyle.wrap)}>
                            <h4 className={classname(coreStyle.fontRegular, style.solutionsCardTitle)}>{t('fourmic')}</h4>
                            <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('designed_for')}</div>
                        </div>
                        <div className={classname(style.displayFlexColoumn, style.solutionsCard, coreStyle.wrap)}>
                            <h4 className={classname(coreStyle.fontRegular, style.solutionsCardTitle)}>{t('sevenmic')}</h4>
                            <div className={classname(style.solutionsCardText, coreStyle.fontRegular)}>{t('made_for_high')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classname(style.displayFlexColoumn, style.solutionsBottomBackground)}>
                <div className={coreStyle.container}>
                    <div className={classname(style.displayFlexRow, style.solutionsBottomContainer)}>
                        <div className={classname(style.displayFlexColoumn, style.solutionsBottomCard, coreStyle.wrap)}>
                            <div className={classname(coreStyle.fontLight, style.solutionsBottomCardTitle)}>{t('natural_voice_engine')}</div>
                            <div className={classname(coreStyle.fontLight, style.solutionsBottomCardText)}>{t('providesfullstack')}</div>
                        </div>
                        <div className={classname(style.displayFlexColoumn, style.solutionsBottomCard, coreStyle.wrap)}>
                            <div className={classname(coreStyle.fontLight, style.solutionsBottomCardTitle)}>{t('over_the_air')}</div>
                            <div className={classname(coreStyle.fontLight, style.solutionsBottomCardText)}>{t('OTA_updatescapability')}</div>
                        </div>
                    </div>
                    <div className={classname(style.displayFlexColoumn, style.diagram)}>
                        <div className={classname(coreStyle.fontLight, style.diagramHeader, coreStyle.wrap)}>{t('soniques_flexible')}</div>
                        <div className={classname(style.displayFlexColoumn, style.waveContainer)}>
                            <img src={wave} className={classname(style.wave, { [style.waveIe]: isIE })} />
                            <div className={classname(coreStyle.fontLight, style.diagramText)}>{t('natural_voice_engine')}</div>
                            <img src={line} className={style.diagramArrow} />
                            <div className={style.diagramBottom}>
                                <div><img src={alexa} className={style.alexa} /></div>
                                <div><img src={google} className={style.google} /></div>
                                <div><img src={siri} className={style.siri} /></div>
                                <div><img src={cortana} className={style.cortana} /></div>
                                <div><img src={ibm} className={style.ibm} /></div>
                                <div><img src={baidu} className={style.baidu} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classname(style.readyBackground, style.displayFlexColoumn)}>
                <div className={classname(style.ready, style.displayFlexColoumn)}>
                    <div className={classname(coreStyle.fontLight, coreStyle.wrap, style.readyHeader)}>{t('from_concept_to_product')}</div>
                    <div className={style.buttonsContainer}>
                        <Button color="HarmanTransparent" onClick={open}>
                            <div className={classname(coreStyle.buttonWhite, coreStyle.fontRegular, style.button)}>
                                {t('download_sonique')}
                            </div>
                        </Button>
                        <Button color="HarmanTransparent" component={Link} to={PATHS.OVERVIEW} underline='none'>
                            <div className={classname(coreStyle.buttonWhite, coreStyle.fontRegular, style.button)}>
                                {t('learn_more')}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation('sonique')(Sonique);