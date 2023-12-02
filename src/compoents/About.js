import React from 'react';
import { ABOUTTEXT, SELF_IDENTITY } from '../utils/textConstant';

const About = () => {
  return (
    <div className='flex items-center justify-center mx-auto flex-col font-mono font-[600]'>
        
        <article className='leading-loose mt-6 mb-8'>
        <div className='text '>{ABOUTTEXT.welcomeText}</div>
        <div>I am<span className='uppercase text-xl my-underline font-semibold ml-3 font-[ui-sans-serif]'>{ABOUTTEXT.myName}</span></div>
        <div className=''>{ABOUTTEXT.empoweringText}</div>
        
        </article>
     
        <article className='p-4  about-me relative'>
        <div>{SELF_IDENTITY.ABOUTME}</div>
        </article>
        

    </div>
  )
}

export default About