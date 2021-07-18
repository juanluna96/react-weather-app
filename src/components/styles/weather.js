import tw from "tailwind-styled-components";

const ButtonGrades = tw.button`
    ${(props) => (props.white ? "bg-coolGray-200 hover:bg-coolGray-700 hover:text-gray-200 text-blueGray-900" : "bg-gray-500 hover:bg-gray-600 text-coolGray-200")}
    active:shadow-lg 
    mouse 
    shadow
    transition
    ease-in
    duration-200
    focus:outline-none
    text-center
    px-6 py-5 
    rounded-full
    mx-2
    font-bold
    text-3xl
`;

// Day weather info
const DayContainer = tw.div`
    flex
    flex-col
    justify-between
    bg-blue-500
    text-center
    px-8 pt-5 pb-7
`;

const DayText = tw.p`
    font-medium
    my-4

    ${(props) => (props.title ? "text-3xl" : "text-2xl")}
    ${(props) => (props.mintemp ? "text-coolGray-400" : "text-coolGray-200")}
`;


export { ButtonGrades, DayContainer, DayText }