export function getDateParametrs(date) { //генерируем матрицу календаря
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return {year, month, day};
}