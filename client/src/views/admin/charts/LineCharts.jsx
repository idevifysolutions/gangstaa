import React, { useState } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar';
import { LineChart } from '../../../components/admin/Charts';

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


const LineCharts = () => {
    const [showsidebar, setShowsidebar] = useState(false);


    const handleSideBar = () => {
        setShowsidebar((prev) => !prev);
        // console.log(showsidebar)
    }

    return (
        <div className='admin-container h-full flex relative'>
            <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />
            <main className="chart-container w-full">
                <h1 className='text-center text-3xl font-bold my-8'>Line Charts</h1>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <LineChart data={[200, 444, 232, 657, 765, 234, 232, 121, 122, 126, 532, 234]} backgroundColor="rgb(53, 162, 255, 0.5)" borderColor="rgb(53, 162, 255)" label="Users" labels={months} />
                    <h2 className='text-2xl font-bold text-center my-10'>Active Users</h2>
                </section>

                <section>
                    <LineChart data={[200090, 444080, 232070, 657000, 765990, 234670, 232080, 121880, 122080, 126070, 532000, 234000]} backgroundColor={"hsla(269, 80%, 40%, 0.4)"} borderColor={"hsl(269, 80%, 40%)"} label="Products" labels={months} />
                    <h2 className='text-2xl font-bold text-center my-10'>Total Products</h2>
                </section>

                <section>
                    <LineChart data={[200090, 444080, 232070, 657000, 765990, 234670, 232080, 121880, 122080, 126070, 532000, 234000]} backgroundColor={"hsla(129, 80%, 40%, 0.4)"} borderColor={"hsl(129, 80%, 40%)"} label="Revenue" labels={months} />
                    <h2 className='text-2xl font-bold text-center my-10'>Total Revenue</h2>
                </section>
            </main>
        </div>
    )
}

export default LineCharts