import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: NextPage<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/auth/signIn");
  }, [status, router]);

  return <div>{children}</div>;
};

export default AuthLayout;
