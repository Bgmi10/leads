import React, { useEffect, useState } from 'react';
import { baseurl, token } from '../../utils/constants';
import { useSelector } from 'react-redux';
import '../Productdetail/Productoverview.css';

export const Fetchaddress = () => {
    const [data, setData] = useState(null);
    const id = useSelector((store) => store.auth.user.id);
    const filterdata = data?.data?.filter((i) => i.attributes.userid === id);

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const res = await fetch(baseurl + `/api/addresses/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.log(err);
            }
        };
        fetch_data();
    }, []);

    return (
        <div className=" bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 ">
            <div className="container ">
                <div className="lg:flex lg:flex-wrap justify-center ">
                    {filterdata?.length <= 0 ? (
                        <div className=" font-semibold lg:text-xl text-gray-400 flex justify-center items-center ">
                            Click Add New to merge your address
                        </div>
                    ) : (
                        filterdata?.map((i) => (
                            <div key={i.id} className="border p-4 m-4 rounded-lg shadow-md bg-white">
                                <div className="font-bold text-lg text-gray-700">
                                    <span>{i.attributes.name}</span>
                                </div>
                                <div className="mt-2 text-gray-600">
                                    <span>{i.attributes.mobilenumber}</span>
                                </div>
                                <div className="mt-2 text-gray-600">
                                    <span>{i.attributes.address}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
