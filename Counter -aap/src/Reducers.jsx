const intialVal =0;
export const reducerFun = (state=intialVal,action)=>{

    switch(action.type)
    {
            case "inc":
            return state+1;
            case "dec":
            return state-1;
           default:
            return state;
    }

}