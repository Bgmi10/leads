import React from 'react';

export const Whatsapp = () => {

    const handleclick = () => {
    const phoneNumber = '9176745857'
    const whatsapp_api = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsapp_api)

    }
    return (
        <div className='fixed bottom-4 right-4 z-10' onClick={handleclick}>
            <img
                src='https://storage.googleapis.com/bik-assets/bap%2Ffab-assets%2Fimages%2Fbik%2FwhatsappOg.png'
                alt='WhatsApp Icon'
                className='w-12 h-12 rounded-full cursor-pointer'
            />
        </div>
    );
};
