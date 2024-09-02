import { RootState } from "../store";

export const saveToLS = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem('state', appState);
  } catch (error) {
    console.warn(error)
  }
}

export const loadFromLS = () => {
  try {
    const appState = localStorage.getItem('state');
    if (!appState) return undefined;
    return JSON.parse(appState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}