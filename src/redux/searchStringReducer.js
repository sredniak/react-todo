// selectors
export const getSearchString = (state) => state.searchString;

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const searchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

export const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
