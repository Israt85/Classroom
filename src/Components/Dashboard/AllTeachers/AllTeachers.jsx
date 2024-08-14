import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllTeachers = () => {
    const [teachers,setTeachers]= useState();
    useEffect(()=>{
        axios.get('https://classroom-server-azure.vercel.app/user')
        .then(res => {
            console.log(res.data);
            // Filter out any users with the role of 'Admin'
            const nonAdminStudents = res.data.filter(stu => stu.role == 'teacher');
            setTeachers(nonAdminStudents);
        })
        .catch(err => {
            console.log(err);
        });
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teachers?.map((teacher, index) => (
                            <tr key={teacher?._id}>
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{teacher?.name}</td>
                                <td className="border px-4 py-2 text-center">{teacher?.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllTeachers;