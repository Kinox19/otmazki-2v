import React from 'react'
import s from './HomePage.module.scss'
import mainPic from '../../assets/images/HomePage/mainPic.png'
import { Footer } from '../Shared/Footer/Footer'
import { Header } from '../Shared/Header/Header'
import style from '../Shared/Button_whiteBg/Button__whiteBg.module.scss'

export const HomePage = () => {
  return (
    <div className={s.HomePage__page}>
      <div className={s.HomePage__container}>
        <div className={s.text__container}>
          <p className={s.text__upper}>otmazka - сервис для исключительного случая, как сегодня. Или еще завтра... может лучше отдохнуть?</p>
          <h1 className={s.text__heading}>Всегда есть причина</h1>
          <p className={s.text__under}>Мы уже придумали отмазки и поделимся с вами, только тсс...</p>
          <button className={style.Button__whiteBg}>Хочу отмазку!</button>
        </div>
        <img className={s.HomePage__mainPic} src={mainPic} alt='Фотография классная'></img>
      </div>
      <Footer/>
    </div>
  )
}
