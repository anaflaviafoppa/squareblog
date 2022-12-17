import React from 'react';
import Link from '@frontity/components/link';
import {PageNames, PageURL} from "../../../utils/constants/PagesURL";


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link link="/">Home</Link>
                </li>
                <li>
                    <Link link={PageURL.BOM_DE_FAZER}>{PageNames.BOM_DE_FAZER}</Link>
                </li>
                <li>
                    <Link link={PageURL.BOM_SABER}>{PageNames.BOM_SABER}</Link>
                </li>
                <li>
                    <Link link={PageURL.BOM_DE_COPO}>{PageNames.BOM_DE_COPO}</Link>
                </li>
                <li>
                    <Link link={PageURL.BOM_DE_ASSISTIR}>{PageNames.BOM_DE_ASSISTIR}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;