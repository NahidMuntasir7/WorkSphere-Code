import React, { useEffect } from 'react';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector((store) => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllApplicants();
    }, [params.id, dispatch]);

    return (
        <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-10"> 
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-300 my-6 text-center">
                    Applicants ({applicants?.applications?.length || 0})
                </h1>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-md shadow-lg border border-gray-700">
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    );
};

export default Applicants;
