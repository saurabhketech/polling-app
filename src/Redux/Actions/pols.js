import { GetPolsRequest, GetPolsError, GetPolsSuccess, UpdatePolsError, UpdatePolsRequest, UpdatePolsSuccess } from "./actions";
import api from "../../service/apicall";
import config from "../../config.json"
export function PolsRequest(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(GetPolsRequest({ loader: true }))
            let data = await api.apiCall(`${config.baseApi}/list_polls`, "get", {}, {})
            if (!data.error) {
                dispatch(GetPolsSuccess({ login: true, data: data }))
            } else {
                dispatch(GetPolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(GetPolsError({ login: false, error: error }))
        }
    };
}


export function updatePolsRequest (formData) {
    return async function(dispatch, getState) {
        try {
            console.log("i am here", formData);
            
            dispatch(UpdatePolsRequest())
            let data = await api.apiCall(`${config.baseApi}/update_poll_title?id=${formData._id}&title=${formData.title}`, "get", {}, {})
            if (!data.error) {
                dispatch(UpdatePolsSuccess({ login: true, data: data }))
            } else {
                dispatch(GetPolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(UpdatePolsError({ login: false, error: error }))
        }
    };
}