import React, { useReducer, useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'

const Story = () => {
    const frameRef=useRef('null')
    const handleMouseLeave=()=>{

    }
    const handleMouseMove=()=>{
const {clientX,clientY}=e;
const element= frameRef.current;
if(!element) return;
const rect=element.getBoundingClientRect()
const x=clientX-rect.left;
const y=clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=((y-centerY)/centerY)*-10
const rotateY=((x-centerX)/centerX)*10

gsap.to(element,{
    duration:0.3,
    rotateX,
    rotateY,
    transformPerspective:500,
    ease:'power1.inOut'
})
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
<div className='flex size-full flex-col items-center py-10 pb-24'>
<p className='text-sm uppercase font-general md:text-[10px]'>The multiversal ip world</p>

<div className='relative size-full'>
<AnimatedTitle title="The story of a hidden realm" sectionId="story" containerClass="mt-5 pointer-events-none
mix-blend-difference relative z-10"/>
<div className='story-img-container'>
<div className='story-img-mask'>
<div className='story-img-content'>
<img src='/img/entrance.webp' alt='entrance' onMouseLeave={handleMouseLeave}
onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove}  className='object-contain' ref={frameRef}/>
</div>
</div>
</div>
</div>
</div>
    </section>
  )
}

export default Story