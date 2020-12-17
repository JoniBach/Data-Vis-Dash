import React from 'react';
import FabNav from './Layout/FabNav'
import PopOpenDrawerNav from './Layout/PopOpenDrawerNav'
import StandardNav from './Layout/StandardNav'

export default function AwesomePage(props) {
    switch (props.layout) {
        case 'fab':
            return <FabNav>{props.children}</FabNav>
        case 'pop':
            return <PopOpenDrawerNav>{props.children}</PopOpenDrawerNav>
        default: return <StandardNav>{props.children}</StandardNav>
    }
}
