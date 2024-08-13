import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(res => {
                console.log(res.data);
                // Filter out any users with the role of 'Admin'
                const nonAdminStudents = res.data.filter(stu => stu.role == 'student');
                setStudents(nonAdminStudents);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleDelete=(user)=>{
         console.log('clicked');

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axios.delete(`http://localhost:5000/user/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            
                        }
                    })
                    


            }
        });


    }

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((stu, index) => (
                            <tr key={stu?._id}>
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{stu?.name}</td>
                                <td className="border px-4 py-2 text-center">{stu?.email}</td>
                                <td className="border px-4 py-2 text-center">{stu?.role} </td>
                                <button onClick={()=>handleDelete(stu)} className='text-xl my-2'><RiDeleteBin5Fill /> </button>
                              
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllStudents;
