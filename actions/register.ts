"use server";
import axios from "axios";
import {AxiosRequestConfig} from "axios";
import {UserRes} from "../types";

export const Register = async (e: FormData) => {
  try {
    const name = e.get("name");
    const email = e.get("email");
    const password = e.get("password");

    const user = {email, name, password};

    const options: AxiosRequestConfig = {
      method: "POST",
      url: "http://localhost:3000/api/register",
      headers: {
        "Content-Type": "application-json",
      },
      data: user,
    };

    const {data}: {data: UserRes} = await axios(options);

    if (data.error) {
      throw data.error;
    }
    return data;
  } catch (error: any) {
    throw error;
  }
};
