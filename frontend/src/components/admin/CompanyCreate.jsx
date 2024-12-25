import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="max-w-4xl mx-auto px-10 py-10">
                <div className="my-10">
                    <h1 className="font-bold text-2xl text-white">Your Company Name</h1>
                    <p className="text-gray-400">What would you like to give your company name? You can change this later.</p>
                </div>

                <Label className="text-white">Company Name</Label>
                <Input
                    type="text"
                    className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500"
                    placeholder="JobHunt, Microsoft etc."
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-10">
                    <button
                        onClick={() => navigate("/admin/companies")}
                        className="px-4 py-2 text-white border border-gray-600 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                        Cancel
                    </button>
                    <Button
                        onClick={registerNewCompany}
                        className="bg-gray-700 text-white hover:bg-gray-600"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
