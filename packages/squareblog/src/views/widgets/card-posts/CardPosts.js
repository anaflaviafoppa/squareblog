import React from 'react';
import {connect} from "frontity";
import dayjs from "dayjs";
import ItemCard from "../../components/item-card/ItemCard";

function CardPosts({items, state}) {
    return (
        <section>
            {items.map((item) => {
                const post = state.source[item.type][item.id];
                const title = post.title.rendered;
                const description = post.excerpt.rendered;
                const date = dayjs(post.date).format('DD/MM/YYYY');
                const category = 'BOM DE BEER';
                return (
                    <ItemCard
                        key={item.id}
                    title={title}
                    description={description}
                    date={date}
                    category={category}
                    />
                )
            })}
            <div>
                <button>Ver Mais</button>
            </div>
        </section>
    );
}

export default connect(CardPosts);