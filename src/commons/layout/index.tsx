import styled from "@emotion/styled"
import { useRouter } from "next/router"
import {createContext, useState } from "react";
import LayoutFooter from "../../commons/layout/footer/LayoutFooter.container";
import LayoutHeader from "../../commons/layout/header/LayoutHeader.container";
import LayoutNavigation from "../../commons/layout/navigation/LayoutNavigation.container";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    z-index : 99;
    flex-direction : column;
    align-items : center;
`


export const Body = styled.div`
    height : 100%;
    /* padding-left : 50px;
    padding-right : 50px; */
`

const withoutNavigation = ["/board", "/query"];

export const LayoutContext = createContext({
    test: "",
});


const Layout = ({children}) => {
    const router = useRouter();
    const isNavigation = !withoutNavigation.includes(router.pathname);

    const [test, setTest] = useState("이것은 테스트입니다.");

    const value = {
        test
    };

    return(
        <LayoutContext.Provider value={value}>
            <Wrapper>
                <LayoutHeader />
                {/* {isNavigation && <LayoutNavigation />} */}
                <Body></Body>
                <LayoutFooter />
            </Wrapper>
        </LayoutContext.Provider>
    );
};