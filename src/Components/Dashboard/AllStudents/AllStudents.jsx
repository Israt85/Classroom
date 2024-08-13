import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(res => {
                console.log(res.data);
                // Filter out any users with the role of 'Admin'
                const nonAdminStudents = res.data.filter(stu => stu.role !== 'Admin');
                setStudents(nonAdminStudents);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
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
                        students?.map((stu, index) => (
                            <tr key={stu?._id}>
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{stu?.name}</td>
                                <td className="border px-4 py-2 text-center">{stu?.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllStudents;
