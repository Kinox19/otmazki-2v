import React from 'react'
import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={s.footer__container}>
        <a className={s.footer__link} href="/3232">О сервисе</a>
        <a className={s.footer__link} href="/3233">Условия использования</a>
        <a className={s.footer__link} href="/3234">Связаться с нами</a>
    </div>
  )
}
