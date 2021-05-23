const ADD_NEW = 'ADD-NEW';
const DELETE_ELEMENT = 'DELETE-ELEMENT';

const initialState = { //у каждого элемента косметички должен быть id
  body: {
    name: 'Уход за телом',
    list: {
      cleaning: {
        name: 'Очищение',
        list: [
          { id: 1, name: 'Гель для душа с клубникой'},
          { id: 2, name: 'Гель для душа с малиной'}
        ]
      },
      cream: {
        name: 'Крем',
        list: [
          { id: 3, name: 'Крем для тела'},
        ]
      },
      special: {
        name: 'Специальный уход',
        list: [
          { id: 4, name: 'Скраб для тела'},
        ]
      }
    }
  },

  hair: {
    name: 'Уход за волосами',
    list: {
      shampoo: {
        name: 'Шампунь для волос',
        list: [
          { id: 5, name: 'Шампунь для объема'},
          { id: 6, name: 'Шампунь для кудрявых волос'}
        ]
      },
      balsam: {
        name: 'Бальзам для волос',
        list: [
          { id: 7, name: 'Бальзам для волос'}
        ],
      },
      special: {
        name: 'Специальный уход',
        list: [
          { id: 8, name: 'Скраб для кожи головы'},
          { id: 9, name: 'Маска для волос'}
        ]
      }
    }
  },

  face: {
    name: 'Уход за лицом',
    list: {
      cleaning: {
        name: 'Очищение',
        list: [
          { id: 10, name: 'Пенка для умывания'},
          { id: 11, name: 'Гель для умывания'}
        ]
      },
      cream: {
        name: 'Крем для лица',
        list: [
          { id: 12, name: 'Крем для лица'},
          { id: 13, name: 'Крем для кожи вокруг глаз'},
          { id: 14, name: 'Крем с SPF'}
        ]
      },
      tonic: {
        name: 'Тонизирование',
        list: [
          { id: 15, name: 'Тоник очищающий'},
          { id: 16, name: 'Тоник освежающий'}
        ]
      },
      mask: {
        name: 'Маски',
        list: [
          { id: 17, name: 'Тканевая маска'},
          { id: 18, name: 'Глиняная маска'}
        ]
      },
      special: {
        name: 'Специальный уход',
        list: [
          { id: 19, name: 'Пилинг с кислотами'},
          { id: 20, name: 'Сыворотка для лица'},
          { id: 21, name: 'Пилинг-скатка'}
        ]
      }
    }
  },
}

const cosmeticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ELEMENT: {
      let newList = state[action.category[1]].list[action.category[2]].list.filter(elem => elem.id !== action.id);
      let copyState = {
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
      return copyState;
    }

    case ADD_NEW: {
      let copyState = {
        ...state,
        [action.category[1]]: {
          ...state[action.category[1]],
          list: {
            ...state[action.category[1]].list,
            [action.category[2]]: {
              ...state[action.category[1]].list[action.category[2]],
              list: [
                ...state[action.category[1]].list[action.category[2]].list,
              ]
            }
          }
        }
      };
      copyState[action.category[1]].list[action.category[2]].list.push(action.elem);
      return copyState;
    }
    default:
      return state;
  }
}

//запрос на сервер для добавления, затем меням косметичку
export const addNew = (elem, category) => {
  return { type: ADD_NEW, elem, category }
}

export const deleteElemCosmetics = (id, category) => {
  return { type: DELETE_ELEMENT, id, category }
}


export default cosmeticsReducer;