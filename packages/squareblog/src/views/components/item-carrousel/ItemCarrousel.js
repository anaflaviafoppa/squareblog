import React from 'react';
import Link from '@frontity/components/link'

function ItemCarrousel({title, link}) {
    return (
        <section>
            <h1>{title}</h1>


            <button className='button-secondary'>
                <Link link={link}>
                    Veja a matéria completa
                </Link>
            </button>


        </section>
    );
}

export default ItemCarrousel;