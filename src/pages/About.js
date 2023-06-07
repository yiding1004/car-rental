import PageHeader from "../components/PageHeader";
import About from "../components/About";
import PhoneBanner from "../components/PhoneBanner";

function AboutPage() {
  return (
    <section className="about__section">
      <PageHeader name="About" />
      <About />
      <PhoneBanner />
    </section>
  );
}

export default AboutPage; 