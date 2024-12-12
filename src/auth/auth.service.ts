import { envConfig } from "../config/env.config";
import { compare, encrypt } from "../encrypt/bcrypt.service";
import prisma from "../prisma/prisma.config";
import jwt from "jsonwebtoken";

export async function registerService(data: any) {
  try {
    const password = encrypt(data.password);
    data.password = password;

    const created = await prisma.user.create({
      data,
    });

    const { id, name, email } = created;

    const token = jwt.sign({ id, name, email }, envConfig.JWT_SECRET, {
      expiresIn: "30d",
    });

    return {
      success: true,
      data: {
        user: {
          id,
          name,
          email,
        },
        token,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  } finally {
    await prisma.$disconnect();
  }
}

export async function loginService(data: any) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!user) return { success: false, data: "Error in login" };

    if (!compare(data.password, user.password))
      return { success: false, data: "Error in login" };

    const { id, name, email } = user;

    const token = jwt.sign({ id, name, email }, envConfig.JWT_SECRET, {
      expiresIn: "30d",
    });

    return {
      success: true,
      data: {
        user: {
          id,
          name,
          email,
        },
        token,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
}
