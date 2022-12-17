import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "frontity";
import ItemMainPost from "../../components/item-main-post/ItemMainPost";
import dayjs from "dayjs"

MainPosts.propTypes = {

};

function MainPosts({items, state}) {
    return (
        <section>
            {
                items.map((item) => {
                    const post = state.source[item.type][item.id];
                    const title = post.title.rendered;
                    const description = post.excerpt.rendered;
                    const date = dayjs(post.date).format('DD/MM/YYYY');
                    const category = 'BOM DE BEER';
                    const tags = ['AVES', 'BOM DE COPO'];
                    return (
                        <ItemMainPost title={title}
                                      key={item.id}
                                      category={category}
                                      date={date}
                                      description={description}
                                      tags={tags}
                        />
                    )

                })
            }
        </section>
    );
}

export default connect(MainPosts);