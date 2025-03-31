import React from 'react';

const AddSchedule = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-2">
            <h1 className="text-3xl font-semibold py-5 text-center text-gray-800">
                Add Your Gym Schedule Here
            </h1>

            <div className="flex justify-center items-center">
                <form className="w-full sm:w-96 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                    <fieldset className="w-full">
                        {/* <legend className="block text-lg text-gray-700 mb-6">Schedule</legend> */}

                        {/* Field Container for Left and Right */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">

                            {/* Left Side Fields */}
                            <div className="mb-6">
                                <label className="block text-lg text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter the Title"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="day" className="block text-lg text-gray-700 mb-2">Select a Day:</label>
                                <select
                                    id="day"
                                    name="day"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                            </div>

                            {/* Right Side Fields */}
                            <div className="mb-6">
                                <label htmlFor="date" className="block text-lg text-gray-700 mb-2">Select a Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="time" className="block text-lg text-gray-700 mb-2">Select a Time:</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddSchedule;
