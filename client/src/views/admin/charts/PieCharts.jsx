import React, { useState } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar';
import { DoughnutChart, PieChart } from '../../../components/admin/Charts';
import { categories } from "../../../assets/data.json"

const PieCharts = () => {

    const [showsidebar, setShowsidebar] = useState(false);


    const handleSideBar = () => {
        setShowsidebar((prev) => !prev);
        // console.log(showsidebar)
    }

    return (
        <div className='admin-container h-full flex relative'>
            <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />
            <main className="chart-container w-full">
                <h1 className='text-center text-3xl font-bold my-8'>Pie Charts</h1>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <div className='max-w-[25rem]'>
                        <PieChart labels={["Processing", "Shipped", "Delivered"]} data={[12, 22, 45]} backgroundColor={[
                            `hsl(230, 80%, 80%)`,
                            `hsl(170, 80%, 50%)`,
                            `hsl(756, 40%, 50%)`,
                        ]}/>
                    </div>
                    <h2 className='text-2xl font-bold text-center my-10'>Order Fullfilment</h2>
                </section>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <div className='max-w-[25rem]'>
                        <DoughnutChart labels={categories.map((item) => item.heading)} data={categories.map((item) => item.value)} backgroundColor={categories.map(i => `hsl(${i.value * 4}, ${i.value}%, 50%)`)}
                            legends={false} />
                    </div>
                    <h2 className='text-2xl font-bold text-center my-10'>Product Category Ratio</h2>
                </section>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <div className='max-w-[25rem]'>
                        <DoughnutChart labels={["In Stock", "Out Of Stock"]} data={[40, 20]} backgroundColor={["hsl(269, 80%, 40%)", "rgb(53, 162, 255)"]}
                            legends={false} />
                    </div>
                    <h2 className='text-2xl font-bold text-center my-10'>Stock Availability</h2>
                </section>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <div className='max-w-[25rem]'>
                        <DoughnutChart labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]} data={[40, 20, 34, 12, 32]}
                            backgroundColor={[
                                "hsl(110, 80%, 40%)",
                                "hsl(19, 80%, 40%)",
                                "hsl(69, 80%, 40%)",
                                "hsl(300, 80%, 40%)",
                                "rgb(53, 162, 255)",

                            ]}
                            legends={false} />
                    </div>
                    <h2 className='text-2xl font-bold text-center my-10'>Revenue Distribution</h2>
                </section>

                <section className='w-[80%] my-16 mx-auto flex items-center justify-center flex-col'>
                    <div className='max-w-[25rem]'>
                        <DoughnutChart labels={['Admin', 'User']} data={[10, 15]} backgroundColor={["hsl(335, 100%, 38%)", "hsl(44, 98%, 50%)"]} />
                    </div>
                    <h2 className='text-2xl font-bold text-center my-10'>Admin User Distribution</h2>
                </section>
            </main>
        </div>
    )
}

export default PieCharts