import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "frontity";
import ItemMainPost from "../../components/item-main-post/ItemMainPost";
import dayjs from "dayjs"
import {Order} from "../../../utils/constants/Constants";

MainPosts.propTypes = {

};

function MainPosts({items, state}) {
    function checkOrder(index) {
        const isEven = (index+1)%2 ===0;
        if(isEven) {
            return Order.REVERT;
        }

        return Order.NORMAL;

    }
    return (
        <section>
            {
                items.map((item, index) => {
                    const post = state.source[item.type][item.id];
                    const title = post.title.rendered;
                    const description = post.excerpt.rendered;
                    const date = dayjs(post.date).format('DD/MM/YYYY');
                    const category = 'BOM DE BEER';
                    const tags = ['aves', 'bom de copo', 'comida de boteco'];
                    const order = checkOrder(index);
                    return (
                        <ItemMainPost title={title}
                                      key={item.id}
                                      category={category}
                                      date={date}
                                      description={description}
                                      tags={tags}
                                      order={order}
                        />
                    )

                })
            }
        </section>
    );
}

export default connect(MainPosts);