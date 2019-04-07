// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM",
    CHANGE_MATCH_VALUE: "CHANGE_MATCH_VALUE",
    CHANGE_EXCLUDE_VALUE: "CHANGE_EXCLUDE_VALUE",
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  const updateItem = (id, data) => ({
    type: Types.UPDATE_ITEM,
    payload: {id:id, data:data},
  });
  const changeMatchValue = (match) => ({
    type: Types.CHANGE_MATCH_VALUE,
    payload: match,
  });  
  const changeExcludeValue = (exclude) => ({
    type: Types.CHANGE_EXCLUDE_VALUE,
    payload: exclude,
  });
  export default {
    createItem,
    deleteItem,
    updateItem,
    changeMatchValue,
    changeExcludeValue,
    Types,
  };