import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";




 const userSlice = createSlice ({
        name:"users",
        initialState: userData,
        reducers:{
            adduser:(state,action)=>{
                // console.log(state)
                // console.log(action)
                // console.log(action.payload)
                state.push(action.payload)
            },
            editUsers:(state,action)=>{

                console.log(action)
                // console.log(action.payload)
    
                const {id,name,email} = action.payload;
                // console.log(id)
                // console.log(state)
               const userId =  state.find(user=>       
                    user.id == id
                )
             
    
                if(userId)
                 {
                    userId.name=name
                    userId.email=email 
                 }
               
    
            },
            deleteUsers:(state,action)=>{
                const {id} = action.payload;
                const userId =  state.find(user=>       
                    user.id == id
                
                )
                if(userId)
                 {
                    return state.filter(users=>users.id !==id)
                 }
            },
      

        }
        
 })
 export const {adduser,editUsers,deleteUsers} = userSlice.actions;
 export  default userSlice.reducer;