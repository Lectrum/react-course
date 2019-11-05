import { root } from './config.js';

export const api = Object.freeze({
    starships: {
        fetch: () => {
            return fetch(`${root}/starships`, {
                method: 'GET'
            })
        }
    }
});