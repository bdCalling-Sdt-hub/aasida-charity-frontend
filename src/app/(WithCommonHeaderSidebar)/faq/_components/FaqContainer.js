"use client";

import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";

export default function FaqContainer() {
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
        <p className="text-lg">
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
          <ol className="my-4 ml-6 list-inside list-decimal">
            <li>
              Complete your chosen post-graduate degree in Australia within its
              normal duration on a full-time basis.
            </li>
            <li>
              Not seek to stay in Australia, for any reason whatsoever, other
              than to undertake your chosen degree.
            </li>
            <li>Return to Pakistan after completing your chosen degree.</li>
          </ol>
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
        <p className="text-lg">
          The Agreement for Financial Assistance is a legally binding agreement,
          governed under the jurisdiction of the Australian state of Victoria.
          If you breach your obligations and seek to extend your stay in
          Australia for any reason other than to undertake and complete your
          chosen post-graduate degree, the Agreement will allow us to seek legal
          remedies. <br /> <br />
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
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
          Why the financial assistance is being offered for higher studies only
          in Australia and not in any other country (such as Canada, UK, USA,
          etc.)?
        </label>
      ),
      children: (
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
          Would we provide any other help - such as for housing or living costs?
        </label>
      ),
      children: (
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
        <p className="text-lg">
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
