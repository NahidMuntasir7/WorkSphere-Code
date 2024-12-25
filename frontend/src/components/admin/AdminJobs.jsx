import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { setSearchJobByText } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-10 my-10"> 
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
            style={{ fontFamily: 'Google Sans, sans-serif' }}
          />
          <Button 
            onClick={() => navigate("/admin/jobs/create")} 
            className="bg-gray-700 text-white hover:bg-gray-600"
            style={{ fontFamily: 'Google Sans, sans-serif' }}
          >
            New Jobs
          </Button>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-md">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
}

export default AdminJobs;
