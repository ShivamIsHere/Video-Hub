import {createSlice} from "@reduxjs/toolkit"
import {LIVE_CHAT_COUNT} from "./constants"
const chatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[],
    },
    reducers:{
        addMessage:(state, action)=>{
            if (state.message.length >= LIVE_CHAT_COUNT) {
                state.message.splice(0, 1);
              }
            state.message.push(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;

// The purpose of this line of code is to remove the oldest message from the state.message array. Since it uses splice(0, 1), it will remove the first element (index 0) from the array, which represents the oldest message.
// 1: This is the number of elements to remove. In this case, 1 means it will remove one element from the array, starting from the index specified in the first argument.