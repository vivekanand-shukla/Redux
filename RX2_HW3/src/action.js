// ADD TO STORAGE
export const addToStorage = (item) => async (dispatch) => {

  const response = await fetch(
    "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }
  )

  const data = await response.json()

  if (data.success) {
    dispatch({
      type: "ADD_STORAGE_SUCCESS",
      payload: data.data
    })
  }

}


// REMOVE FROM STORAGE
export const removeFromStorage = (item) => async (dispatch) => {

  const response = await fetch(
    "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }
  )

  const data = await response.json()

  if (data.success) {
    dispatch({
      type: "REMOVE_STORAGE_SUCCESS",
      payload: data.data
    })
      dispatch(fetchStorage())
  }

}


// FETCH STORAGE ITEMS
export const fetchStorage = () => async (dispatch) => {

  const response = await fetch(
    "https://inventory-storage-app-backend-student-neog.replit.app/storage-items"
  )

  const data = await response.json()

  dispatch({
    type: "FETCH_STORAGE_SUCCESS",
    payload: data
  })

}


// FETCH REMOVED ITEMS
export const fetchRemoved = () => async (dispatch) => {

  const response = await fetch(
    "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store"
  )

  const data = await response.json()

  dispatch({
    type: "FETCH_REMOVED_SUCCESS",
    payload: data
  })

}