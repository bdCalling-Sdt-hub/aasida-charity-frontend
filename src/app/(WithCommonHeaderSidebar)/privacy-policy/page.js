/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of financial assistance website",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary-black">Privacy Policy</h2>
      <p className="mt-4 text-secondary-2">
        Welcome to [Your Company Name]. Before using our logo design service,
        please carefully review the following Terms and Conditions, as they
        govern the contractual relationship between you (the "Client") and [Your
        Company Name] (the "Service Provider"). By using our logo design
        service, you acknowledge that you have read, understood, and agreed to
        these Terms and Conditions in their entirety.
      </p>

      <h1 className="mb-3 mt-10 text-4xl font-bold text-primary-black">
        What data do we process?
      </h1>
      <p>
        a. [Your Company Name] will provide custom logo design services to the
        Client based on the specifications provided by the Client. b. The
        Service Provider will deliver the final logo design in the agreed-upon
        format upon completion and full payment of the service fee.
      </p>

      <h1 className="mb-3 mt-10 text-4xl font-bold text-primary-black">
        What are your rights?
      </h1>
      <p>
        a. The Client acknowledges that all rights, title, and ownership of the
        final logo design will belong solely to the Client after full payment
        has been received by the Service Provider. b. Final payment ensures that
        only the agreed design becomes the client’s property. Any previous
        ideas/concepts remain the property of The Service Provider, unless any
        prior agreement has been made. c. The Service Provider reserves the
        right to showcase the completed logo design in their portfolio or
        promotional materials.
      </p>
    </div>
  );
}
