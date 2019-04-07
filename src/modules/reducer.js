import ACTIONS from "./action";
import _ from "lodash";
const defaultState = {
  items: [],
  id:0,
  match:false,
  exclude: false,
};
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.id++, element: item, data:{
        type : "resistor",
        value: "",
        count: 0,
      } };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }
    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index =
      _.findKey(newState.items, {id:action.payload})
      //_.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }
    case ACTIONS.Types.UPDATE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findKey(newState.items, {id:action.payload.id})
      newState.items[index].data = action.payload.data;
      return newState;
    }
    case ACTIONS.Types.CHANGE_MATCH_VALUE: {
      let newState = _.cloneDeep(state);
      newState.match = action.payload;
      return newState;
    }
    case ACTIONS.Types.CHANGE_EXCLUDE_VALUE: {
      let newState = _.cloneDeep(state);
      newState.exclude = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
export default todoReducer;