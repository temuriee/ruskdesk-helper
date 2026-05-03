"use client";

import { useAboutUs } from "../api/aboutApi";
import { mockAboutData } from "../mockData";
import AboutUs from "./AboutUs";

const AboutUsWrapper = () => {
  const { data, isError, isLoading } = useAboutUs();

  //   if (isLoading) return <div>Loading ... </div>;
  //   if (isError || !data) return <div>Error loading page</div>;

  return <AboutUs {...(data ? { ...data } : { ...mockAboutData })} />;
};

export default AboutUsWrapper;
