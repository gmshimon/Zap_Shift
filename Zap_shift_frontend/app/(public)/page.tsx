"use client";
import Banner from "@/components/Banner/Banner";
import CustomerSatisfaction from "@/components/CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "@/components/FAQ/FAQ";
import OurServices from "@/components/OurServices/OurServices";
import OurSupport from "@/components/OurSupport/OurSupport";
import { userSliceReset } from "@/lib/Features/userSlice";
import { showSuccessToast } from "@/utils/toastUtils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const { isLoginLoading, isLoginError, isLoginSuccess } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoginSuccess) {
      showSuccessToast("Login successful!");
      dispatch(userSliceReset());
    }
  }, [dispatch, isLoginSuccess]);
  return (
    <div className="">
      <ToastContainer/>
      <Banner />
      <OurServices />
      <OurSupport />
      <CustomerSatisfaction />
      <FAQ />
    </div>
  );
}
