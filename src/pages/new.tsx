import React, { ReactElement } from 'react'
import AuthMiddleware from '@/middlewares/auth/AuthMiddleware';


type Props = {}

const New = (): JSX.Element => {
  return (
    <div>
    <div className="p-4">
      <div className="bg-white p-4 rounded-md">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
          <div>
            <div>
              <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Email</span>
                </div>
                <div>
                  <span>Role</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
                <div>
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div className="px-2 flex">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
              </div>
              <>
                <button
  data-ripple-light="true"
  data-popover-target="popover-animation"
  className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
>
  Show Popover
</button>
<div
  data-popover="popover-animation"
  data-popover-mount="opacity-100 scale-100"
  data-popover-unmount="opacity-0 scale-0 pointer-events-none"
  data-popover-transition="transition-all duration-200 origin-bottom"
  className="absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
>
  This is a very beautiful popover, show some love.
</div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

New.getLayout = function getLayout(page: ReactElement) {
    return (
      <AuthMiddleware>
        {/* <Auth login="Register" accountStatus="Already have an account? " urlName="Login" url="login"> */}
        {page}
        {/* </Auth> */}
      </AuthMiddleware>
    );
  };
  

export default New