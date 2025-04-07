import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { clearState } from '@/redux/companySlice';
import { clearSstate } from '@/redux/jobSlice';

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      dispatch(clearState());
      dispatch(clearSstate());
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='bg-black border-b border-white border-opacity-20' style={{ fontFamily: 'Google Sans, sans-serif' }}>
      <div className='flex flex-wrap items-center justify-between mx-auto max-w-screen-xl h-16 sm:h-20 lg:h-24 px-3 sm:px-4'>
        <div>
          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white'>
            Work<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]'>Sphere</span>
          </h1>
        </div>
        <div className='flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-12 mt-2 sm:mt-0'>
          <ul className='flex font-medium items-center gap-3 sm:gap-5'>
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li><Link to="/admin/companies" className='text-gray-200 text-sm sm:text-base rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'>Companies</Link></li>
                  <li><Link to="/admin/jobs" className='text-gray-200 text-sm sm:text-base rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'>Jobs</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/" className='text-gray-200 text-sm sm:text-base rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'>Home</Link></li>
                  <li><Link to="/browse" className='text-gray-200 text-sm sm:text-base rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'>Browse</Link></li>
                </>
              )
            }
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-1 sm:gap-2'>
                <Link to="/login">
                  <Button variant="outline" className="text-black text-xs sm:text-sm border-white hover:bg-gray-300 font-bold py-1 sm:py-2 px-2 sm:px-4" style={{ fontFamily: 'Google Sans, sans-serif' }}>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#00A3E0] text-white text-xs sm:text-sm hover:bg-[#007bb5] font-bold py-1 sm:py-2 px-2 sm:px-4" style={{ fontFamily: 'Google Sans, sans-serif' }}>Signup</Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer rounded-full border-2 w-10 h-10 sm:w-12 sm:h-12 bg-clip-border border-transparent bg-gradient-to-r from-[#00A3E0] to-[#90E0EF]">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-64 sm:w-80 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 text-white" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <div>
                    <div className='flex gap-2 space-y-2'>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium text-sm sm:text-base'>{user?.fullname}</h4>
                        <p className='text-xs sm:text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                      </div>
                    </div>
                    <div className='flex flex-col my-2'>
                      {
                        user && user.role === 'student' && (
                          <div className='flex w-fit items-center gap-2 cursor-pointer'>
                            <User2 size={16} />
                            <Button 
                              variant="link" 
                              className="text-white text-sm sm:text-base hover:text-[#00A3E0] hover:bg-transparent font-semibold transition-colors"
                              style={{ textDecoration: 'none', fontFamily: 'Google Sans, sans-serif' }}
                            >
                              <Link to="/profile">View Profile</Link>
                            </Button>
                          </div>
                        )
                      }
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOut size={16} />
                        <Button 
                          onClick={logoutHandler} 
                          variant="link" 
                          className="text-white text-sm sm:text-base hover:text-[#00A3E0] hover:bg-transparent font-semibold transition-colors"
                          style={{ textDecoration: 'none', fontFamily: 'Google Sans, sans-serif' }}
                        >
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;