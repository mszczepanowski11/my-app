import { Dispatch } from 'redux';
import * as actionTypes from '../actionsTypes/photoTypes';
import { ISinglePhoto } from '../../components/Entities/photos';


export const getPhotos = (): Promise<ISinglePhoto> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photosList) => {
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photosList,
               
            })
        })
}) as any;