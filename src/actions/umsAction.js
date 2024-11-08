"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUm = async (formData) => {
  const data = {
    umNum: formData.get("umnum"),
    umName: formData.get("umname"),
  };

  console.log(data);

  const existingUm = await db.um.findUnique({
    where: {
      umNum: data.umNum,
    },
  });
  if (existingUm) {
    return redirect(`/ums/add?errorMessage=UmNum already exists.`);
  }

  await db.um.create({
    data: {
      umNum: data.umNum,
      umName: data.umName,
    },
  });

  revalidatePath("/ums", "page");
  redirect("/ums");
};
export const getUms = async () => {
  const ums = await db.um.findMany();
  return ums;
};
