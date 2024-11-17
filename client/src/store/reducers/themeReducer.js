const test = {};
const DEFAULT_STATE = JSON.parse(localStorage.getItem("darkMode") ?? "false");
export const themeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "":
            return {
                state,
            };
        default:
            return state;
    }
};
