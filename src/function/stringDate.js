import {getDateParametrs} from './getDateParametrs'

export function stringDate (date) { //генерируем матрицу календаря
  let {year, month, day} = getDateParametrs(date);
  const strDate = `${day}.${ (month+1 > 10) ? month+1 : '0'+(month+1)}.${year}`;
  return strDate;
}