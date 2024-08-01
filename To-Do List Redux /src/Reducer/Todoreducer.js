// import { Reducer } from "react"

const initialData = localStorage.getItem("todo") ? {list:JSON.parse(localStorage.getItem("todo"))}: {list:[]}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            const { id, title, status } = action.payload;
            return {
                list: [
                    ...state.list,
                    { id: id, title: title, status: status }
                ]
            }
        }
        case "DELETE_TASK": {
            const { id } = action.payload;
            let data = state.list.filter(data => data.id !== id)
            return {
                list: [
                    ...data
                ]
            }
        }
        case "MARK_DONE": {
            const { id } = action.payload;
            let datas = state.list.map(data => data.id == id ? { ...data, status: !data.status } : (data))
            return {
                list: [
                    ...datas
                ]
            }
        }
        case "UPDATE_TASK": {
            const {id,title,status} = action.payload.data
            let datas = state.list.filter(lists => lists.id !== id )
            return {
                list: [
                    ...datas,
                    {id, title, status}
                ]
            }
        }
        default:
            return state
    }
}

export default todoReducer