import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react'
import { motion } from 'framer-motion';

export const ReviewCard = () => {

    
    return (
        <div className='relative h-80 overflow-hidden lg:mt-16  '>
         
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

           
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

           
            <motion.div
                className='flex flex-wrap justify-center '
                initial={{ y: 10 }}
                animate={{ y: -1000 }} 
                transition={{ 
                    duration: 50, 
                    repeat: Infinity, 
                    ease: 'linear',
                    repeatType :"mirror"
                }}
            >
                {mockdata.map((i, index) => (
                    <div key={index} className='border rounded-lg m-5 p-4 w-80 h-auto border-gray-500'>
                        <div className='flex'>
                            <img src={i.profile} alt="Profile" className='rounded-full w-10 h-10' />
                            <span className='font-sans ml-3'>{i.name}</span>
                            <div className='ml-auto'>
                                {i.verified && <VerifiedIcon color='primary' fontSize='small' />}
                            </div>
                        </div>
                        <div className='m-3'>
                            <p>{i.message}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};



var mockdata = [
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained and also products are hygine 100 %',
        verified : false
    },{
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    }, {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained and also products are hygine 100 %',
        verified : false
    },{
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    } ,{
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained and also products are hygine 100 %',
        verified : false
    },{
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : false
    },
    {
        name : 'suabsh',
        profile : 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1371347197313175554%2FmUp6R7_G_normal.jpg&w=1080&q=75',
        message : 'Leads are good and well maintained',
        verified : true
    }
 
]