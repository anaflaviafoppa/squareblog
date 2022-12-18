import React from 'react';
import { connect } from "frontity"
import ItemCarrousel from "../../components/item-carrousel/ItemCarrousel";


function Carrousel({state, items}) {
    return (
        <section className='container'>
            {items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <ItemCarrousel key={item.id} link={item.link} title={post.title.rendered} />
                )
            })}
        </section>
    );
}

export default connect(Carrousel);