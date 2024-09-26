import React, { useEffect, useState } from 'react';
import { baseurl, token } from '../../utils/constants';
import { useSelector } from 'react-redux';
import '../Productdetail/Productoverview.css';
import { Addresscard } from './Addresscard';


export const Fetchaddress = () => {

    const [data, setData] = useState(null);
    const id = useSelector((store) => store.auth.user.id);
    const filterdata = data?.data?.filter((i) => i?.attributes?.userid === id);

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
    }, [data]);

    return (
        <div className="mt-8">
            <div className="container border-t-lime-700 border-t-2 ">
                <div className="lg:flex lg:flex-wrap justify-center  ">
                   
                    {filterdata?.length <= 0 ? (
                        
                        <div className=" font-semibold lg:text-xl text-gray-400 flex justify-center items-center ">
                            Click Add New to merge your address
                        </div>
                    ) : (
                        <Addresscard filterdata={filterdata}  />
                    )}
                </div>
            </div>
        </div>
    );
};
