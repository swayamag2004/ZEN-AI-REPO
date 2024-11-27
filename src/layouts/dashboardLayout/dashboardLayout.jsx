import { Outlet, useNavigate} from 'react-router-dom'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react';
import ChatList from '../../compoents/chatList/ChatList';

const DashboardLayout = () => {

    const {userId,isLoaded}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        if(isLoaded && !userId){
            navigate("/sign-in");
        }
    },[isLoaded,userId,navigate]);

    if(!isLoaded)return "loading...";
  return (
    <div className='dashboardLayout'>
        <div className="menu"><ChatList/></div>
        <div className="content"><Outlet/></div>
    </div>
  )
}

export default DashboardLayout