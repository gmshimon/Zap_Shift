"use client";
import Image from "next/image";
import brand from "../../../public/assets/brand.png";
import authImage from "../../../public/assets/authImage.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "@/utils/toastUtils";
import { createUser, userSliceReset } from "@/lib/Features/userSlice";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const { isCreateUserLoading, isCreateUserError, isCreateUserSuccess } =
    useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  useEffect(()=>{
    if( isCreateUserSuccess ){
      showSuccessToast("Registration successful! Please login.");
      dispatch(userSliceReset());
    }
    if( isCreateUserError ){
      showErrorToast("Registration failed. Please try again.");
      dispatch(userSliceReset());
    }
  },[dispatch, isCreateUserError, isCreateUserSuccess])


  const handleRegister = async () => {
    // Registration logic goes here
    console.log("Registering user:", { name, email, password });
    dispatch(createUser({ name, email, password }));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f3ffe0] via-white to-[#cdeaa3] text-slate-900">
       <ToastContainer/>
      <Image
        className="absolute left-6 top-6 w-28 drop-shadow-sm"
        alt="brand logo"
        src={brand}
        priority
      />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-12 px-6 py-14 lg:grid-cols-2 lg:py-16">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-7 rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-lime-200/70 backdrop-blur">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lime-700">
                  Register with ZapShift
                </p>
                <h1 className="text-4xl font-semibold text-slate-900">
                  Create an Account
                </h1>
                <p className="text-sm text-slate-600">
                  Keep schedules aligned and approvals moving by signing in to
                  your dashboard.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm text-slate-700" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="h-11 rounded-xl border border-lime-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus-visible:border-lime-300 focus-visible:ring-2 focus-visible:ring-lime-300"
                    type="name"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-slate-700" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="h-11 rounded-xl border border-lime-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus-visible:border-lime-300 focus-visible:ring-2 focus-visible:ring-lime-300"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-slate-700" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="h-11 rounded-xl border border-lime-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus-visible:border-lime-300 focus-visible:ring-2 focus-visible:ring-lime-300"
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <Button
                onClick={handleRegister}
                disabled={isCreateUserLoading}
                className="h-11 w-full rounded-xl bg-[#CBEB66] text-slate-900 shadow-[0_16px_40px_-18px_rgba(132,204,22,0.65)] transition hover:-translate-y-0.5 hover:bg-[#c4e558]"
              >
                {isCreateUserLoading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-lime-800 mr-2"></span>
                    Registering...
                  </span>
                ) : (
                  "Register"
                )}
              </Button>

              <Link href="/login">
                <p className="text-sm text-slate-700">
                  Already have an account?{" "}
                  <button className="font-semibold text-lime-800 underline decoration-lime-400 underline-offset-4 transition hover:text-slate-900 cursor-pointer">
                    Login
                  </button>
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:block hidden">
            <div className="relative flex h-full min-h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#c0ce98]/70 shadow-2xl ring-1 ring-lime-200/70">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-lime-100/60" />
              <Image
                className="relative max-h-[520px] w-auto object-contain drop-shadow-xl"
                alt="auth image"
                src={authImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
