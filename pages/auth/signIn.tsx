import { NextPage } from "next";
import { useRef, FormEventHandler } from "react";
import { signIn } from "next-auth/react";

interface SignInProps {}

const SignIn: NextPage<SignInProps> = ({}): JSX.Element => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: false,
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <label>
        <span>Username</span>
        <input type="text" ref={username} name="username" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" ref={password} name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
