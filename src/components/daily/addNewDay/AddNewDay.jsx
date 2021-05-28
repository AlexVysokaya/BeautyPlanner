import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addElemDaily } from '../../../redux/dailyReducer';
import Comeback from '../../button/comeback/comeback';
import style from './AddNewDay.module.css';

const CustomSelect = ({ id, options, onChange }) => {
  let arrOprions = [];

  let map = (id, options) => {
    for (let key in options) {
      arrOprions.push(<option key={id + key} value={options[key].id}>{options[key].name}</option>)
    }
  }

  map(id, options)

  return (
    <select className={style.custom_select} id={id} onChange={onChange} className={style.form_field}>
      {arrOprions}
    </select>
  )
}


const AddNewDay = ({ cosmetics, addElemDaily }) => {

  let history = createBrowserHistory();

  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [elements, setElements] = useState([]);
  const [element, setElement] = useState(null);

  //componentDidMount
  useEffect(() => {
    //устанавливаем во все списки по умолчанию первые элементы
    setCategories(cosmetics);
    setSections(cosmetics.body.list);
    // setSections([{ id: 0, name: '-не выбрано-', items: [] }]);
    // setElements(cosmetics.body.list.cleaning.list.length > 0 && cosmetics.body.list.cleaning.list);
    setElements([{ id: 0, name: '-не выбрано-', items: [] }]);
  }, [])

  const find = (obj, id) => {
    for (let key in obj) {
      if (obj[key].id === id) return obj[key];
    }
    return undefined;
  }

  //при выборе нового значения в категории
  const onCategoriesSelectChange = (e) => {
    const categoryId = parseInt(e.target.options[e.target.selectedIndex].value);
    const category = find(categories, categoryId);

    const section = category.list;
    setSections(section);
  }

  const onSectionsSelectChange = (e) => {
    const sectionId = parseInt(e.target.options[e.target.selectedIndex].value);
    const section = find(sections, sectionId)

    const element = section.list;
    setElements(element);
    setElement(element[0]);
  }

  const onElementSelectChange = (e) => {
    const elementId = parseInt(e.target.options[e.target.selectedIndex].value);
    const element = find(elements, elementId)
    setElement(element)
  }

  const addElement = (elem) => {

    let time = history.location.pathname.split('/').pop();
    debugger;
    addElemDaily(elem, time);
    history.back();
  }

  return <div className={style.wrapper}>
    <div className={style.button_back}>
      <Comeback history={history} />
    </div >
    <div className={style.wrapper_form}>
      <label for='category'>Выберите раздел</label>
      <CustomSelect id='category' options={categories} onChange={onCategoriesSelectChange} />
      {/* <CustomSelect id='category' options={categories} /> */}
    </div>
    <div className={style.wrapper_form}>
      <label for='section'>Выберите этап</label>
      <CustomSelect id='section' options={sections} onChange={onSectionsSelectChange} />
      {/* <CustomSelect id='section' options={sections} /> */}
    </div>
    <div className={style.wrapper_form}>
      <label for='element'>Выберите продукт</label>
      <CustomSelect id='element' options={elements} onChange={onElementSelectChange} />
    </div>

    <div>
      <div className={style.wrapper_button}>
        <button onClick={()=>{addElement(element)}}>Добавить</button>
      </div>
    </div>

  </div>

}

const mapStateToProps = (state) => {
  return {
    cosmetics: state.cosmetics
  }
}

export default connect(mapStateToProps, {addElemDaily})(AddNewDay);