import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../../db/prismaDb";
import bcrypt from "bcryptjs";
import {User} from "../../../../types";

export const POST = async (req: NextRequest) => {
  try {
    const reqBody: User = await req.json();

    const {name, email, password} = reqBody;
    console.log(name);
    // check user exist
    const user = await prisma.user.findUnique({
      where: {email},
    });

    if (!name && !email) {
      return NextResponse.json({error: "Please enter your email && name"});
    }
    if (!email) return NextResponse.json({error: "Please enter your email"});

    if (!name) {
      return NextResponse.json({error: "Please write your name"});
    }
    if (!password) {
      return NextResponse.json({error: "Please Enter your password"});
    }
    if (user) return NextResponse.json({error: "Invalid Email"});

    //   hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({
      message: `Welcome ${name}`,
      success: true,
      newuser,
    });
  } catch (error: any) {
    throw error;
  }
};
