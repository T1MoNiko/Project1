import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    account: false,
    imageUrl: "https://avatars.mds.yandex.net/i?id=ede58bf44ccff771568341eed6d7ecd3c7014d64-8437205-images-thumbs&n=13"
}

const RegSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        createAccount(state, action) {
            state = action.payload
            console.log(state)
        },
        changeInfo(state, action) {
            state.data = {...state.data, ...action.payload}
        },
        signOutAccount(state, action) {
            state.data = {
                firstName: "",
                lastName: "",
                password: "",
                email: "",
                account: false,
            }
        }
    }
})

export const {createAccount, changeInfo, signOutAccount} = RegSlice.actions
export default RegSlice.reducer