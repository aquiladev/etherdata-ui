import { handleError } from '../api';

export async function fetchMinersStat(client) {
    try {
        const { data } = await client.get('/api/v0.1/miners/stat30');
        return data;
    } catch (error) {
        handleError(error);
    }
}