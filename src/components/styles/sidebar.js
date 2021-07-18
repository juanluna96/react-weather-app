import tw from "tailwind-styled-components";

const ButtonGray = tw.button`
    bg-gray-500 
    hover:bg-gray-600 
    active:shadow-lg 
    mouse 
    shadow
    transition
    ease-in
    duration-200
    focus:outline-none
    text-center

    ${(props) => (
        props.gps
            ? "px-4 py-4 w-18 rounded-full"
            : "px-6 py-4 font-medium text-xl"
    )
    }
`;

const TempText = tw.p`
    text-9xl
    text-center
    text-white
`;

const WeatherText = tw.p`
    text-5xl
    text-center
    text-gray-500
    font-semibold
    my-20
`;

const InfoText = tw.p`
    text-xl
    text-center
    text-gray-500
    font-semibold

    ${(props) => (
        props.city
            ? "flex mt-12 justify-center"
            : "mt-16"
    )
    }
`;

export { ButtonGray, TempText, WeatherText, InfoText }