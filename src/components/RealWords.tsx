import NavigateButton from "./ui/NavigateButton";
import SectionTitle from "./ui/SectionTitle";

const RealWords = () => {
  return (
    <section>
      <SectionTitle
        subtitle="What Our Readers Say"
        title="Real Words from Real Readers"
        element={
          <NavigateButton className="bg-background">
            View All Testimonials
          </NavigateButton>
        }
      />
    </section>
  );
};

export default RealWords;
