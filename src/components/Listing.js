import React from 'react';
import Item from './Item';

function Listing(props) {
    const {items} = props;
    return (
        <div className="item-list">
            {items.map((entity) => <Item item={entity} key={entity.listing_id} />)}
        </div>
    );
}

export default Listing;