import tw from "tailwind-styled-components";

const Container = tw.div`
    md:flex md:flex-row overscroll-y-none font-raleway h-full bg-blueGray-900
`;

const SideBarStyle = tw.aside`
    bg-blue-500 text-gray-300 md:w-1/4 pt-8 pb-14 relative overflow-hidden
`

const MainInfo = tw.main`
    bg-blueGray-900 flex-1 pt-8 pb-14 px-3 md:px-48
`

export { Container, SideBarStyle, MainInfo }
