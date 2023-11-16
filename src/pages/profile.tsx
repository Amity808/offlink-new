import React, { ReactElement } from 'react'
import  Navbar from '@/components/Navbar';
import { truuncateAddress } from '@/helpers/truncateAddress';
import { identiconAddress } from '@/helpers/BlockieAddress';
import { useAccount } from 'wagmi';
import WagmiWrapperLayout from '@/layouts/Wagmi';
import AuthMiddleware from '@/middlewares/auth/AuthMiddleware';
import ConnectLayout from '@/layouts/Connect';


const Profile = () => {
    const { address } = useAccount()
    return (
    <div>
      
        <div className=" flex justify-center items-center flex-col">
      <div className=" w-full h-[300px] max-md:h-[250px] max-sm:h-[200px] bg-[#b2b6ef]">
        <div className=" relative flex justify-center items-center mt-[15rem] max-md:mt-[12rem] max-sm:mt-[140px] rounded-lg">
          <div className=' rounded-xl'>
          {identiconAddress(`0x${address}` , 30)}
          </div>
        </div>
      </div>
      <div className=" mt-[4rem]">
        <div className=" flex justify-center items-center flex-col gap-7">
          <span>
            <h1 className=" text-[48px] font-bold">Tayo AdeTayo</h1>
          </span>
          <span className=" text-[24px] font-normal mt-[1rem]">
            {truuncateAddress(`0x${address}` )}
          </span>
          <div className=" flex flex-row justify-between mt-[2rem] gap-4">
            <span className=" flex justify-center items-center flex-col">
                <p className=" text-[24px] max-sm:text-[18px]">Phone No</p>
                <p>090999000</p>
            </span>
            <div className=" border-l-2 border-black/70"></div>
            <span className=" flex justify-center items-center flex-col">
                <p className=" text-[24px] max-sm:text-[18px]">Account no</p>
                <p>090999000</p>
            </span>
            <div className=" border-l-2 border-black/70"></div>
            <span className=" flex justify-center items-center flex-col">
                <p className=" text-[24px] max-sm:text-[18px]">Bank Name</p>
                <p>First Bank</p>
            </span>
          </div>
        <button className=" mt-7">Update Profile</button>
        </div>
      </div>
    </div>
    </div>
  )
}



Profile.getLayout = function getLayout(page: ReactElement) {
    return (
      <WagmiWrapperLayout>
        <AuthMiddleware>
          <ConnectLayout>
            <Navbar />
            {page}
          </ConnectLayout>
        </AuthMiddleware>
      </WagmiWrapperLayout>
    );
  };


export default Profile