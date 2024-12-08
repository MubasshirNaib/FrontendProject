
  import {atom} from 'recoil';

  export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });


//   export const counterState = atom({
//       key: "counterState",
//       default: 0,
//   }
//   );
  
// const charCountState = selector({
//     key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//       const text = get(textState);
  
//       return text.length;
//     },
//   });