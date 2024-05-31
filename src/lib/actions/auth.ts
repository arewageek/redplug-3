import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";

class Authorization {
  session = async () => {
    const sess = await getServerSession(authOptions);
    const user = sess?.user;
    console.log({ user });
    return user;
  };

  me = async () => {
    const session = await this.session();
    const email = session?.email as string;
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  };
}

export const authorization = new Authorization();
