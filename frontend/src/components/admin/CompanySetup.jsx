import React, { useEffect, useState } from 'react'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'


const CompanySetup = () => {
    const params = useParams();
    useGetCompanyById(params.id);
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    });
    const { singleCompany } = useSelector(store => store.company);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/companies");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null
        })
    }, [singleCompany]);

    return (
        <div style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 sm:px-10 my-10 flex-1">
                <form onSubmit={submitHandler}>
                    <div className="flex items-center gap-5 p-8">
                        <button
                            onClick={() => navigate("/admin/companies")}
                            className="px-4 py-2 text-white border border-gray-600 rounded-md bg-transparent hover:bg-gray-600"
                        >
                            <div className="flex items-center gap-2">
                                <ArrowLeft />
                                <span>Back</span>
                            </div>
                        </button>
                        <h1 className="font-bold text-xl text-white">Company Setup</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-white">Company Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={changeEventHandler}
                                className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500 w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-white">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500 w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-white">Website</Label>
                            <Input
                                type="text"
                                name="website"
                                value={input.website}
                                onChange={changeEventHandler}
                                className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500 w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-white">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500 w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-white">Logo</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={changeFileHandler}
                                className="my-2 bg-gray-800 text-white border-gray-700 placeholder-gray-500 focus:ring-gray-500 w-full"
                            />
                        </div>
                    </div>

                    {loading ? (
                        <Button className="w-full my-4 bg-gray-700 text-white hover:bg-gray-600">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4 bg-gray-700 text-white hover:bg-gray-600">
                            Update
                        </Button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CompanySetup;