import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div  className=''> 
     <h2 className='text-4xl p-5 text-center flex justify-center text-blue-800 font-bold '>OPTIGRIT</h2>
     <div className=' flex h-screen  justify-center flex-wrap '>
     
    


<div className='   p-15 m-5   h-auto  w-80 rounded-xl border-blue-500 border-4 w-'>
<Image src="/5.svg" height={450} width={450}/>
<h1 className='text-3xl justify-center flex p-5 text-bold'>Task Management</h1>
<p className='p-3 flex align-center justify-center text-center'>Experience seamless task management, redefining your work process for enhanced organization, collaboration, and productivity.</p>
<button className='text-bold shadow-lg bg-white p-3  ml-16 text-center flex align-center justify-center rounded-xl'>Learn More</button>
</div>
<div className='p-15 m-5  h-auto  w-80 rounded-xl border-blue-500 border-4'>
<Image src="/5.svg" height={450} width={450}/>
<h1 className='text-3xl justify-center flex p-5 text-bold'>Task Management</h1>
<p className='p-3 flex align-center justify-center text-center'>Experience seamless task management, redefining your work process for enhanced organization, collaboration, and productivity.</p>
<button className='text-bold shadow-lg bg-white p-3 rounded-xl ml-16 text-center flex align-center justify-center '>Learn More</button>
</div>
<div className='p-15 m-5   h-auto  w-80 rounded-xl border-blue-500 border-4'>
<Image src="/5.svg" height={450} width={450}/>
<h1 className='text-3xl justify-center flex p-5 text-bold'>Task Management</h1>
<p className='p-3 flex align-center justify-center text-center'>Experience seamless task management, redefining your work process for enhanced organization, collaboration, and productivity.</p>
<button className='text-bold shadow-lg bg-white p-3 rounded-xl ml-16 text-center flex align-center justify-center '>Learn More</button>
</div>
     </div>

      
    </div>
  )
}

export default page