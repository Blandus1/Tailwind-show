
function Navbar() {

  return (
    <>
    <div class="  bg-[#ecf7fa] relative p-15">
   <div class="flex" >
    <img src="/linkedIn.svg" class="w-[35px] h-[36.23234px] opacity-100 absolute top-[50px] left-38 rotate-0 "/>
            <div class="w-px h-15 absolute top-10 left-60 rounded-xs bg-gray-300 text-center"></div>

   <img src="/twitter.svg"  class="w-[35px] h-[36.23234px] opacity-100 absolute top-[50px] left-75 rotate-0"/>
            <div class="w-px h-15 absolute top-10 left-100 rounded-xs bg-gray-300 text-center"></div>

   <img src="/facebook.svg"  class="w-[35px] h-[36.23234px] opacity-100 absolute top-[50px] left-112 rotate-0"/>
            <div class="w-px h-15 absolute top-10 left-140 rounded-xs bg-gray-300 text-center"></div>

   <img src="/youtube.svg"  class="w-[35px] h-[36.23234px] opacity-100 absolute top-[50px] left-154 rotate-0"/>
            <div class="w-px h-15 absolute top-10 left-180 rounded-xs bg-gray-300 text-center"></div>

   <img src="/instgram" class="w-[35px] h-[36.23234px] opacity-100 absolute top-[50px] left-196 rotate-0"/>
    </div>

    <section  class="flex space-x-4">
    <p class="w-[px] h-[19px] absolute top-[58.62px] left-550 font-['Rubik'] font-normal text-[20px] leading-[100%] text-[#0B132A]">Online Services<span class="relative inline-block after:content-['^'] after:absolute after:right-0 after:top-1/2 after:left-5 after:-translate-y-4.5 after:rotate-180"></span></p>
            <div class="w-px h-12 absolute top-10 left-590 rounded-xs bg-gray-300 text-center"></div>

    <p class="w-[53px] h-[19px] absolute top-[58.62px] left-600 font-['Rubik'] font-normal text-[20px] leading-[100%] text-[#0B132A]">Publications</p>
    </section>
  
    </div>
    
    </>
  )
}

export default Navbar;