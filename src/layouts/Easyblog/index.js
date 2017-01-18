import React from 'react';
import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';
import Draftjs from '../../components/Easyblog/Draftjs';

const Easyblog = (props) => {
    return (
        <Page { ...props }>
            <Draftjs />
            <hr/>
            <LatestPosts />
        </Page>
    )
}

export default Easyblog
