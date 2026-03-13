const initialState = {
  storageItems: [],
  removedItems: []
}

const inventoryReducer = (state = initialState, action) => {

  switch (action.type) {

    case "FETCH_STORAGE_SUCCESS":
      return {
        ...state,
        storageItems: action.payload
      }

    case "FETCH_REMOVED_SUCCESS":
      return {
        ...state,
        removedItems: action.payload
      }

    case "ADD_STORAGE_SUCCESS":
      return {
        ...state,
        storageItems: [...state.storageItems, action.payload]
      }

    case "REMOVE_STORAGE_SUCCESS":
      return {
        ...state,
        removedItems: [...state.removedItems, action.payload]
      }

    default:
      return state
  }

}

export default inventoryReducer