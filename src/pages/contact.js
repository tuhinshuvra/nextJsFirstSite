import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>                    ContactPage                </title>
            </Head>
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