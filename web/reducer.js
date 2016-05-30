import data from "./example_data";

const initialState = {
    posts: data.posts
};

export default function appReducer(state = initialState) {
    return state;
}