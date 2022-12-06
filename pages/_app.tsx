import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import AuthLayout from "../components/AuthLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
