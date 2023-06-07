import PageHeader from "../components/PageHeader";
import Models from "../components/Models";
import PhoneBanner from "../components/PhoneBanner";

function ModelsPage() {
  return (
    <section className="models__section">
      <PageHeader name="Vehicle Models" />
      <Models />
      <PhoneBanner />
    </section>
  );
};

export default ModelsPage;
