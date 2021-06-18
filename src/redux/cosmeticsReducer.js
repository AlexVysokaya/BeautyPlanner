import { cosmeticBag } from "../api/api";

const ADD_NEW = 'ADD-NEW';
const DELETE_ELEMENT_COSM = 'DELETE-ELEMENT-COSM';
const SET_COSMET_BAG = 'SET-COSMET-BAG';
const EDIT_COSMET_BAG = 'EDIT-COSMET-BAG'

// const initialState = { //у каждого элемента косметички должен быть id
//   body: {
//     id: 1,
//     name: 'Уход за телом',
//     list: {
//       cleaning: {
//         id: 1,
//         name: 'Очищение',
//         list: [
//           { id: 1, name: 'Гель для душа с клубникой' },
//           { id: 2, name: 'Гель для душа с малиной' }
//         ]
//       },
//       cream: {
//         id: 2,
//         name: 'Крем',
//         list: [
//           { id: 3, name: 'Крем для тела' },
//         ]
//       },
//       special: {
//         id: 3,
//         name: 'Специальный уход',
//         list: [
//           { id: 4, name: 'Скраб для тела' },
//         ]
//       }
//     }
//   },

//   hair: {
//     id: 2,
//     name: 'Уход за волосами',
//     list: {
//       shampoo: {
//         id: 1,
//         name: 'Шампунь для волос',
//         list: [
//           { id: 5, name: 'Шампунь для объема' },
//           { id: 6, name: 'Шампунь для кудрявых волос' }
//         ]
//       },
//       balsam: {
//         id: 2,
//         name: 'Бальзам для волос',
//         list: [
//           { id: 7, name: 'Бальзам для волос' }
//         ],
//       },
//       special: {
//         id: 3,
//         name: 'Специальный уход',
//         list: [
//           { id: 8, name: 'Скраб для кожи головы' },
//           { id: 9, name: 'Маска для волос' }
//         ]
//       }
//     }
//   },

//   face: {
//     id: 3,
//     name: 'Уход за лицом',
//     list: {
//       cleaning: {
//         id: 1,
//         name: 'Очищение',
//         list: [
//           { id: 10, name: 'Пенка для умывания' },
//           { id: 11, name: 'Гель для умывания' }
//         ]
//       },
//       cream: {
//         id: 2,
//         name: 'Крем для лица',
//         list: [
//           { id: 12, name: 'Крем для лица' },
//           { id: 13, name: 'Крем для кожи вокруг глаз' },
//           { id: 14, name: 'Крем с SPF' }
//         ]
//       },
//       tonic: {
//         id: 3,
//         name: 'Тонизирование',
//         list: [
//           { id: 15, name: 'Тоник очищающий' },
//           { id: 16, name: 'Тоник освежающий' }
//         ]
//       },
//       mask: {
//         id: 4,
//         name: 'Маски',
//         list: [
//           { id: 17, name: 'Тканевая маска' },
//           { id: 18, name: 'Глиняная маска' }
//         ]
//       },
//       special: {
//         id: 5,
//         name: 'Специальный уход',
//         list: [
//           { id: 19, name: 'Пилинг с кислотами' },
//           { id: 20, name: 'Сыворотка для лица' },
//           { id: 21, name: 'Пилинг-скатка' }
//         ]
//       }
//     }
//   },
// }

const initialState = {};

const cosmeticsReducer = (state = initialState, action) => {
  switch (action.type) {
    //удалить
    case DELETE_ELEMENT_COSM: {
      const newList = state[action.category[1]].list[action.category[2]].list.filter(elem => elem.id !== action.id);
      return {
        ...state,
        [action.category[1]]: {
          ...state[action.category[1]],
          list: {
            ...state[action.category[1]].list,
            [action.category[2]]: {
              ...state[action.category[1]].list[action.category[2]],
              list: [...newList]
            }
          }
        }
      };
    }

    case SET_COSMET_BAG: {
      return {
        ...state,
        body: { ...action.bag.body },
        face: { ...action.bag.face },
        hair: { ...action.bag.hair },
      }
    }

    case EDIT_COSMET_BAG: {
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          list: {
            ...state[action.category].list,
            [action.section]: {
              ...state[action.category].list[action.section],
              list: [
                ...action.newPlan,
              ]
            }
          }
        }
      }
    }

    default:
      return state;
  }
}

const setCosmBag = (bag) => {
  return { type: SET_COSMET_BAG, bag }
}

const editCosmBag = (category, section, newPlan) => {
  return { type: EDIT_COSMET_BAG, category, section, newPlan }
}

export const getCosmBagThunk = () => async (dispatch) => {
  const response = await cosmeticBag.getBag();

  console.log(response);

  if (response.status === 200) {
    dispatch(setCosmBag(response.data));
  } else {
    alert(response.data);
  }
}

export const editCosmBagThunk = (category, section, state) => async (dispatch) => {
  const response = await cosmeticBag.editBag({ category, section, state });

  if (response.status === 200) {
    dispatch(editCosmBag(category, section, state))
  } else {
    alert(response.data)
  }
}


export const deleteElemCosmetics = (id, category) => {
  return { type: DELETE_ELEMENT_COSM, id, category }
}


export default cosmeticsReducer;