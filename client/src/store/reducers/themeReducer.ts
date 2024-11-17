const test: any = {};

const DEFAULT_STATE = JSON.parse(localStorage.getItem("darkMode") ?? "false");

export const themeReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case "":
      return {
        state,
      };
    default:
      return state;
  }
};
