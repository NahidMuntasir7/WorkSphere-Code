import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import CompaniesTable from './CompaniesTable';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input, dispatch]);

  return (
    <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5"  // Adjusted width for better control
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
            style={{ fontFamily: 'Google Sans, sans-serif' }}
          />
          <Button 
            onClick={() => navigate("/admin/companies/create")} 
            className="bg-gray-700 text-white hover:bg-gray-600 ml-4"
            style={{ fontFamily: 'Google Sans, sans-serif' }}
          >
            New Company
          </Button>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-md">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
