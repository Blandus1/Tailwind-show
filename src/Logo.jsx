import logo from './assets/logo.png';
import call from './assets/call.svg';
import info from './assets/info.svg';

function Logo(){

    return(
        <>
         <div class="bg-[#ffffff] relative p-50"></div>
        <div class="flex">
         <img  src={logo} class="w-90 h-50  absolute top-45 left-50"/>
         <img src={call}  class="w-[35px] h-[36.23234px] opacity-100 absolute top-55 left-510 rotate-0 "/><p class="w-[71px] h-[65px] absolute top-50 left-525"><span class="text-blue-700 font-bold">4044</span> Toll Free lines</p>
                     <div class="w-px h-15 absolute top-50 left-560 rounded-xs bg-gray-300 text-center"></div>

         <img src={info} class="w-[35px] h-[36.23234px] opacity-100 absolute top-55 left-575 rotate-0  "/><p class="w-[71px] h-[65px] absolute top-50 left-590 "><span class=" text-blue-700 font-bold">info@rssb.rw</span> Reach to us</p>

        </div>
       
        </>
    )
}

export default Logo;