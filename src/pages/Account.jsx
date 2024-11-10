import React from "react";

const Account = () => {
  return (
    <>
      <div className="font-bold text-4xl text-center my-12">Your account</div>

      <section id="account" className="flex flex-col items-center">
        <div id="info" className="">
          <i class="fa-solid fa-circle-user size-36 text-9xl text-gray-300 text-center"></i>
        </div>
        <p className="text-center text-2xl font-semibold m-4 mb-4">Pook Thatchai</p>

        <div
          id="top-container"
          className="flex flex-col items-center mb-4 justify-center gap-2 container lg:gap-6 lg:my-4 lg:flex-row mx-auto"
        >
          <button className="acc-btn ">Personal</button>
          <button className="acc-btn ">Address</button>
          <button className="acc-btn">Change picture</button>
          <button className="acc-btn">Change password</button>
        </div>
      </section>

      <section id="bt-container" className="my-6 mx-4 lg:my-10 lg:m-0">
        <div
          id="User"
          className="container mx-auto p-4 gap-2 rounded-xl flex flex-col bg-gray-50 border-solid border-gray-400 lg:p-14 lg:w-5/6"
        >
          <div id="user" className="flex justify-between">
            <p className="text-left">User</p>
            <p className="text-right block w-full">Pook1234</p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div id="user" className="flex justify-between">
            <p className="text-left w-full">Name</p>
            <p className="text-right block w-full">Pook Thatchai</p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div id="user" className="flex justify-between">
            <p className="text-left w-full">E-mail</p>
            <p className="text-right block w-full">mymail@email.com</p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div id="user" className="flex justify-between">
            <p className="text-left w-full">Phone number</p>
            <p className="text-right block w-full">099-999-9999</p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div id="user" className="flex justify-between">
            <p className="text-left w-full">Gender</p>
            <p className="text-right block w-full">Male</p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div id="user" className="flex justify-between">
            <p className="text-left w-full">Date of birth</p>
            <p className="text-right block w-full">31-10-1991</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
