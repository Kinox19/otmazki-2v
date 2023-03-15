import React, { useState } from 'react'
import s from './ResultPage.module.scss'
import { Footer } from '../Shared/Footer/Footer'
import { Header } from '../Shared/Header/Header'
import style from '../Shared/Button_whiteBg/Button__whiteBg.module.scss'
import mod from '../Shared/Button_whiteBg/Button__whiteBg_result.module.scss'
import infoIcon from '../../assets/images/Result/icons/info-icon.png'
import { Modal } from '../Shared/Modal/Modal';
import Select from 'react-select'

const options = [
  { value: 'hype', label: 'Хайп' },
  { value: 'it', label: 'АйТи' },
  { value: 'bit', label: 'Бытовая' },
  { value: 'business', label: 'Деловая' },
  { value: 'friend', label: 'Дружеская' },
  { value: 'sad', label: 'Грустные' },
  { value: 'kids', label: 'Детские' },
  { value: 'fun', label: 'Смешные' }
]

const colorStyles={
  control: styles =>({
    ...styles,
    backgroundColor: 'transparent',
    width: '552px',
    height: '48px',
    border: '1px solid rgba(86, 103, 137, 0.26)',
    color: '#000',
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '500',
    marginTop: '8px',
  }),

  singleValue: styles =>({
    ...styles,
    color: 0 ? '#000' : '#000',
  }),

  indicatorContainer: styles =>({
    ...style,
    color: 0 ? '#000' : '#000',
  }),

  dropdownIndicator: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? '#000' : '#000',
    '&:hover': {
      color: '#000'
    }
  })
};

export const ResultPage = (props) => {
  const [isModal, setModal] = React.useState(false);
  let { inputText } = props.match.params;

  return (
    <div className={s.Result__container}>
        <Header/>
        <button className={s.Result__AdviseCopout} onClick={() => setModal(true)}>Предложить свою отмазку</button>
      <div className={s.Result__content}>

        <div className={s.Result__contentContainer}>
            <img className={s.Result__icon} src={infoIcon} alt='info' title='Обращаем ваше внимание, что команда otmazki очень дружелюбная и не хочет никого оскорбить.'/>

            <p className={s.Result__otmazka}>{inputText}</p>

            <button className={s.Result__copy}>Скопировать отмазку</button>

            <button className={ [style["Button__whiteBg"], mod["Button__whiteBg_result"] ].join(" ")}>Ещё отмазка</button>

            <a className={s.Result__changeText}>Изменить текст</a>
        </div>
      </div>
      <Footer/>
      <Modal
        isVisible={isModal}
        title="Есть отмазка, которая вас спасает? Поделитесь ею с миром!"
        content={
          <div>
            <p className={s.form__attention}>Отправляя нам отмазку вы соглашаетесь с <a className={s.form__link} href='/333'>правилами использования сервиса</a></p>
            <p className={s.form__inputTitle}>напишите вашу отмазку</p>
            <input className={s.form__input}/>
            <p className={s.form__inputTitle}>в какую категорию лучше всего подойдет?</p>
            <Select
              styles={colorStyles}
              options={options}
              isSearchable={false}
              defaultValue={options[4]}
            />
          </div>
        }
        footer={<button className={s.form__sendButton} onClick={() => setModal(false)}>Отправить отмазку</button>}
        onClose={() => setModal(false)}
      />
    </div>
  )
}
