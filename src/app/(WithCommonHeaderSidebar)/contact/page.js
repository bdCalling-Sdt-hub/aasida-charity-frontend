import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Contact us page for financial assistance",
};

export default function ContactPage() {
  return (
    <div>
      <h3 className="mb-5 text-4xl font-bold">Contact Us:</h3>
      <ContactForm />
    </div>
  );
}
