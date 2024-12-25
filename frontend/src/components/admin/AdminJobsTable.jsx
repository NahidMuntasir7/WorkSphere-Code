import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal, Trash } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';

const AdminJobsTable = () => {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    const handleDelete = async (jobId) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
                await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`, {
                    withCredentials: true
                });
                toast.success("Job deleted successfully");
                // Refresh the job list
                setFilterJobs(filterJobs.filter(job => job._id !== jobId));
            } catch (error) {
                console.error(error);
                toast.error("Failed to delete the job");
            }
        }
    };

    return (
        <div className="text-white">
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs?.map((job) => (
                        <TableRow key={job._id} className="hover:bg-gray-700">
                            <TableCell>{job?.company?.name}</TableCell>
                            <TableCell>{job?.title}</TableCell>
                            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal className="cursor-pointer" />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-48 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 text-white">
                                        <div
                                            onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                            className='flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 mt-2'>
                                            <Eye className='w-4' />
                                            <span className='flex items-center gap-1'>
                                                Applicants
                                            </span>
                                        </div>
                                        <div
                                            onClick={() => handleDelete(job._id)}
                                            className='flex items-center gap-2 cursor-pointer text-red-500 hover:bg-gray-700 hover:text-red-400 p-2 mt-2'>
                                            <span>🗑</span>
                                            <span>Delete</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}

export default AdminJobsTable;
