import React from 'react';
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import Navbar from "../views/components/navbar/Navbar";
import Home from "../views/pages/home/Home";
import {PageURL} from "../utils/constants/PagesURL";
import Footer from "../views/components/footer/Footer";

const Root = ({state}) => {
    const data = state.source.get(state.router.link);

    return (
        <>
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