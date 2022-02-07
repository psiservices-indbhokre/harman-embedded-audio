import React from 'react';
import style from './NameCard.scss';
import coreStyle from '@src/index.scss';
import classname from 'classnames';

export default function NameCard({ ...props }) {
    return (
        <div className={props.name && style.container}>
            <div className={style.img}>
                <img src={props.image} />
            </div>
            <h4 className={classname(style.name, coreStyle.fontRegular)}>{props.name}</h4>
            <div className={classname(style.position, coreStyle.fontRegular)}>{props.position}</div>
        </div>
    )
}