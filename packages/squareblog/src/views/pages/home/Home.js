import React from 'react';
import { connect } from "frontity"
import Carrousel from "../../widgets/caroussel/Carroussel";
import ItemCarrousel from "../../components/item-carrousel/ItemCarrousel";
import ItemMainPost from "../../components/item-main-post/ItemMainPost";
import MainPosts from "../../widgets/main-posts/MainPosts";

function Home({ state }) {
    const data = state.source.get(state.router.link);
    const items = data.items;
    const carrouselItems = items.slice(0, 3);
    const mainItems = items.slice(3,5);
    const cardsItems = items.slice(5, items.length - 1);


    return (
        <>
            <Carrousel items={carrouselItems} />
            <MainPosts items={mainItems} />
            <section>
                <h3>Conheça as nossas Marcas:</h3>
            </section>

        </>

    );
}

export default connect(Home);