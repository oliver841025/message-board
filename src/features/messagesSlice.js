import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [
      {
        id: uuidv4(),
        name: "Huang Ching Hsuan",
        age: "25",
        from: "Taiwan",
        message: "Hello World !!",
      },
      {
        id: uuidv4(),
        name: "William Junior",
        age: "22",
        from: "UK",
        message: "I love chocolate donuts🍩",
      },
    ],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export const selectMessages = (state) => state.messages.messages;
export default messagesSlice.reducer;
