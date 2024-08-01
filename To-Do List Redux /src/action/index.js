

export const AddTask = (data) =>{
    return {
        type: "ADD_TASK",
        payload : {
            id: new Date().getTime().toString(),
            title : data,
            status : false
        }
    }
}

export const Deletetask = (e) => {
    return {
        type : "DELETE_TASK",
        payload :{
            id : e
        }
    }
}

export const markDone = (e) => {
    return {
        type : "MARK_DONE",
        payload : {
            id : e
        }
    }
}


export const updateTask = (e) => {
    return {
        type : "UPDATE_TASK",
        payload : {
            data : e
        }
        
    }
} 

