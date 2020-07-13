import React from 'react';

const Footer = ()=>{
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por:
            <a className='hover:underline' href='#'>Marcos Pereira</a> / {' '}
            <a className='hover:underline' href='https://www.linkedin.com/in/marcospnascimento/'>Linkedin</a> / {' '}
            <a className='hover:underline' href='https://github.com/marpernas'>Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/images/logo_devpleno.png'/>
                    <img className='inline p-4' src='/images/logo_semana_fsm.png'></img>
                </div>
            </div>
            
        </div>
    )
}

export default Footer