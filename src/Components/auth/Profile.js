import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { baseurl, token } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Confirmindicator } from './Confirmindicator';
import { Nameedit } from './Nameedit';
import { Address } from './Address';

export const Profile = () => {
    const user = useSelector(store => store.auth.user);
    const username = user?.username;
    const [currentIndex, setCurrentIndex] = useState('profile');
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    
    const handleProfileInfo = () => {
        setCurrentIndex('profile');
    };

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/signup';
    };

    const handleDeleteAccount = () => {
        const deleteUser = async () => {
            const id = user?.id;
            try {
                const data = await fetch(baseurl + `/api/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const res = await data.json();
              
                if (data.ok) {
                    dispatch(logout());
                    window.location.pathname = '/signup';
                    toast.error('Account deleted successfully');
                }
            } catch (err) {
                console.log(err);
            }
        };
        deleteUser();
    };

    const handleManageAddress = () => {
        setCurrentIndex('address');
    };

    return (
        <>
            <div className="lg:flex min-h-screen bg-gray-50">
                <div className="lg:ml-20 mt-10 flex flex-col lg:w-72">
                    <div className="border rounded-lg shadow-md bg-white p-4 flex items-center ">
                        <img
                            src="https://img.freepik.com/premium-vector/round-man-character-mockup-icon-flat-color-round-man-icon-blue-jacket-brown-hair-character-template-vector-icon_774778-2423.jpg?ga=GA1.1.1168591914.1718009553&semt=ais_hybrid"
                            className="h-20 w-20 rounded-full"
                            alt="User Avatar"
                        />
                        <div className="ml-4">
                            <span className="text-gray-700 font-semibold text-lg">Hello,</span>
                            <span className="ml-2 text-blue-600 font-medium text-lg">{username}</span>
                        </div>
                    </div>

                    <div className="mt-4 border rounded-lg shadow-md bg-white p-4">
                        <div className="border-b mb-3 pb-3">
                            <span className="text-xl font-medium text-gray-700 flex items-center">
                                <SettingsIcon fontSize="large" color="primary" className="mr-3" /> 
                                Account Settings
                            </span>
                        </div>
                        <div className={`py-2 ${currentIndex === 'profile' ? 'bg-gray-100' : ''}`}>
                            <span
                                className="ml-10 cursor-pointer text-gray-600 hover:text-gray-800"
                                onClick={handleProfileInfo}
                            >
                                Profile Information
                            </span>
                        </div>
                        <div className={`py-2 ${currentIndex === 'address' ? 'bg-gray-100' : ''}`}>
                            <span
                                className="ml-10 cursor-pointer text-gray-600 hover:text-gray-800"
                                onClick={handleManageAddress}
                            >
                                Manage Address
                            </span>
                        </div>
                        <div className="mt-4">
                            <button
                                className="text-lg font-medium text-red-500 flex items-center"
                                onClick={handleLogout}
                            >
                                <LogoutIcon fontSize="large" color="error" className="mr-3" /> 
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 mt-5 lg:ml-10">
                    {currentIndex === 'address' && <Address />}

                    {currentIndex === 'profile' && (
                        <div className="m-4 p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
                            <Nameedit username={username} user={user} baseurl={baseurl} token={token} />
                            <div className="mt-8">
                                <button
                                    className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg flex items-center"
                                    onClick={() => setConfirmDelete(true)}
                                >
                                    Delete Account <FontAwesomeIcon icon={faTrash} className="ml-2" />
                                </button>
                            </div>
                            {confirmDelete && (
                                <Confirmindicator
                                    confirmdelete={(confirm) => {
                                        if (confirm) {
                                            handleDeleteAccount();
                                        }
                                        setConfirmDelete(false);
                                    }}
                                    deletecaption={'Confirm delete'}
                                    cancle={'Cancel'}
                                    message={'Are you sure you want to delete your account?'}
                                />
                            )}
                            <img
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
                                className="mt-10 mx-auto"
                                alt="Profile Footer"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
