import FaqContainer from "./_components/FaqContainer";

export const metadata = {
  title: "FAQ",
  description: "FAQ page of financial assistance website",
};

export default function FAQPage() {
  return (
    <div>
      <h3 className="mb-5 text-4xl font-bold">FAQs</h3>
      <FaqContainer />
    </div>
  );
}
