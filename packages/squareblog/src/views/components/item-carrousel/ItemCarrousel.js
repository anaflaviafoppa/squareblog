import React from 'react';
import Link from '@frontity/components/link'

function ItemCarrousel({title, link}) {
    return (
        <section>
            <h1>{title}</h1>

                <Link link={link}>
                    <button>
                    Veja a matéria completa</button>
                </Link>

        </section>
    );
}

export default ItemCarrousel;