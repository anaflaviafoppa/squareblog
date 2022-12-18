import React from 'react';
import {connect, Global} from "frontity"
import Carrousel from "../../widgets/caroussel/Carroussel";
import ItemCarrousel from "../../components/item-carrousel/ItemCarrousel";
import ItemMainPost from "../../components/item-main-post/ItemMainPost";
import MainPosts from "../../widgets/main-posts/MainPosts";
import CardPosts from "../../widgets/card-posts/CardPosts";
import Tags from "../../components/tags/tags";
import {Priority} from "../../../utils/constants/Constants";
import {style} from "./home-style";

function Home({ state }) {
    const data = state.source.get(state.router.link);
    const items = data.items;
    const carrouselItems = items.slice(0, 3);
    const mainItems = items.slice(3,5);
    const cardsItems = items.slice(5, items.length - 1);
    const tags = ['mostrar todos', 'aves', 'bom de assistir', 'BOM DE FAZER', 'BOM SABER','DOCES E SOBREMESAS', 'CARNES', 'CURIOSIDADES'];
    let tagSelected = 'mostrar todos';


    return (
        <>
            <Global styles={style}/>
            <Carrousel items={carrouselItems} />
            <div className="container tag-container">
                {tags.map((tag, index) => {
                    const isSelected = tag === tagSelected;
                    return (
                        <Tags key={index} text={tag} type={Priority.SECONDARY} isSelected={isSelected}/>
                    )
                })}
            </div>
            <MainPosts items={mainItems} />
            <section  className="container">
                <div className="title-border">
                    <h3>Conheça as nossas Marcas:</h3>
                </div>

            </section>
            <CardPosts items={cardsItems}/>
        </>

    );
}

export default connect(Home);