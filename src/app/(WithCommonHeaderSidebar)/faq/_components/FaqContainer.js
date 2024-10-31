"use client";

import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";

export default function FaqContainer() {
  // const getFaqItems = (itemStyle) => [
  //   {
  //     key: "1",
  //     label: (
  //       <label className="text-lg font-medium">
  //         How do I apply to a university through this platform?
  //       </label>
  //     ),
  //     children: (
  //       <p>
  //         To apply to a university, simply fill in the required details in the
  //         \"Degree\" section, including your chosen program, university name,
  //         planned start date, and any other relevant information. You can also
  //         track your application status and update your details at any time.
  //       </p>
  //     ),
  //     style: itemStyle,
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <label className="text-lg font-medium">
  //         What information do I need to provide when applying?
  //       </label>
  //     ),
  //     children: (
  //       <p>
  //         You will need to provide details about your degree (e.g., field of
  //         study, discipline, university), your start date, and your planned
  //         duration. Additionally, we will ask about your university tuition fees
  //         and visa status if applicable.
  //       </p>
  //     ),
  //     style: itemStyle,
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <label className="text-lg font-medium">
  //         What is the format required for the date fields (Planned Start and
  //         Duration)?
  //       </label>
  //     ),
  //     children: (
  //       <p>
  //         The planned start date and duration should be entered in the format of
  //         MM/YYYY. However, if you enter them differently, don't worry—our
  //         system will help guide you through formatting corrections.
  //       </p>
  //     ),
  //     style: itemStyle,
  //   },
  //   {
  //     key: "4",
  //     label: (
  //       <label className="text-lg font-medium">
  //         Can I apply to more than one university at the same time?
  //       </label>
  //     ),
  //     children: (
  //       <p>
  //         Yes, you can apply to multiple universities at once. Our platform
  //         allows you to fill out separate forms for each university under
  //         different options (Option 1, Option 2, and Option 3). Just make sure
  //         to provide the required information for each option.
  //       </p>
  //     ),
  //     style: itemStyle,
  //   },
  //   {
  //     key: "5",
  //     label: (
  //       <label className="text-lg font-medium">
  //         What if my application to a university is not granted?
  //       </label>
  //     ),
  //     children: (
  //       <p>
  //         If your application is not granted, you can update your admission
  //         status in the form and explore other universities or options. Our
  //         platform allows you to track your status and update it as needed.
  //       </p>
  //     ),
  //     style: itemStyle,
  //   },
  // ];

  const getFaqItems = (itemStyle) => [
    {
      key: "1",
      label: (
        <label className="text-lg font-medium">
          Are there any obligations in return for receiving the financial
          assistance?
        </label>
      ),
      children: (
        <p>
          Yes, there are certain obligations in return for receiving the
          financial assistance, as follows:
          <br />
          You must be a genuine student, coming to Australia only for the
          purpose of undertaking your post-graduate studies and you must return
          to Pakistan after completing your post-graduate education in
          Australia. To achieve this, we would require the selected student to
          enter into a formal legally binding “Agreement for Financial
          Assistance” with us. This agreement will require that in return for
          our financial assistance, you must:
          <ul className="ml-6 list-disc">
            <li>
              Complete your chosen post-graduate degree in Australia within its
              normal duration on a full-time basis.
            </li>
            <li>
              Not seek to stay in Australia, for any reason whatsoever, other
              than to undertake your chosen degree.
            </li>
            <li>Return to Pakistan after completing your chosen degree.</li>
          </ul>
          You will also have other obligations to keep us informed of the
          progress and results achieved throughout your course.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "2",
      label: (
        <label className="text-lg font-medium">
          How would the Agreement for Financial Assistance work?
        </label>
      ),
      children: (
        <p>
          The Agreement for Financial Assistance is a legally binding agreement,
          governed under the jurisdiction of the Australian state of Victoria.
          If you breach your obligations and seek to extend your stay in
          Australia for any reason other than to undertake and complete your
          chosen post-graduate degree, the Agreement will allow us to seek legal
          remedies. <br />
          Failure to fulfill your commitments will require you to repay the
          total amount of financial assistance received PLUS an equivalent
          amount as a penalty (i.e., 200% of the total financial assistance
          received). This debt will be payable by you and, in case of
          non-payment, will be recoverable under a court order, including all
          legal costs and court charges as per Australian laws.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "3",
      label: (
        <label className="text-lg font-medium">
          Is the draft of the proposed Agreement for Financial Assistance
          available for review?
        </label>
      ),
      children: (
        <p>
          Yes, a draft version of the proposed “Agreement for Financial
          Assistance” is available on our website. Before applying for the
          financial assistance, you must review this draft in detail and seek
          independent legal advice to ensure you fully understand your
          commitments and obligations and the serious implications of failing to
          fulfill them.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "4",
      label: (
        <label className="text-lg font-medium">
          Why is the financial assistance offered only for post-graduate studies
          and not undergraduate courses?
        </label>
      ),
      children: (
        <p>
          Undergraduate education in a wide range of study areas is available at
          many Pakistani universities. Therefore, it is more appropriate for
          Pakistani students to complete their undergraduate studies in
          Pakistan.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "5",
      label: (
        <label className="text-lg font-medium">
          Is the financial assistance available for post-graduate certificates
          or diplomas?
        </label>
      ),
      children: (
        <p>
          No, the financial assistance is only available for master's or
          doctoral degrees and not for any post-graduate certificates or
          diplomas.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "6",
      label: (
        <label className="text-lg font-medium">
          Why is the financial assistance offered for higher studies only in
          Australia and not in other countries?
        </label>
      ),
      children: (
        <p>
          Simply because we reside in Australia, making it feasible for us to
          pursue legal recourse within Australia for any contractual breach by
          the recipient of the financial assistance.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "7",
      label: (
        <label className="text-lg font-medium">
          Is the financial assistance offered for studying only at specific
          Australian universities?
        </label>
      ),
      children: (
        <p>
          No, you may choose any recognized university within Australia for your
          post-graduate studies. However, financial assistance is not available
          for other education providers, such as colleges or institutes.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "8",
      label: (
        <label className="text-lg font-medium">
          During what stage of the admission or visa process can you apply for
          financial assistance?
        </label>
      ),
      children: (
        <p>
          You may apply for financial assistance either before or after securing
          admission in a post-graduate course at a recognized Australian
          university, but before arriving in Australia to start your course. You
          may also apply before or after applying for an Australian student
          visa, but again, before arrival in Australia.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "9",
      label: (
        <label className="text-lg font-medium">
          How much financial assistance is available?
        </label>
      ),
      children: (
        <p>
          The assistance is capped and based on the post-graduate degree
          pursued, its duration, and the university’s yearly tuition fee. We
          expect the assistance to be around AU$ 40,000 per year, assuming a
          course duration of up to 3 years, with the student covering any
          remaining tuition and additional costs.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "10",
      label: (
        <label className="text-lg font-medium">
          Will the financial assistance funds be given directly to the student?
        </label>
      ),
      children: (
        <p>
          No, the assistance is applied directly to university tuition fees,
          paid at the start of each semester, and is divided across the course
          duration based on the number of semesters.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "11",
      label: (
        <label className="text-lg font-medium">
          Would we provide any other help, such as for housing or living costs?
        </label>
      ),
      children: (
        <p>
          No, the financial assistance is strictly limited to the capped amount
          offered and is paid directly to the university as part of the tuition
          fee.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "12",
      label: (
        <label className="text-lg font-medium">
          Would the student be required to pay anything to us?
        </label>
      ),
      children: (
        <p>
          Nothing at all—as long as the commitments and obligations under the
          proposed Agreement for Financial Assistance are met.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "13",
      label: (
        <label className="text-lg font-medium">
          Will we have any role in the university’s admission process?
        </label>
      ),
      children: (
        <p>
          Not at all. Admission is the student’s responsibility. If needed, we
          can issue a letter confirming the availability of financial
          assistance, which may aid in the admission decision.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "14",
      label: (
        <label className="text-lg font-medium">
          Will we have any role in the Australian visa process?
        </label>
      ),
      children: (
        <p>
          Not at all. The visa process is the student’s responsibility. We can
          issue a support letter confirming financial assistance, which may
          assist in the visa decision if needed.
        </p>
      ),
      style: itemStyle,
    },
  ];

  const collapseItemStyles = {
    marginBottom: 24,
    background: "white",
    borderRadius: 8,
    border: "none",
  };

  return (
    <div>
      <Collapse
        accordion
        items={getFaqItems(collapseItemStyles)}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <PlusOutlined rotate={isActive ? 45 : 0} />
        )}
        style={{
          border: "none",
          padding: "16px",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
