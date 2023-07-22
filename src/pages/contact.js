import React from 'react';
import RootLayout from '../../components/Layouts/RootLayout';

const ContactPage = () => {
    return (
        <div>
            <h2>This is Contact Page</h2>
        </div>
    );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}