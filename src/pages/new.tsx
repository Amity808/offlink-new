import React, { ReactElement } from 'react'
import AuthMiddleware from '@/middlewares/auth/AuthMiddleware';
import Popup from "reactjs-popup";

import 'reactjs-popup/dist/index.css';

type Props = {}

const New = (): JSX.Element => {
  return (
    <>

      <div>
        <div className="p-4 mt-16">
          <div className="bg-white rounded-md">
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-700">Transaction History</h2>
              <div>
                <table className=' w-full'>
                  <thead>
                  <tr className=' text-white font-bold text-md bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md'>
                    <th className='py-3'>
                        Address
                    </th>
                    <th className='py-3'>
                        Date  
                    </th>
                    <th className='py-3'>
                      Amount
                    </th>
                    <th className='py-3'>
                      Bank Details
                    </th>
                    <th className='py-3'>
                      Status
                    </th>
                  </tr>
                  </thead>
                  <tr className='text-center '>
                    <td>0xBB2262...98a8</td>
                    <td>22-23-2000</td>
                    <td>#20000</td>
                    <td>
                    <Popup trigger={<button className=' border-2 p-2 rounded-lg'>Details</button>}  position="top center">
                          <div className=' text-center flex justify-center items-center flex-col'>
                            <span className=' text-lg font-semibold'>Bank Details</span>
                            <div className=' flex flex-col bg-white/80 w-[10rem] text-center'>
                              <span>
                                <p className=' text-base font-medium'>Bank Name</p>
                                <p>First Bank</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Account Name</p>
                                <p>Bolarinwa Muhdsodiq</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Account Number</p>
                                <p>1232459620</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Phone Number</p>
                                <p>08058746127</p>
                              </span>
                            </div>

                          </div>
                        </Popup>
                    </td>
                    <td>
                    <button>Accept</button>
                    </td>
                  </tr>
                  
                </table>
                {/* <div>
                  <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md ">
                    <div>
                      <span>Address</span>
                    </div>
                    <div>
                      <span>Date</span>
                    </div>
                    <div>
                      <span>Amount</span>
                    </div>
                    <div>
                      <span>Bank Details</span>
                    </div>
                    <div>
                      <span>Satus</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-normal mt-4 space-x-4 px-2 ">
                      <div className=" flex">
                        <span className=' w-[1opx]'>0xBB2262...98a8</span>
                      </div>
                      <div>
                        <span>22-23-2000</span>
                      </div>
                      <div className="px-2">
                        <span>#20000</span>
                      </div>
                      <div className="px-2">
                      <Popup trigger={<button className=' border-2 p-2 rounded-lg'> View Details</button>}  position="top center">
                          <div className=' text-center flex justify-center items-center flex-col'>
                            <span className=' text-lg font-semibold'>Bank Details</span>
                            <div className=' flex flex-col bg-white/80 w-[10rem] text-center'>
                              <span>
                                <p className=' text-base font-medium'>Bank Name</p>
                                <p>First Bank</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Account Name</p>
                                <p>Bolarinwa Muhdsodiq</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Account Number</p>
                                <p>1232459620</p>
                              </span>
                              <span>
                                <p className=' text-base font-medium'>Phone Number</p>
                                <p>08058746127</p>
                              </span>
                            </div>

                          </div>
                        </Popup>
                      </div>
                      <div className="px-2">
                        <button>Accept</button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
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