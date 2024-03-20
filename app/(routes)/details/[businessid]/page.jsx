"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import getBusinessByID from "../../../_services/GlobalApi"

const BusinessDetails = ({ params }) => {
  const { data, status } = useSession();

  const checkUserAuth = () => {
    if (status == "loading") {
      return <p>Loading...</p>;
    }

    if (status == "unauthenticated") {
      signIn("descope");
    }
  };

useEffect(()=>{
checkUserAuth()
},[])

  const getData = async () => {
    const res = await getBusinessByID(params.businessid);
    console.log("response is",res);
  };

  useEffect(() => {
    params && getData();
    // console.log(params)
    console.log(params.businessid)
  }, [params]);

  return status == "authenticated" && <div>BusinessDetails</div>;
};

export default BusinessDetails;
