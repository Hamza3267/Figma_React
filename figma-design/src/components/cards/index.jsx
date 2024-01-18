import React, { useState } from 'react';
import style from './card.module.scss';
import Fruit from '../../assets/images/fruit.png';
import Text from '../texts';
import Button from '../buttons';

const card = [
    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },
    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },

    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },

    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW'
    },

    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },

    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },

    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },
    {
        title: 'Crystal Agate Phone Grip',
        tittle: '18.99$',
        titttle: 'BUY NOW',
    },
];

const Card = () => {
    const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

    const handleButtonClick = (id) => {

        setClickedButtonIndex(id);
    };

    return (
        <>
            <div className={style.cardflex}>
                {card.map((e, index) => (
                    <div
                    className={`${style.border} ${clickedButtonIndex === index ? style.clickedCard : ''}`}
                    key={index}>
                        
                        <img src={Fruit} alt="" className={style.pic} />
                        <Text title={e.title} textClass={style.txt} />
                        <Text title={e.tittle} textClass={style.price} />
                        {console.log(clickedButtonIndex)}
                        <Button
                            title={e.titttle}
                            btnClass={style.button}
                            onClick={() => handleButtonClick(index)}
                        />
                    </div>

                ))}
            </div>
            <Button title={'view all'} btnClass={style.viewbutton} />
        </>
    );
};

export default Card;
