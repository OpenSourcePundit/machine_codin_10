export const Reducer = (state,{type,payload}) =>{

    switch(type){
            case "Sort":
            //return  {...state, category:{...state.category,  payload}};
            console.log("red",payload)
            return  {
                ...state,sortBy:payload
            };      
            case "AddWatchLater":
            return{
                ...state, watchlater:[...state.watchlater,payload]
            };
            case "RemoveWatchLater":
            return{
                ...state, watchlater:[...state.watchlater.filter((watch)=>watch._id !== payload._id)]
            };
            case "Add_Product":
            return{
                ...state, products:[...state.products, ...payload]
            };
            
            case "showstate":
            console.log("statereducer 27",state);

        default: 
            return state;
 }

}