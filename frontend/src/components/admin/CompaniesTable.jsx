import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { COMPANY_API_END_POINT } from '@/utils/constant';

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany = companies.length >= 0 && companies.filter((company) => {
      if (!searchCompanyByText) {
        return true;
      };
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  const handleDelete = async (companyId) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      try {
        await axios.delete(`${COMPANY_API_END_POINT}/delete/${companyId}`, {
          withCredentials: true,
        });
        toast.success("Company deleted successfully");
        // Refresh the company list by filtering out the deleted company
        setFilterCompany(filterCompany.filter(company => company._id !== companyId));
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete the company");
      }
    }
  };



  return (
    <div className="text-white">
      <Table className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <TableRow key={company._id} className="hover:bg-gray-700">
              <TableCell>
                {/* Logo with white background and bigger borders */}
                <Avatar className="rounded-lg border-4 border-white bg-white">
                  <AvatarImage src={company.logo} className="rounded-lg" />
                </Avatar>
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger><MoreHorizontal className="cursor-pointer" /></PopoverTrigger>
                  <PopoverContent className="w-48 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 text-white">
                    {/* Edit Button */}
                    <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700'>
                      <Edit2 className='w-4' />
                      <span>Edit</span>
                    </div>
                    {/* Delete Button */}
                    <div
                      onClick={() => handleDelete(company._id)}
                      className='flex items-center gap-2 cursor-pointer text-red-500 hover:text-red-400 p-2 mt-2 hover:bg-gray-700'
                    >
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
  );
};

export default CompaniesTable;