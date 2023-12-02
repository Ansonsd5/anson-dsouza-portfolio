import React from 'react'
import { socialConnections } from '../utils/config'

const Footer = (props) => {
  const {platform,icon,link} =props.linkData;
  return (
    <div className='flex items-center justify-center mx-auto'>
        <article className='font-mono font-[600] text-center'>
            <div className='uppercase'>Lets Connect</div>
            <div>
            <a href="mailto:ansonsd11@gmail.com">ansonsd11@gmail.com</a>
            </div>
        
            <div className='flex gap-5 py-4'>
              {socialConnections.map((plat) =>(
                <div key={plat.platform}>
                  <a href={plat.link}  target="_blank" rel="noopener noreferrer">
                  <img src={plat.icon} alt={plat.platform}/>
                  </a>
                </div>
              ))}
            </div>
        </article>
    </div>
  )
}

export default Footer