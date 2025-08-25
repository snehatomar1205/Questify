import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

const params = {
    key: import.meta.env.PARAMS_KEY,
    cx: import.meta.env.PARAMS_CX,
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
