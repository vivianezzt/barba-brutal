import OurProfessionals from "@/components/professionals/OurProfessionals";
import OurServices from "@/components/service/OurServices";

/* eslint-disable react/react-in-jsx-scope */
export default function Landing() {
  return (
    <div className="container">
      <h1>Landing Page</h1>
      <OurServices />
      <OurProfessionals />
    </div>
  );
}
