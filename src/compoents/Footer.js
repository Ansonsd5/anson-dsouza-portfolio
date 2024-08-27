import React from 'react';

const Footer = ({ linkData }) => {
  return (
    <div className='flex items-center justify-center mx-auto flex-col'>
        <article className='font-mono font-[600] text-center'>
            <div className='uppercase'>Lets Connect</div>
            <div>
            <a href="mailto:anson11sd@gmail.com" rel="noopener noreferrer" alt="Email Me">anson11sd@gmail.com</a>
            </div>
        
            <div className='flex gap-5 py-4 social-icons'>
              {linkData.map((plat) =>(
                <div key={plat.platform}>
                  <a href={plat.link}  target="_blank" rel="noopener noreferrer">
                  <img src={plat.icon} alt={`Follow me on ${plat.platform}`}/>
                  </a>
                </div>
              ))}
            </div>
           
        </article>
        <div className='font-mono cp-right '>© 2024 Anson Dsouza. All rights reserved.</div>
    </div>
  )
}

export default Footer