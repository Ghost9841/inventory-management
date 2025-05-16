import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean,
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};