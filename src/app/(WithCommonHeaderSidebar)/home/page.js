import Link from "next/link";
import "./home.css";

export const metadata = {
  title: "Home",
  description: "Home page of financial assistance website",
};

export default function HomePage() {
  return (
    <section>
      <div className="mx-auto leading-relaxed">
        <h1 className="mb-6 text-xl font-bold text-gray-800 lg:text-3xl 2xl:text-4xl">
          INTRODUCTION
        </h1>
        <p className="mb-4 text-lg font-semibold text-gray-900">
          Opportunity for Pakistani Students to Obtain Financial Assistance for
          Pursuing Post-Graduate Studies in Australia
        </p>

        <div>
          <p className="mb-4">
            We are an Australian family of Pakistani origin. I was born and grew
            up in Pakistan in a family with very limited financial resources,
            forcing my parents to work extremely hard to support us. They taught
            us to always have a moral compass guiding us to live our lives. They
            emphasized the importance of education, hard work and supporting
            others in whatever way possible.
          </p>
          <p className="mb-4">
            I completed my under-graduate degree in Pakistan with outstanding
            results and was fortunate enough to secure a scholarship for going
            abroad to complete my post-graduate studies. Without that financial
            assistance, it simply would not have been possible for me to
            undertake my post-graduate degree. My excellent academic
            performances helped me secure Australian immigration. I borrowed
            some money from a friend to buy a one-way ticket, packed up a bag
            with the few cloths I had at that time and landed in Australia with
            just a bit more than $100 in my pocket! That was some forty years
            ago and as they say, the rest is history.
          </p>
          <p className="mb-4">
            Australia has truly been a “luck country” for me. I am extremely
            thankful to God for all His blessings for me and my family. I never
            forgotten the lessons taught by my parents – and therefore we always
            worked hard, and we always shared our fortunes to support others and
            helped them realize their own dreams. We came to strongly believe
            that the more we support others the more God rewards us.
          </p>
          <p className="mb-4">
            It is in this background that I now intend to help my native country
            by sharing some of the fortunes my adopted country’s wonderful
            opportunities have helped me earn – i.e. a bit of a paying back
            initiative. We want to do it by providing reasonable financial
            assistance to at least one – possibly two – Pakistani students to
            pursue higher education (post-graduate studies – i.e. master or
            doctorate degree) at a recognized university in Australia. Our
            intention is to keep running this scheme each year.
          </p>
        </div>

        <div>
          <p className="mb-4">
            Many people may find this too good to be true and would have quite a
            few questions, some of which we try to answer as follows:
          </p>
          <div className="mb-4 rounded-r-2xl border-l-4 border-red-500 bg-gray-100 p-4">
            <h2 className="mb-2 text-xl font-semibold">Is there a catch?</h2>
            <p className="mb-2">
              Yes, there is one big catch! You must be a genuine student, coming
              to Australia only for the purpose of undertaking your
              post-graduate studies and you must return to Pakistan after
              completing your post-graduate education in Australia. Frankly
              speaking, this is our biggest concern and therefore we would
              require the selected student to enter into a formal legally
              binding agreement with us.
            </p>
            <p className="mb-2">
              This agreement will require that in return for our financial
              assistance, you must:
            </p>

            <ol className="mb-4 space-y-2">
              <li className="list-inside list-decimal font-semibold">
                Complete your chosen post-graduate degree in Australia within
                its normal duration on full-time basis.
              </li>
              <li className="list-inside list-decimal font-semibold">
                Not seek to stay in Australia, due to any reason whatsoever,
                other than to undertake your chosen degree.
              </li>
              <li className="list-inside list-decimal font-semibold">
                Return to Pakistan after completing your chosen degree. You will
                also have other obligations to keep us informed of the progress
                and results achieved throughout your course, etc.
              </li>
            </ol>

            <p className="mb-2">
              This agreement will be governed under the jurisdiction of the
              Australian state of Victoria, making it possible for us to seek a
              range of legal remedies against you in case of a material breach
              of your contractual commitments and obligations.
            </p>
            <p className="mb-2">
              Your failure to fulfill your contractual commitments and
              obligations will result in the early termination of the agreement
              (and therefore our financial assistance) and will also require you
              to repay the total amount of financial assistance already received
              PLUS an equivalent amount as the penalty (i.e. 200% of the total
              financial assistance already received). Under the agreement, you
              will owe this total repayment amount as a debt to us which will be
              payable by you. In case of non-payment, this amount will be
              recoverable from you under a court order, along with all our legal
              costs and court charges, as per the relevant Australian laws.
            </p>
            <p>
              A draft version of the proposed “Agreement for Financial
              Assistance” is available on our website for your review.
            </p>
          </div>
        </div>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Why only for post-graduate studies and not under-graduate courses?
          </li>

          <p className="mb-4">
            Under-graduate education in a whole range of study areas is
            available at a large number of Pakistani universities and it is
            therefore more appropriate for Pakistani students to complete their
            under-graduate studies in Pakistan.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Why for higher studies only in Australia?
          </li>
          <p className="mb-4">
            Simply because, we live in Australia and therefore we could only
            realistically pursue legal recourse for any contractual breach by
            the recipient of our financial assistance in Australia. You could
            choose any university within Australia to undertake your
            post-graduate studies.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            During what stage of the admission or visa process could you apply
            for the financial assistance?
          </li>
          <p className="mb-4">
            You could apply for our financial assistance either before or after
            securing admission in a post-graduate course at a recognized
            Australian university – but before your arrival in Australia to
            commence your course. Similarly, you could apply for the financial
            assistance before or after applying/securing Australian student visa
            – but before your arrival in Australia to commence your course.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            How much financial assistance would be available?
          </li>
          <p className="mb-4">
            The financial assistance is not meant to cover all costs of your
            post-graduate education in Australia. The maximum amount of the
            financial assistance per year will be capped and it will be based on
            the post-graduate degree you intend to pursue, its total duration
            (on full-time basis) and the university’s yearly tuition fee. The
            financial assistance will be around AU$ 40,000 per year, assuming
            the total duration of your chosen course not to exceed 3 years with
            the student being responsible for meeting the remaining tuition fee
            and all other expenses (living cost, transportation, health
            insurance, books & stationery, etc.) from his/her own resources.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Would we provide any other help – e.g. housing, living costs, etc.?
          </li>
          <p className="mb-4">
            No, our financial assistance will be strictly limited to the capped
            amount offered, paid directly to the university as part of the
            tuition fee and subject to your compliance with the relevant
            contractual obligations.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Will the financial assistance funds be given directly to the
            student?
          </li>
          <p className="mb-4">
            No, our financial assistance will be utilized to pay the
            university’s tuition fees and will be paid directly to the
            university at the start of each semester (with the amount to be paid
            each semester being equal to the total maximum financial assistance
            for the entire course divided by the number of semesters to complete
            the course on full time-time basis).
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Would the student be required to pay anything to us?
          </li>
          <p className="mb-4">
            Nothing at all – as long as you fulfill your commitments and
            obligations under the proposed Agreement for Financial Assistance
            mentioned above!
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Will we have any role in the Australian visa process?
          </li>
          <p className="mb-4">
            Not at all. We will not be involved in the Australian government’s
            visa process, and it will be student’s responsibility to secure the
            required visa to study in Australia as in international student. If
            required, we could only issue a letter in support of your visa
            application confirming the availability of the financial assistance
            which the relevant Australian authority could potentially take into
            consideration in making its decision on your visa application.
          </p>
        </ul>

        <ul>
          <li className="mb-4 mt-8 list-inside list-disc text-lg font-semibold">
            Another thing worth noting:
          </li>
          <p className="mb-4">
            All the key decisions in relation to the financial assistance
            (including, but not limited to, the final recipient(s) selected, how
            much financial assistance if to be provided and on what conditions,
            etc.) are entirely at our discretion with no obligations to provide
            any explanation. We also reserve the right to withdraw the financial
            assistance offer at any time prior to the formal execution of the
            Agreement for Financial Assistance.
          </p>
        </ul>

        <div className="mt-16">
          <p className="mb-5 text-xl font-semibold">
            Are you interested? If so, please proceed to next steps as follows:
          </p>

          <ol>
            <li className="list-inside list-decimal hover:text-neutral-700">
              <Link href="/privacy-policy">Review our Privacy Policy</Link>
            </li>
            <li className="list-inside list-decimal hover:text-neutral-700">
              <Link href="/register">Register yourself on our website</Link>
            </li>
            <li className="list-inside list-decimal hover:text-neutral-700">
              <Link href="/draft-agreement">
                Review the proposed draft Agreement for Financial Assistance
              </Link>
            </li>
            <li className="list-inside list-decimal hover:text-neutral-700">
              <Link href="/apply-application">
                Apply for Financial Assistance
              </Link>
            </li>
          </ol>
        </div>

        <footer className="mt-10 text-sm text-gray-600">
          <p>Updated: 1st September 2024</p>
        </footer>
      </div>
    </section>
  );
}
