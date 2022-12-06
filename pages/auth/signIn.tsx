import { NextPage } from "next";
import { useRef, FormEventHandler } from "react";
import { signIn } from "next-auth/react";
import { GrMoney } from "react-icons/gr";
import { useRouter } from "next/router";

interface SignInProps {}

const SignIn: NextPage<SignInProps> = ({}): JSX.Element => {
  const router = useRouter();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    console.log(username.current?.value);
    console.log(password.current?.value);

    const res = await signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
    });

    if (res?.ok) return router.replace("/");
  };
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-slate-100">
      <div className="flex items-center justify-center text-4xl font-bold space-x-4 p-10">
        <GrMoney />
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-black inline-block text-transparent bg-clip-text">
          Login To Exspense
        </span>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-108 h-96 rounded-lg shadow-lg mt-30 bg-white"
      >
        <label className="basis-1/4 flex flex-col w-full p-10">
          <span className="h-10">Username</span>
          <input
            type="text"
            ref={username}
            name="username"
            className="h-10 border border-blue-500 rounded-md indent-2"
            placeholder="Enter user name"
          />
        </label>
        <label className="flex flex-col h-30 w-full pl-10 pr-10 pb-10">
          <span className="h-10">Password</span>
          <input
            type="password"
            ref={password}
            name="password"
            className="h-10 border border-blue-500 rounded-md indent-2"
            placeholder="Enter user password"
          />
        </label>
        <button
          type="submit"
          className="w-96 h-10 ml-auto mr-auto bg-blue-400 rounded-lg text-white hover:bg-blue-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
