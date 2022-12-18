import React from 'react';
import {connect, Global, styled, css} from "frontity";
import Switch from '@frontity/components/switch';
import Navbar from "../views/components/navbar/Navbar";
import Home from "../views/pages/home/Home";
import {PageURL} from "../utils/constants/PagesURL";
import Footer from "../views/components/footer/Footer";
import {commonStyle} from "../style";

import InterMedium from '../style/Inter-Medium.ttf';
import InterLight from '../style/Inter-Light.ttf';
import {buttonsStyle} from "../style/buttons";
import {specialCharacter} from "../style/specialCharacter";

const styles = [
    css` 
                @font-face {
                  font-family: "Inter";
                  font-style: normal;
                  font-weight: normal;
                  font-display: fallback;
                  src: url("${InterMedium}") format("truetype");
                }
                @font-face {
                  font-family: "InterLight";
                  font-style: normal;
                  font-weight: normal;
                  font-display: fallback;
                  src: url("${InterLight}") format("truetype");
                }
            `,
commonStyle, buttonsStyle, specialCharacter
]


const Root = ({state}) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Global styles={styles}/>
            <Navbar></Navbar>
            <main>
                <Switch>
                    <section when={data.link === PageURL.HOME}>
                        <Home/>
                    </section>
                </Switch>
            </main>
            <Footer/>

        </>
    );
};

export default connect(Root);