import DashboardLayout from '@/components/Layouts/DashboardLayout';
import React from 'react';

const DashboardHomePage = () => {
    return (
        <div>
            <h2>This is Dashboard Homepage</h2>
        </div>
    );
};

export default DashboardHomePage;

DashboardHomePage.getLayout = function getLayout(page) {
    return (

        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}