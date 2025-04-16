// import axios from "axios";
//
// export const FetchData = async ({query,page}) => {
//     const response = await axios.get(`https://api.unsplash.com/photos/?client_id=JyRlHPp1_-__aSAWudi1-wBqzueS-I5nlwOFso3ml6s&page=${page}&query=${query}`);
//    return response.data;
// }
import axios from "axios";

const API_KEY = "JyRlHPp1_-__aSAWudi1-wBqzueS-I5nlwOFso3ml6s";

export const FetchData = async ({ query, page = 1 }) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id: API_KEY,
            query,
            page,
            per_page: 12,
        },
    });

    return response.data.results; // <- тут массив фотографий
};