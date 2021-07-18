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

// Statistics Highlights

const TodayText = tw.h2`
    text-4xl
    font-bold
    text-coolGray-200
`;

const StatsContainer = tw.div`
    flex
    flex-col
    justify-between
    bg-blue-500
    text-center
`;

const StatsTitle = tw.h3`
    text-3xl
    font-medium
    text-coolGray-200
    mt-4
    mb-0
`;

const StatsData = tw.h1`
    text-coolGray-200
    ${(props) => (props.mini ? "font-medium text-6xl -mb-16" : "font-bold text-9xl")}
    flex
    items-center
    justify-center
`;

const TinyStatsData = tw.h1`
    text-coolGray-200
    ${(props) => (props.mini ? "font-medium text-6xl -mb-12" : "font-bold text-8xl")}
    mt-3
    mb-10
    flex
    items-center
    justify-center
`;

const ButtonLocation = tw.button`
    bg-gray-500 hover:bg-gray-600 text-coolGray-200
    active:shadow-lg 
    mouse 
    cursor-default
    shadow
    transition
    ease-in
    duration-200
    focus:outline-none
    text-center
    px-2 py-2 
    rounded-full
    mx-2
    font-bold
    text-3xl
`;

// Humidity Progress
const PorcentContainer = tw.div`
    flex
    justify-between
    font-bold 
    text-md 
    text-coolGray-400
`;
const ProgressBarFill = tw.div`
    flex
    flex-col 
    justify-center
    text-center
    text-white
    bg-yellow-300 
    rounded-lg 
    shadow-none 
    whitespace-nowrap
`;

export {
    ButtonGrades, DayContainer, DayText, TodayText, StatsContainer, ButtonLocation,
    StatsTitle, StatsData, TinyStatsData, PorcentContainer, ProgressBarFill
}