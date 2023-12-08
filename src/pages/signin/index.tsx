// import { headers, cookies } from "next/headers";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { useContext, useState } from "react";
import { supabaseClient } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const params = useParams();
  const router = useRouter();
  const auth = useAuth();
  const formSubmit = () => {
    auth.signIn(email, password);
  };

  const formSignUpSubmit = () => {
    auth.signUp(email, password);
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2'>
      <div>
        <Link
          href='/'
          className='absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
          >
            <polyline points='15 18 9 12 15 6' />
          </svg>{" "}
          Back
        </Link>

        <label
          className='text-md'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='you@example.com'
          required
        />
        <label
          className='text-md'
          htmlFor='password'
        >
          Password
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='••••••••'
          required
        />
        <button
          onClick={formSubmit}
          className='bg-green-700 rounded-md px-4 py-2 text-foreground mb-2'
        >
          Sign In
        </button>
        {/* <button
          formAction={signUp}
          className='border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2'
        >
          Sign Up
        </button> */}
        {params && params.message && (
          <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
            {params.message}
          </p>
        )}
        {/* </form> */}

        <div></div>
      </div>
      <br />
      <hr />

      <div>
        <label
          className='text-md'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='you@example.com'
          required
        />
        <label
          className='text-md'
          htmlFor='password'
        >
          Password
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='••••••••'
          required
        />
        <button
          onClick={formSignUpSubmit}
          className='bg-green-700 rounded-md px-4 py-2 text-foreground mb-2'
        >
          Sign Up
        </button>
        {/* <button
    formAction={signUp}
    className='border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2'
  >
    Sign Up
  </button> */}
        {params && params.message && (
          <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
            {params.message}
          </p>
        )}
        {/* </form> */}

        <div></div>
      </div>
    </div>
  );
};

export default SignIn;
