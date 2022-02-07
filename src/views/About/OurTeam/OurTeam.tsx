import React from "react";
import { withTranslation, WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import coreStyle from '@src/index.scss';
import style from './OurTeam.scss';
import classname from 'classnames';
import bitmap from './Our-Team_Header.jpg';

import Button from '@src/components/CustomButtons/Button.jsx';
import { PATHS } from '@src/modules/navigation/models';
import { Link } from 'react-router-dom';
import { ImageBanner } from '@src/views/common/ImageBanner/ImageBanner';
import photos from './Photos/Photos';
import NameCard from './NameCard/NameCard';

const team = [
    { name: "Johnny Williams", position: "VP & GM" },
    { name: "Bill Esrey", position: "Senior Director Global Sales" },
    { name: "Sherry Chen", position: "Senior Director of Operations and China Sales" },
    { name: "Honta Tu", position: "Sales Director China" },
    { name: "Bruce Ryan", position: "Engineering Director Northridge" },
    { name: "Nikhil Rathod", position: "Global Product Manager" }, 
    { name: "Prince Wang", position: "Engineering Director Shenzhen" },
    { name: "Peter Song", position: "Director Customer Program Management" },
    { name: "Oliver Bourdeau", position: "Sr. Account Manager " },
    { name: "Thomas Chung", position: "Account Manager Korea" },
    { name: "Dion Chua", position: "Account Manager APAC" },
    { name: "Kamal Khillo", position: "Key Account Manager" },
    { name: "Joe Milano", position: "Strategic Account Manager" },
    { name: "Jeff Adler", position: "Global Account Manager" },
    { name: "Doug Schumacher", position: "Account Manager USA" },
    { name: "Jeffery Benedetti", position: "Global Sales Operations" },
    { name: "Mark Xing", position: "Regional Sales Manager China" },
    { name: "Julie Zhu", position: "Sales Lead China" },
    { name: "Victor Du", position: "Regional Sales Manager China" },
    { name: "Hebee He", position: "Sales Lead China" },
    { name: "Summer Yu", position: "Sr. Sales Coordinator China" }
];

class Overview extends React.Component<WithTranslation>{
    public render() {
        const { t } = this.props;
        return (
            <div className={style.container}>
                <Helmet>
                    <title>{t('title')}</title>
                </Helmet>
                <ImageBanner image={bitmap} title={t('our_team_members')} subtitle={t('get_to_know')} />

                <div className={classname(style.industriesBackground, style.displayFlexColoumn)}>
                    <div className={classname(style.industries, style.displayFlexColoumn)}>
                        <h2 className={classname(coreStyle.fontLight, style.industriesHeader, coreStyle.wrap)}>{t('meat_our_team')}</h2>
                        <div className={classname(style.industriesContainer, style.displayFlexRow)}>
                            {team.map((item, key) => <NameCard key={key} name={item.name} position={item.position} image={photos[item.name]} />)}
                        </div>
                    </div>
                </div>
                <div className={classname(style.readyBackground, style.displayFlexColoumn)}>
                    <div className={classname(style.ready, style.displayFlexColoumn)}>
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
        )
    }
}

export default withTranslation('ourTeam')(Overview);