import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";




const AllSchedule = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold py-5 text-center text-gray-800'>
                All of your gym schedules
            </h1>

            <div className='flex justify-center items-center' >
                <input type="text" placeholder="Search here" className="input py-7" />
            </div>
            <div>
                <div className="overflow-x-auto px-2 py-5">
                    <table className="table table-zebra border text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Title</th>
                                <th>Day</th>
                                <th> Date </th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <th>1</th>
                                <td>Leg Day</td>
                                <td>Saturday</td>
                                <td>2025-03-14</td>
                                <td>12:10:10</td>
                                <td className='flex items-center gap-5'>
                                    <MdDeleteForever className='text-3xl' />
                                    <GrDocumentUpdate className='text-2xl' />

                                    <IoCheckmarkOutline className='text-2xl' />
                                    <IoCheckmarkDoneSharp className='text-2xl' />


                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Leg Day</td>
                                <td>Saturday</td>
                                <td>2025-03-14</td>
                                <td>12:10:10</td>
                                <td className='flex items-center gap-5'>
                                    <MdDeleteForever className='text-3xl' />
                                    <GrDocumentUpdate className='text-2xl' />

                                    <IoCheckmarkOutline className='text-2xl' />
                                    <IoCheckmarkDoneSharp className='text-2xl' />


                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Leg Day</td>
                                <td>Saturday</td>
                                <td>2025-03-14</td>
                                <td>12:10:10</td>
                                <td className='flex items-center gap-5'>
                                    <MdDeleteForever className='text-3xl' />
                                    <GrDocumentUpdate className='text-2xl' />

                                    <IoCheckmarkOutline className='text-2xl' />
                                    <IoCheckmarkDoneSharp className='text-2xl' />


                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Leg Day</td>
                                <td>Saturday</td>
                                <td>2025-03-14</td>
                                <td>12:10:10</td>
                                <td className='flex items-center gap-5'>
                                    <MdDeleteForever className='text-3xl' />
                                    <GrDocumentUpdate className='text-2xl' />

                                    <IoCheckmarkOutline className='text-2xl' />
                                    <IoCheckmarkDoneSharp className='text-2xl' />


                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSchedule;