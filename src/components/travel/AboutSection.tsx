
interface AboutSectionProps {
  description: string;
}

const AboutSection = ({ description }: AboutSectionProps) => {
  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-display mb-6">About</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          {description || "Information about this destination is currently unavailable."}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
