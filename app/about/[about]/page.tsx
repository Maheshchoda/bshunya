import { notFound } from "next/navigation";
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";
import Disclaimer from "./Disclaimer";

export const generateStaticParams = async () => {
  const aboutPaths = ["about-us", "contact-us", "disclaimer"];
  return aboutPaths;
};

const AboutPage = async ({
  params: { about },
}: {
  params: { about: string };
}) => {
  if (about === "about-us") {
    return <AboutUS />;
  } else if (about === "contact-us") {
    return <ContactUS />;
  } else if (about === "disclaimer") {
    return <Disclaimer />;
  } else {
    return notFound();
  }
};

export default AboutPage;
