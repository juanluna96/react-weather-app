import tw from "tailwind-styled-components";

const CloseButton = tw.button`
    hover:text-coolGray-300
    text-coolGray-200
    active:shadow-lg 
    mouse 
    shadow
    transition
    ease-in
    duration-200
    focus:outline-none
    text-center
    -mt-10
    -mr-2
    font-bold
    text-3xl
`;

const Input = tw.input`
  /* ... */
`;

// Button to search
const ButtonResult = tw.button`
    flex 
    items-center
    justify-between
    w-full
    px-3
    py-6
    text-2xl
    font-medium
    text-left
    transition
    duration-200
    ease-in-out
    border
    border-transparent
    group
    hover:border-coolGray-500
    hover:text-coolGray-400
`;

export { CloseButton, Input, ButtonResult }