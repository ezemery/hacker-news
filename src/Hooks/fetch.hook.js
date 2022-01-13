import {get} from "../services";
import {useReducer } from 'react';

const photosInitial = {
    stories: [],
    loading: false,
    error: false,
};

function fetchReducer(state, action) {
    switch (action.type) {
        case 'success':
            return {...state, stories: action.stories}
        case 'loadingComplete':
            return {...state, loading:false}
        case 'loadingStart':
            return {...state, loading:true}
        case 'error':
            return {...state, error:true}
        default:
            return state
    }
} 

export const useFetch = () => {
    const [p, setPhotoState] = useReducer(fetchReducer, photosInitial);


    const fetchDataAsync = async () => {
        setPhotoState({type: 'loadingStart'})
        try {
            const stories = await get();
            console.log("stories",stories)
            setPhotoState({type: 'success', stories})
            setPhotoState({type: 'loadingComplete'})
        } catch (error) {
            setPhotoState({type: 'error'})
            setPhotoState({type: 'loadingComplete'})
        }
    };


    return {
        ...p,
        fetchDataAsync
    };
};