import tw from "tailwind-styled-components";

const Container = tw.div`
    md:flex md:flex-row h-full
`;

const SideBarStyle = tw.aside`
    h-screen bg-blue-500 text-gray-300 md:w-1/4
`

const MainInfo = tw.main`
    text-red-500 bg-blueGray-900 flex-1
`

export { Container, SideBarStyle, MainInfo }