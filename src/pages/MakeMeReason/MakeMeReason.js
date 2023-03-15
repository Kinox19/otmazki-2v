import React from 'react'
import { Footer } from '../Shared/Footer/Footer'
import { Header } from '../Shared/Header/Header'
import s from './MakeMeReason.module.scss'
import style from '../Shared/Button_whiteBg/Button__whiteBg.module.scss'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import MakeMeReasonScripts from './MakeMeReasonScripts.js'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


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
    border: '1px solid #fff',
    color: '#fff',
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '500',
    marginTop: '8px',
  }),

  singleValue: styles =>({
    ...styles,
    color: 0 ? '#fff' : '#fff',
  }),

  indicatorContainer: styles =>({
    ...style,
    color: 0 ? '#fff' : '#fff',
  }),

  dropdownIndicator: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? '#fff' : '#fff',
    '&:hover': {
      color: '#FFF'
    }
  })
};

export const MakeMeReason = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleButtonClick = () => {
    navigate(`/result/${inputText}`);
  };
  return (
    <div className={s.Reason__container}>
      <Header/>
      <div className={s.Reason__content}>
        <h2 className={s.Reason__heading}>Расскажите нам, что вы не сделали?</h2>
        <p className={s.Reason__hint}>Выберите стиль желаемой отмазки</p>

        <Select
          styles={colorStyles}
          options={options}
          isSearchable={false}
          defaultValue={options[4]}
        />

        <input className={s.Reason__input} onChange={handleInputChange}></input>
          <button className={style.Button__whiteBg} onClick={handleButtonClick}>Придумать отмазку</button>
      </div>
      <Footer/>

      <Helmet>
      <title>My Title</title>
      <script></script>
      </Helmet>
    </div>
  )
}
