import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>This is About Page</h2>
        </div>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}