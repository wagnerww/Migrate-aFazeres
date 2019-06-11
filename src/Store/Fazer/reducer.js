/*
###--------------- TYPES
*/
const reducerName = "fazer";
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

export function fazer(state = INITIAL_STATE, action) {
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
  addTarefaFazer: tarefa => ({
    type: Types.ADD_TAREFA,
    payload: { tarefa }
  }),

  removeTarefaFazer: index => ({
    type: Types.REMOVE_TAREFA,
    payload: { index }
  })
};
