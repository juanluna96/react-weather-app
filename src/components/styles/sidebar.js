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
        props.GPS
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

export { ButtonGray, TempText }