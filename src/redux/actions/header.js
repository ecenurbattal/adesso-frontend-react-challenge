import { CHANGE_HEADER_TITLE, SET_HEADER_TITLE } from "./types";

export const changeHeaderTitle = (header) => ({
    type:CHANGE_HEADER_TITLE,
    payload:header
})

export const setHeaderTitle = (header) => ({
    type:SET_HEADER_TITLE,
    payload:header
})