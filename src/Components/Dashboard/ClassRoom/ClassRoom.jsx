import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ClassRoom = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
         console.log(data)
        const classInfo = {
            name: data.name,
            starttime: data.starttime,
            endtime: data.endtime,
            days: data.days
        }
        axios.post('https://classroom-server-azure.vercel.app/class',classInfo )
        .then(res=>{
            if(res.data.insertedId){
                console.log('Classroom added');
                reset() 
            }
        })
        
        .catch(err=>console.log(err))

        }
    return (
        <div className='w-1/2 mx-auto my-6 bg-blue-200 h-96'>
             <form 
                    onSubmit={handleSubmit(onSubmit)}
                    
                    className=" p-3 mx-auto">
                        
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text"
                             {...register("name")} 
                             
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                       <div className='flex gap-4'>
                       <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">start time</label>
                            <input type="text" 
                            {...register("starttime")} 
                            
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">end time</label>
                            <input type="text" 
                            {...register("endtime")} 
                            
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                       </div>
                        <div className="flex items-start mb-5">
                              
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Days</label>
                            <input type="text"
                             {...register("days")} 
                             
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                            
                        </div>
                        <div>
                            <button type="submit" className="text-white w-full bg-purple-900 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                        </div>
                    </form>
        </div>
    );
};

export default ClassRoom;