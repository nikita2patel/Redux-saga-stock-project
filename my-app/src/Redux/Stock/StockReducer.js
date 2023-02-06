import { Get_Data_s } from "./StockType";
const initialState = {
  stockData: [],
};


const StockReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case Get_Data_s:
      return{
        ...state,
        stockData:action.payload
      }
    default:
      return state;
  }
};

export default StockReducer;

