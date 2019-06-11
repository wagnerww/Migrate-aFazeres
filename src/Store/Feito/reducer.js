/*
###--------------- TYPES
*/
const reducerName = "feito";
export const Types = {
  ADD_TAREFA: `${reducerName}/ADD_TAREFA`,
  REMOVE_TAREFA: `${reducerName}/REMOVE_TAREFA`
};

/*
###--------------- REDUCERS
*/
const INITIAL_STATE = {
  data: []
};

export function feito(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TAREFA:
      return { ...state, data: [...state.data, action.payload.tarefa] };

    case Types.REMOVE_TAREFA:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.index),
          ...state.data.slice(action.payload.index + 1)
        ]
      };

    default:
      return state;
  }
}

/*
###--------------- ACTIONS
*/
export const Creators = {
  addTarefaFeito: tarefa => ({
    type: Types.ADD_TAREFA,
    payload: { tarefa }
  }),

  removeTarefaFeito: index => ({
    type: Types.REMOVE_TAREFA,
    payload: { index }
  })
};
