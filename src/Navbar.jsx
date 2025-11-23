
function Navbar() {

  return (
    <>
    <div class="  bg-[#ecf7fa] relative p-8">
   <div class="flex " >
    <img src="/linkedIn.svg" class="w-3 h-[36.23234px] opacity-100 absolute top-5 left-15 "/>
            <div class="w-px h-10 absolute top-4 left-22 rounded-xs bg-gray-300 text-center"></div>

   <img src="/twitter.svg"  class="w-3 h-[36.23234px] opacity-100 absolute top-5 left-27 "/>
            <div class="w-px h-10 absolute top-4 left-35 rounded-xs bg-gray-300 text-center"></div>

   <img src="/facebook.svg"  class="w-1.5 h-[36.23234px] opacity-100 absolute top-5 left-39 "/>
            <div class="w-px h-10 absolute top-4 left-48 rounded-xs bg-gray-300 text-center"></div>

   <img src="/youtube.svg"  class="w-3 h-[36.23234px] opacity-100 absolute top-5 left-52 "/>
            <div class="w-px h-10 absolute top-4 left-60 rounded-xs bg-gray-300 text-center"></div>

   <img src="/instgram.svg" class="w-3 h-[36.23234px] opacity-100 absolute top-5 left-65"/>
    </div>

    <section  class="flex">
    <p class="w-[px] h-[19px] absolute top-7 left-250 font-['Rubik'] font-normal text-[17px] leading-[100%] text-[#0B132A]">Online Services<span class="relative inline-block after:content-['^'] after:absolute after:right-0 after:top-1/2 after:left-5 after:-translate-y-4.5 after:rotate-180"></span></p>
            <div class="w-px h-10 absolute top-3 left-292 rounded-xs bg-gray-300"></div>

    <p class="w-px h-[19px] absolute top-7 left-300 font-['Rubik'] font-normal text-[17px] leading-[100%] text-[#0B132A]">Publications</p>
    </section>
  
    </div>
    
    </>
  )
}

export default Navbar;