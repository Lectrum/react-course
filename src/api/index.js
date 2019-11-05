import { root } from './config.js';

export const api = Object.freeze({
    starships: {
        fetch: () => {
            return fetch(`${root}/1starships`, {
                method: 'GET'
            })
        }
    }
});