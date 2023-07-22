import { useRouter } from 'next/router';
import React from 'react';

const NewsDetailsPage = () => {
    const router = useRouter();
    return (
        <div>
            <h2>This is News Details Page, newsId : {router.query.newstId}</h2>
        </div>
    );
};

export default NewsDetailsPage;