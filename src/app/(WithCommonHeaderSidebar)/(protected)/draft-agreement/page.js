export const metadata = {
  title: "Draft Agreement",
  description: "Draft Agreement for financial assistance page",
};

export default function DraftAgreementPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Agreement Title */}
      <h1 className="mb-6 text-4xl font-bold text-primary-black">
        Website User Agreement
      </h1>

      {/* Introduction */}
      <p className="mb-6 text-lg text-secondary-2">
        Welcome to <strong>[Your Website Name]</strong>. By accessing or using
        our website, you agree to comply with and be bound by the following
        terms and conditions, which together with our privacy policy govern our
        relationship with you regarding the website. If you disagree with any
        part of these terms, please do not use our website.
      </p>

      {/* Definitions */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        1. Definitions
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        <strong>"Website"</strong> refers to [Your Website Name] and all related
        services, features, content, and functionality offered on or through the
        website. <br />
        <strong>"User"</strong> refers to the individual accessing the website
        and accepting the terms and conditions of this agreement. <br />
        <strong>"We," "Us," "Our"</strong> refers to [Your Company Name], the
        provider of the website.
      </p>

      {/* Use of Website */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        2. Use of Website
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        By accessing this website, you agree that:
      </p>
      <ul className="mb-6 ml-6 list-disc text-lg">
        <li>
          You will use the website only for lawful purposes and in accordance
          with this agreement.
        </li>
        <li>
          You will not engage in any activity that disrupts or interferes with
          the proper functioning of the website or its services.
        </li>
        <li>
          You will not upload, post, or transmit any content that is harmful,
          offensive, or violates any applicable laws or regulations.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of any account
          details or passwords associated with your use of the website.
        </li>
      </ul>

      {/* Intellectual Property */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        3. Intellectual Property
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        All content on this website, including text, graphics, logos, images,
        and software, is the property of [Your Company Name] or its licensors
        and is protected by copyright, trademark, and other intellectual
        property laws. You may not reproduce, distribute, or create derivative
        works from any material on this website without express permission from
        [Your Company Name].
      </p>

      {/* Disclaimer */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        4. Disclaimer
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        The information provided on this website is for general informational
        purposes only. We make no warranties, express or implied, about the
        accuracy, reliability, or completeness of any information on the
        website. Your use of any information or materials on this website is
        entirely at your own risk.
      </p>

      {/* Limitation of Liability */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        5. Limitation of Liability
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        To the fullest extent permitted by law, [Your Company Name] shall not be
        liable for any direct, indirect, incidental, consequential, or punitive
        damages arising from your use of the website, including but not limited
        to loss of data, profit, or reputation.
      </p>

      {/* Termination */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        6. Termination
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        We reserve the right to terminate or suspend your access to the website
        at any time, without notice or liability, if you violate any of the
        terms of this agreement or engage in any unlawful behavior.
      </p>

      {/* Governing Law */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        7. Governing Law
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        This agreement shall be governed and construed in accordance with the
        laws of [Your Jurisdiction], without regard to its conflict of law
        provisions.
      </p>

      {/* Changes to Agreement */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        8. Changes to This Agreement
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        We may update or revise this agreement at any time. Any changes will be
        posted on this page, and it is your responsibility to review these terms
        regularly to stay informed of any updates.
      </p>

      {/* Contact Information */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        9. Contact Information
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        If you have any questions about this agreement or your use of the
        website, please contact us at [Your Contact Information].
      </p>
    </div>
  );
}
