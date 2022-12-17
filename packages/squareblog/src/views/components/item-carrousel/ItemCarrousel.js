import React from 'react';
import Link from '@frontity/components/link'

function ItemCarrousel({title, link}) {
    return (
        <section>
            <h3>{title}</h3>

                <Link link={link}>
                    <button>
                    Veja a matéria completa</button>
                </Link>

        </section>
    );
}

export default ItemCarrousel;