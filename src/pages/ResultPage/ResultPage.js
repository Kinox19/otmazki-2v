import React, { useState } from 'react'
import s from './ResultPage.module.scss'
import { Footer } from '../Shared/Footer/Footer'
import { Header } from '../Shared/Header/Header'
import style from '../Shared/Button_whiteBg/Button__whiteBg.module.scss'
import mod from '../Shared/Button_whiteBg/Button__whiteBg_result.module.scss'
import infoIcon from '../../assets/images/Result/icons/info-icon.png'

export const ResultPage = () => {
  return (
    <div className={s.Result__container}>
        <Header/>
        <button className={s.Result__AdviseCopout}>Предложить свою отмазку</button>
      <div className={s.Result__content}>

        <div className={s.Result__contenContainer}>
            <img className={s.Result__icon} src={infoIcon} alt='info' title='Обращаем ваше внимание, что команда otmazki очень дружелюбная и не хочет никого оскорбить.'/>

            <p className={s.Result__otmazka}>Я не купил собачке корм, потому что в магазине меня обманули и продали только шоколадки и пиво :(</p>

            <button className={s.Result__copy}>Скопировать отмазку</button>

            <button className={ [style["Button__whiteBg"], mod["Button__whiteBg_result"] ].join(" ")}>Ещё отмазка</button>

            <a className={s.Result__changeText}>Изменить текст</a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
