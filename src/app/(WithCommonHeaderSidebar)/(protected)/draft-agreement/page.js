export const metadata = {
  title: "Draft Agreement",
  description: "Draft Agreement for financial assistance page",
};

export default function DraftAgreementPage() {
  return (
    <div className="px-5 text-lg text-gray-900">
      {/* Title and Introduction */}
      <h1 className="text-2xl font-bold underline">DRAFT AGREEMENT</h1>
      {/* Agreement Date Section */}
      <h2 className="mt-6 text-xl font-bold">
        THIS AGREEMENT (hereinafter referred to as the “Agreement”) is dated
        <span className="bg-yellow-300"> [Insert DATE]</span>
      </h2>

      {/* Parties Section */}
      <h3 className="mt-4 font-semibold">BETWEEN:</h3>
      <p className="ml-4">
        <span className="bg-yellow-300">[Insert NAME]</span>, an Australian
        citizen of Pakistani origin{" "}
        <span className="bg-yellow-300">[Insert ADDRESS]</span> (hereinafter
        referred to as the “Donor”)
      </p>
      <p className="ml-4">and</p>
      <p className="ml-4">
        <span className="bg-yellow-300">[Insert NAME]</span>, a Pakistani
        citizen of <span className="bg-yellow-300">[Insert ADDRESS]</span> with
        passport number{" "}
        <span className="bg-yellow-300">[Insert PASSPORT NUMBER]</span>{" "}
        (hereinafter referred to as the “Recipient”).
      </p>

      {/* Where Clause */}
      <h3 className="mt-6 text-xl font-semibold">WHEREAS:</h3>
      <ol className="ml-10 list-decimal">
        <li className="mt-2">
          The Recipient is a student who intends to undertake
          <span className="bg-yellow-300">
            [Insert FULL NAME & CODE OF POST-GRADUATE DEGREE]
          </span>{" "}
          (the “Course”) at
          <span className="bg-yellow-300">
            [Insert NAME OF AUSTRALIAN UNIVERSITY]
          </span>{" "}
          (the “University”), commencing
          <span className="bg-yellow-300">
            [Insert COURSE COMMENCEMENT DATE]
          </span>{" "}
          (the “Commencement Date”) with a total duration of
          <span className="bg-yellow-300">[Insert COURSE DURATION]</span> years
          on full-time basis (the “Course Duration”) with scheduled completion
          by
          <span className="bg-yellow-300">
            [Insert COURSE COMPLETION DATE]
          </span>{" "}
          (the “Completion Date”).
        </li>
        <li className="mt-2">
          The Donor wishes to support the Recipient by providing funds to
          partially meet the University’s tuition fee (the “Financial
          Assistance”), and the Recipient has agreed to accept this Financial
          Assistance on the terms hereinafter appearing.
        </li>
      </ol>

      <ol className="list-decimal">
        {/* Background Section */}
        <li className="mt-6 text-xl font-semibold">Background</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Donor wishes to support a promising student from his native
            Pakistan who has successfully completed the under-graduate education
            in Pakistan and now intends to pursue higher education
            (post-graduate degree) in Australia and is committed to return to
            Pakistan after completing the post-graduate education in Australia.
          </li>
          <li className="mt-2">
            The Donor, in response to application by the Recipient, has agreed
            to provide the Financial Assistance to the Recipient on the terms
            set out in this Agreement, including the Recipient’s commitments to:
            <ol className="ml-10 list-[lower-alpha]">
              <li>complete the Course on full-time basis;</li>
              <li>
                not seek to stay in Australia for any reason whatsoever other
                than completing the Course; and
              </li>
              <li>return to Pakistan after the completion of the Course.</li>
            </ol>
          </li>
          <li className="mt-2">
            The Recipient’s breach of his/her commitments and obligations under
            this Agreement shall have financial and legal implications for the
            Recipient as set out in this Agreement.
          </li>
        </ol>

        {/* Governing Laws Section */}
        <li className="mt-6 text-xl font-semibold">Governing Laws</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            This Agreement shall be governed and interpreted in accordance with
            the laws of Victoria, Australia (“Jurisdiction”) and the parties
            hereto confirm that they submit to the exclusive jurisdiction of the
            courts of the Jurisdiction.
          </li>
        </ol>

        {/* Payment of Financial Assistance by the Donor */}
        <li className="mt-6 text-xl font-semibold">
          Payment of Financial Assistance by the Donor
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            Subject to Clause 3.2, the Donor shall support the Recipient with
            the payment of Financial Assistance in the amount of AU${" "}
            <span className="bg-yellow-300">[Insert AMOUNT]</span> per academic
            year (on full-time basis) for the Course Duration with the maximum
            total amount of Financial Assistance for the entire Course not
            exceeding AU${" "}
            <span className="bg-yellow-300">[Insert TOTAL AMOUNT]</span>.
          </li>
          <li className="mt-2">
            The Donor may withhold a payment of the Financial Assistance if the
            Recipient has not met a requirement of this Agreement or is unable
            to undertake the Course.
          </li>
          <li className="mt-2">
            The Donor shall pay the Financial Assistance directly to the
            University as part of the Recipient’s tuition fee when it becomes
            due for each individual semester, with the amount to be paid for
            each semester equals to the maximum total amount of AU${" "}
            <span className="bg-yellow-300">[Insert TOTAL AMOUNT]</span> (as per
            Clause 3.1) divided by the total number of semesters for the Course
            on full-time basis. For the avoidance of doubt, the payment of any
            tuition fee over and above the Financial Assistance (on per semester
            basis) shall be the Recipient’s responsibility. Similarly, all other
            expenses for undertaking the Course (including, but not limited to,
            living expenses, transportation, overseas student health cover,
            books & stationery, etc.) shall also be the Recipient’s
            responsibility.
          </li>
          <li className="mt-2">
            The Donor shall make payments of the Financial Assistance in the
            instalments as per Clauses 3.1, 3.2, and 3.3 following the receipt
            and verification of the applicable documentary evidences as listed
            under Clause 6.1.
          </li>
        </ol>

        {/* Recipient's Obligation to Complete the Course */}
        <li className="mt-6 text-xl font-semibold">
          Recipient’s Obligation to Complete the Course
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Recipient agrees to undertake and complete the Course on a
            full-time basis.
          </li>
          <li className="mt-2">
            In exceptional circumstances, the Recipient may seek a deferral of
            his/her obligation to complete the Course. The Donor will consider
            any such request and may, in his absolute discretion, approve or
            reject the request having regard to the circumstances causing the
            need for the requested deferral.
          </li>
          <li className="mt-2">
            The Recipient’s failure to fully comply with Clause 4.1 (without an
            extension or exemption approved in writing by the Donor as per
            Clause 4.2) shall be a material breach of this Agreement and such
            failure shall provide adequate grounds for the Donor to terminate
            this Agreement under Clause 7 and trigger the Recipient’s repayment
            obligations under Clause 8.
          </li>
        </ol>

        {/* Recipient's Commitment to Return to Pakistan Upon Completion of Course */}
        <li className="mt-6 text-xl font-semibold">
          Recipient’s Commitment to Return to Pakistan Upon Completion of Course
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            As per the Australian law, the Recipient shall travel to Australia
            on the international student subclass 500 visa (“Subclass-500 Visa”)
            for the sole purpose of undertaking the Course. While in Australia
            on this Subclass-500 Visa to undertake and complete the Course, the
            Recipient shall not seek any other Australian visa – including
            another subclass 500 visa for any course/studies other than the
            Course – due to any reason whatsoever.
          </li>
          <li className="mt-2">
            While in Australia to undertake the Course, the Recipient shall
            strictly comply with all applicable:
            <ol className="ml-10 list-[lower-alpha]">
              <li>conditions of his/her Subclass-500 Visa, and</li>
              <li>rules and regulations of the University for the Course.</li>
            </ol>
          </li>
          <li className="mt-2">
            Following the completion of the Course, the Recipient shall return
            to his/her home country Pakistan and shall not return to Australia
            before the expiry of the Subclass-500 Visa granted to him/her to
            undertake the Course.
          </li>
          <li className="mt-2">
            The Recipient’s failure to fully comply with Clauses 5.1, 5.2 or 5.3
            shall be a material breach of this Agreement and such failure shall
            provide adequate grounds for the Donor to terminate this Agreement
            under Clause 7 and trigger the Recipient’s repayment obligations
            under Clause 8.
          </li>
        </ol>

        {/* Recipient’s Reporting and Notification Obligations */}
        <li className="mt-6 text-xl font-semibold">
          Recipient’s Reporting and Notification Obligations
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Recipient agrees to provide the following information to the
            Donor by the specified due date:
            <table className="ml-4 mt-4 table-fixed border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Information</th>
                  <th className="border px-4 py-2">Documentary Evidence</th>
                  <th className="border px-4 py-2">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    Evidence of continued full-time enrolment in the Course
                  </td>
                  <td className="border px-4 py-2">
                    Statement of Enrolment; or Student Verification Letter from
                    the University.
                  </td>
                  <td className="border px-4 py-2">
                    By the census date of the University for each semester of
                    the Course
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Evidence of the results of subjects/units of the Course
                    studied during each study period (semester)
                  </td>
                  <td className="border px-4 py-2">
                    Result Statement; Academic Transcript
                  </td>
                  <td className="border px-4 py-2">
                    Within 7 (seven) calendar days of the University announcing
                    the results for each semester of the Course
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Evidence of successful completion of the Course
                  </td>
                  <td className="border px-4 py-2">
                    Graduation Certificate; Academic Transcript; Australian
                    Higher Education Graduation Statement
                  </td>
                  <td className="border px-4 py-2">
                    Within 7 (seven) calendar days of the University announcing
                    the results for each semester
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Notification and evidence of return to Pakistan upon
                    completion of the Course
                  </td>
                  <td className="border px-4 py-2">
                    Boarding card for air travel to depart Australia; Australian
                    immigration exit stamp on the Recipient’s passport;
                    Pakistani immigration entry stamp on the Recipient’s
                    passport
                  </td>
                  <td className="border px-4 py-2">
                    Within 7 (seven) calendar days of the Recipient returning to
                    Pakistan after completing the Course
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="mt-2">
            The Recipient agrees to notify the Donor within 15 (fifteen)
            calendar days of any of the following circumstances occurring:
            <ol className="ml-10 list-[lower-alpha]">
              <li>the Recipient’s name changes;</li>
              <li>
                there is a change to the Recipient’s contact details, including
                phone number, email address or postal address;
              </li>
              <li>
                an actual or perceived conflict of interest which could affect
                performance of Recipient’s obligations under this Agreement
                arises;
              </li>
              <li>
                there is a change to Recipient’s Course enrolment status
                including unenrolling or any other change which impacts upon the
                time for completion of the Course; or
              </li>
              <li>
                there is anything else reasonably likely to affect completion of
                the Recipient’s obligations under this Agreement.
              </li>
            </ol>
          </li>
        </ol>

        {/* Termination */}
        <li className="mt-6 text-xl font-semibold">Termination</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Donor may terminate this Agreement forthwith, without notice, if
            the Recipient:
            <ol className="ml-10 list-[lower-alpha]">
              <li>
                fails to secure admission at the University in the Course;
              </li>
              <li>
                fails to secure the Subclass-500 Visa to travel to Australia to
                undertake the Course;
              </li>
              <li>
                fails to commence the Course at the University on full-time
                basis on the Commencement Date; or
              </li>
              <li>
                is incapacitated or unable to continue the Course on full-time
                basis due to any reason for a period in excess of 15 (fifteen)
                calendar days.
              </li>
            </ol>
          </li>
          <li className="mt-2">
            The Donor may terminate this Agreement by 7 (seven) days notice
            where he reasonably believes that the Recipient:
            <ol className="ml-10 list-[lower-alpha]">
              <li>has breached this Agreement; or</li>
              <li>
                has provided false or misleading information in any of his/her
                applications (including supporting documentation) for admission
                to the Course at the University, for Financial Assistance from
                the Donor, or for the Subclass-500 Visa to undertake the Course.
              </li>
            </ol>
          </li>
          <li className="mt-2">
            Unless terminated earlier, this Agreement shall expire upon the
            completion of the Recipient’s return to Pakistan obligations under
            Clause 5.
          </li>
          <li className="mt-2">
            Unless otherwise stated, the expiry or termination of this Agreement
            shall not affect the operation of any provision which either
            expressly or by implication is intended to continue operating. For
            the avoidance of doubt, Clauses 5, 8, 9, 10, and 12 survive the
            expiry or termination of this Agreement.
          </li>
        </ol>

        {/* Recipient's Repayment Obligations */}
        <li className="mt-6 text-xl font-semibold">
          Recipient’s Repayment Obligations
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The payment of the Financial Assistance is conditional. The
            Recipient agrees to repay to the Donor the full amount of the
            Financial Assistance received PLUS up to an equivalent amount as
            penalty (“Penalty”) if the Recipient does not fulfill his
            commitments and obligations as per this Agreement to:
            <ol className="ml-10 list-[lower-alpha]">
              <li>complete the Course on full-time basis;</li>
              <li>
                not seek to stay in Australia for any reason whatsoever other
                than completing the Course; or
              </li>
              <li>return to Pakistan after completion of the Course.</li>
            </ol>
          </li>
          <li className="mt-2">
            In making repayments to the Donor, the Recipient agrees to commence
            repayments within 30 (thirty) calendar days of being provided with a
            notice by the Donor setting out the amount of the repayment. The
            Recipient must make the repayments according to the repayment
            schedule and in the installments set out in the Donor’s notice. The
            Recipient may make full payment of any repayment amount at any time
            in advance of when that amount would otherwise be due under the
            repayment schedule.
          </li>
          <li className="mt-2">
            The repayment schedule will require that full payment of the
            outstanding amount be made by the recipient within a period
            equivalent to the period in which the Financial Assistance was paid
            to you. The Donor may specify a shorter repayment period:
            <ol className="ml-10 list-[lower-alpha]">
              <li>on Recipient’s request; or</li>
              <li>
                if the circumstances of the assistance actually provided to the
                Recipient would make a shorter repayment period equitable
                considering the interests of both parties.
              </li>
            </ol>
          </li>
          <li className="mt-2">
            If the Recipient fails to pay an installment of the repayment within
            7 (seven) calendar days of that installment becoming due, the Donor
            may forward the Recipient a notice requiring immediate payment of
            the installment. If the Recipient fails to pay that installment
            within 10 (ten) calendar days of the date on the notice, the whole
            of the remaining amount of the repayment will become immediately due
            and the Donor may recover that amount as a debt due to him/her
            without further proof of the debt by the Donor.
          </li>
          <li className="mt-2">
            In extraordinary or compassionate circumstances, the Donor may, at
            his sole discretion, agree to waive all or part of the repayment
            required under this Agreement and/or extend the period for
            repayment.
          </li>
        </ol>

        {/* Confidentiality */}
        <li className="mt-6 text-xl font-semibold">Confidentiality</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            All knowledge and information which the Recipient acquires with
            respect to the Financial Assistance, the Donor and any of the
            Donor’s family member and other affiliates shall be held secret and
            confidential by the Recipient until the Donor shall otherwise
            consent thereto in writing, or such knowledge and information has
            become generally available to the public, otherwise than by breach
            of this Agreement. The obligations imposed hereunder shall continue
            for a period of five (5) years after the expiration or termination
            of this Agreement.
          </li>
          <li className="mt-2">
            The Clause 9.1 does not apply if the Recipient is to provide the
            necessary information about the Donor and the Financial Assistance,
            strictly on the need-to-know basis, and only to the relevant people
            at the University and/or at the Australian government’s Department
            of Home Affairs for the purpose of securing admission in the Course
            and obtaining the Australian Subclass-500 Visa to undertake the
            Course, respectively.
          </li>
        </ol>

        {/* Donor's Right to Use Recipient's Information */}
        <li className="mt-6 text-xl font-semibold">
          Donor’s Right to Use Recipient’s Information
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Recipient agrees that the Donor may use information related to
            any of the Recipient’s applications for admission to the Course, for
            Financial Assistance or for Australian Subclass-500 Visa as well as
            the information provided by the Recipient under Clause 6 for the
            purposes of administering this Agreement and the Financial
            Assistance scheme including for the following purposes:
            <ol className="ml-10 list-[lower-alpha]">
              <li>
                evaluation of how well the outcomes and objectives of the
                Financial Assistance scheme have been achieved;
              </li>
              <li>
                sharing the information with other Australian government
                departments; and
              </li>
              <li>sharing the information with the University</li>
            </ol>
            and the Recipient consents to:
            <ol className="ml-10 list-[lower-alpha]">
              <li>
                the use and disclosure of his personal information by the Donor;
                and
              </li>
              <li>
                disclosure of his personal information by other entities listed
                above.
              </li>
            </ol>
          </li>
        </ol>

        {/* Waiver */}
        <li className="mt-6 text-xl font-semibold">Waiver</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            Any failure of the Donor to require Recipient’s performance of any
            provision hereof shall not affect the full right of the Donor to
            require such performance at any time thereafter; nor shall the
            waiver by the Donor of a breach of any provision hereof be taken or
            held to be a waiver of the provision itself.
          </li>
        </ol>

        {/* Indemnity and Limitation of Liability */}
        <li className="mt-6 text-xl font-semibold">
          Indemnity and Limitation of Liability
        </li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Recipient agrees to defend, release, indemnify and hold the
            Donor harmless from all liabilities, claims and expenses (including
            all legal expenses and court costs) resulting from any actual or
            threatened lawsuit, an administrative proceeding or any other legal
            or administrative proceeding in connection with the Financial
            Assistance.
          </li>
          <li className="mt-2">
            The Recipient irrevocably waives any and all claims and causes of
            action the Recipient may have arising from the Donor’s offer,
            provision, suspension or termination of the Financial Assistance.
          </li>
          <li className="mt-2">
            The Recipient agrees that the Donor shall not be liable for any
            indirect, special, incidental or consequential damages of any kind
            whatsoever regardless of the form of action whether in contract,
            tort (including negligence), or otherwise, even if the Donor has
            been advised of the possibility of such damages.
          </li>
          <li className="mt-2">
            The Recipient acknowledges and agrees that this Clause survives the
            termination or expiration of this Agreement.
          </li>
        </ol>

        {/* Notices */}
        <li className="mt-6 text-xl font-semibold"> Notices</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            All notices required or permitted to be given hereunder shall be in
            writing and shall be delivered in person or sent by email or
            registered mail to:
            <p className="ml-10 mt-2">
              Donor: <br />
              Name: <span className="bg-yellow-300">
                [Insert DONOR’S NAME]
              </span>{" "}
              <br />
              Address:{" "}
              <span className="bg-yellow-300">
                [Insert DONOR’S ADDRESS]
              </span>{" "}
              <br />
              Email:{" "}
              <span className="bg-yellow-300">
                [Insert DONOR’S EMAIL ADDRESS]
              </span>{" "}
              <br />
            </p>
            <p className="ml-10 mt-4">
              Recipient: <br />
              Name:{" "}
              <span className="bg-yellow-300">
                [Insert RECIPIENT’S NAME]
              </span>{" "}
              <br />
              Address:{" "}
              <span className="bg-yellow-300">
                [Insert RECIPIENT’S ADDRESS]
              </span>{" "}
              <br />
              Email:{" "}
              <span className="bg-yellow-300">
                [Insert RECIPIENT’S EMAIL ADDRESS]
              </span>
            </p>
          </li>
          <li className="mt-2">
            If any notice is delivered in person such notice shall be deemed
            effective upon delivery.
          </li>
          <li className="mt-2">
            Any notice given by registered mail shall be deemed effective on the
            date shown on the receipt.
          </li>
          <li className="mt-2">
            Notices by email shall be deemed effective on the working day
            following the day of email transmission.
          </li>
        </ol>

        {/* Assignment */}
        <li className="mt-6 text-xl font-semibold">Assignment</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The Recipient agrees not to assign this Agreement in whole or in
            part without obtaining the prior written consent of the Donor.
          </li>
          <li className="mt-2">
            The Donor shall have the right at any time to assign its rights
            under this Agreement to a third party upon giving the Recipient
            seven (7) days notice to that effect.
          </li>
        </ol>

        {/* Counterparts */}
        <li className="mt-6 text-xl font-semibold">Counterparts</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            This Agreement may be executed in counterparts.
          </li>
        </ol>

        {/* Severability */}
        <li className="mt-6 text-xl font-semibold">Severability</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            Any provision of this Agreement that is prohibited or unenforceable
            in any jurisdiction is ineffective as to that jurisdiction to the
            extent of the prohibition or unenforceability. That does not
            invalidate the remaining provisions of this Agreement nor affect the
            validity or enforceability of that provision in any other
            jurisdiction.
          </li>
        </ol>

        {/* Headings */}
        <li className="mt-6 text-xl font-semibold">Headings</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            The headings in this Agreement shall not be deemed to be part hereof
            or be taken into consideration in the interpretation or construction
            thereof.
          </li>
        </ol>

        {/* Additional Matters */}
        <li className="mt-6 text-xl font-semibold">Additional Matters</li>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            Any change to the terms of this Agreement shall only be effective if
            agreed in writing by the Donor and the Recipient.
          </li>
          <li className="mt-2">
            The Donor or the Recipient as the case may be, are not, by virtue of
            this Agreement, an employee, agent, partner or affiliate of the
            other party or entitled to bind the other party. Each party shall
            ensure that the foregoing persons shall not represent to the
            contrary, either expressly, implicitly, by appearance or otherwise.
          </li>
          <li className="mt-2">
            The Recipient confirms that he has sought appropriate, independent
            and qualified financial and legal advice before entering into this
            Agreement so that he is fully aware of the implications of signing
            this Agreement and his obligations under it.
          </li>
        </ol>
      </ol>

      {/* Signatures */}
      <section className="mt-6">
        <li className="text-lg font-semibold">SIGNED FOR AND ON BEHALF OF:</li>

        <table className="mt-5">
          <thead>
            <th className="py-2">RECIPIENT</th>
            <th className="py-2">DONOR</th>
          </thead>

          <tbody>
            <tr>
              <td className="p-8 text-lg">
                <div className="space-y-3">
                  <p>Signed: ______________________________</p>
                  <p>Name: ______________________________</p>
                  <p>Date: ______________________________</p>
                </div>

                <h6 className="mb-2 mt-10 font-semibold">
                  WITNESSED BY NOTOARY PUBLIC:
                </h6>

                <div className="space-y-3">
                  <p>Sign: ______________________________</p>
                  <p>Name: ______________________________</p>
                  <p>Stamp: </p>
                </div>
              </td>

              <td className="p-16 text-lg">
                <div className="space-y-3">
                  <p>Signed: ______________________________</p>
                  <p>Name: ______________________________</p>
                  <p>Date: ______________________________</p>
                </div>

                <h6 className="mb-2 mt-10 font-semibold">WITNESSED BY:</h6>

                <div className="space-y-3">
                  <p>Sign: ______________________________</p>
                  <p>Name: ______________________________</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
