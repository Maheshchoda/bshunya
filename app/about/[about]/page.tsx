import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";

let additionInformation =
  "Disclaimer:-  Bshunya is a digital publishing entity and does not give personal health or medical guidance. In an emergency, contact local emergency services or go to the nearest emergency facility. Consult a healthcare provider before beginning any program related to nutrition, diet, exercise, or health. The content provided by Bshunya is created with input from medical professionals and is for informational purposes only, not as a replacement for professional medical advice. Questions about medical conditions and treatments should be directed to a healthcare professional. Bshunya does not vouch for the effectiveness or safety of the products or treatments discussed. Information may change and is not comprehensive. This company does not endorse any specific tests, products, or professional opinions.";
const AboutPage = async ({
  params: { about },
}: {
  params: { about: string };
}) => {
  if (about === "about-us") return <AboutUS />;
  if (about === "contact-us") return <ContactUS />;
  return <div>{additionInformation}</div>;
};

export default AboutPage;
