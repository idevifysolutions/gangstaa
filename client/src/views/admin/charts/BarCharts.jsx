import React, { useState } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import { BarChart } from '../../../components/admin/Charts';


const months = [
    "Janruary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]


const BarCharts = () => {


    const [showsidebar, setShowsidebar] = useState(false);


    const handleSideBar = () => {
        setShowsidebar((prev) => !prev);
        console.log(showsidebar)
    }

    return (
        <div className='admin-container h-full flex relative'>
            <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />

            <main className="chart-container w-full">
                <h1 className='text-center text-3xl font-bold my-8'>Bar Charts</h1>
                <section className='w-[80%] my-16 mx-auto'>
                    <BarChart data_1={[200, 444, 232, 657, 765, 234, 232]} data_2={[123, 435, 345, 234, 435, 345, 432]} title_1="Products" title_2="Users" bgColor_1={`hsl(260, 50%, 30%)`} bgColor_2={`hsl(360, 90%, 90%)`} />
                    <h2 className='text-center text-2xl font-bold my-12'>Top Selling Products And Top Customers</h2>
                </section>
 
                <section className='w-[80%] my-16 mx-auto'>
                    <BarChart horizontal={true} labels={months} data_1={[200, 444, 232, 657, 765, 234, 232, 231, 345, 565, 424, 675]} data_2={[]} title_1="Orders" title_2="" bgColor_1={`hsl(180, 40%, 50%)`} bgColor_2={''} />
                    <h2 className='text-center text-2xl font-bold my-12'>Orders Throughout the year</h2>
                </section>
            </main>
        </div>
    )
}

export default BarCharts