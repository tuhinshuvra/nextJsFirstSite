import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const AdminPage = () => {
    return (
        <div>
            <h2>This is Admin Page</h2>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}