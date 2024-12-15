import { selector } from "recoil";
import { CharAtom } from "./CharState";

export const charSelector = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(CharAtom);
  
      return text.length;
    },
  });