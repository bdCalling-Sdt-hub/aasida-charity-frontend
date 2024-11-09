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

      <p className="mt-10 text-center text-gray-500">
        For any other queries, please contact us at{" "}
        <span className="rounded bg-secondary-1 px-2 text-white">
          <a href="mailto:info@helpforpakstudents.com">
            info@helpforpakstudents.com
          </a>
        </span>
      </p>
    </div>
  );
}
