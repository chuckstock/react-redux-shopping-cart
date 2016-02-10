import axios from 'axios';

const FETCH_TEAS = 'FETCH_TEAS';

export function fetchTeas() {
    const request = axios.get('../files/teas.json');

    return {
        type: FETCH_TEAS,
        payload: request
    }
};
