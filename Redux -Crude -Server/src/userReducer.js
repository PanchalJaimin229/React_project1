import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        userData: (state, action) => {
            state.push(action.payload)
        },

        addData: (state, action) => {
            fetch('http://localhost:3000/products', {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.payload)
            })
                .then((res) => {
                    if (res) {
                        alert('Saved Successfully...!')
                    }
                })
                .catch((error) => { return error.message })
        },

        editData: (state, action) => {
            if (window.confirm("Are you sure for edit")) {
                fetch(`http://localhost:3000/products/${action.payload.id}`, {
                    method: "put",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(action.payload)
                })
                    .then((res) => {
                        if (res) {
                            alert('Edit Successfully...!')
                        }
                    })
                    .catch((error) => { return error.message })
            }
        },
        deleteData: (state, action) => {
            if (window.confirm("Are you sure for delete")) {
                fetch(`http://localhost:3000/products/${action.payload}`, {
                    method: "delete",
                }).then((res) => {
                    if (res) {
                        alert('Delete Successfully...!')
                    }
                })
                .catch((error) => { return error.message })
            }
        }

    }
})

export const { userData, addData, editData, deleteData } = userReducer.actions;
export default userReducer.reducer