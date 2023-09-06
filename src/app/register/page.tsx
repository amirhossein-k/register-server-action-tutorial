"use client";
import {toast} from "react-toastify";
import {Register} from "../../../actions/register";
import {ToastContainer} from "react-toastify";
const page = async () => {
  const userRegister = async (e: FormData) => {
    const resRegister = Register(e);

    // use reat-toastify
    toast.promise(resRegister, {
      pending: {
        render() {
          return "plaese wait";
        },
      },
      success: {
        render({data}: any) {
          return data.message;
        },
      },
      error: {
        render({data}: any) {
          return data.message;
        },
      },
    });
  };
  return (
    <div className=" h-screen flex items-center justify-center  bg-black ">
      <ToastContainer autoClose={2000} />
      <form
        action={(e) => userRegister(e)}
        className="bg-white p-3 flex gap-2 flex-col"
      >
        <div className=" bg-stone-100 p-1 py-3 shadow-md">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            placeholder="name..."
            name="name"
            className="px-1 py-2 text-md"
          />
        </div>
        {/* email */}
        <div className=" bg-stone-100 p-1 py-3 shadow-md">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Email..."
            name="email"
            className="px-1 py-2 text-md"
          />
        </div>
        {/* paswwrod */}
        <div className="bg-stone-100 p-1 py-3 shadow-md">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password..."
            name="password"
            className="px-1 py-2 text-md"
          />
        </div>

        <div className="bg-blue-300 text-center py-2 w-1/2 m-auto rounded hover:bg-blue-400 cursor-pointer hover:text-white">
          <button type="submit">register</button>
        </div>
        <div>
          Are you memeber?
          <span className="cursor-pointer ml-2 hover:text-blue-300 hover:text-lg">
            Log in
          </span>
        </div>
      </form>
    </div>
  );
};

export default page;
