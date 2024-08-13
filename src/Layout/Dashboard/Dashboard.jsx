import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext); // Get user from context
    const admin= user?.email=='principal@classroom.com'
    const [students, setStudents] = useState([]);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // Fetch user data from MongoDB
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user');
                console.log(response.data);
                
                // Filter out students based on user role
                const filteredStudents = userRole === 'Admin'
                    ? response.data // Admin sees all students
                    : response.data.filter(stu => stu.role !== 'Admin'); // Non-admins see only non-admin students
                
                setStudents(filteredStudents);
            } catch (err) {
                console.log(err);
            }
        };

        // Set user role from context
        if (user) {
            setUserRole(user.role);
        }

        fetchStudents();
    }, [user, userRole]); // Re-run effect when user or userRole changes

    return (
        <div className='flex'>
            <div className='bg-sky-200 p-4 w-60 min-h-screen'>
                {
                    admin && (
                        <>
                            <Link to='/dashboard/allstudent'><li className='list-none py-4'>All Students</li></Link>
                            <Link to='/dashboard/allteacher'><li className='list-none py-4'>All Teachers</li></Link>
                            <Link to='/dashboard/createclassroom'><li className='list-none py-4'>Create ClassRoom</li></Link>
                        </>
                    )
                }
                {
                    !admin && (
                        <Link to='/dashboard/allstudent'><li className='list-none py-4'>All Students</li></Link>
                    )
                }
            </div>
            <div className='w-full min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
