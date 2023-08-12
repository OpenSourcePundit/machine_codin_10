export const Reducer = (state,{type,payload}) =>{

    switch(type){
            case "Sort":
            //return  {...state, category:{...state.category,  payload}};
            console.log("red",payload)
            return  {
                ...state,sortBy:payload
            };      
            case "addProduct":
            return{
                ...state, Data:[...state.Data,payload]
            };
            
            default: 
            return state;
 }

}