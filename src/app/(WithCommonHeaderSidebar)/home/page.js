import Image from "next/image";
import "./home.css";
import img1 from "/public/images/home/charity.webp";
import img2 from "/public/images/home/charity2.png";

export const metadata = {
  title: "Home",
  description: "Home page of financial assistance website",
};

export default function HomePage() {
  return (
    // <div>
    //   <h1 className="text-4xl font-extrabold">Introduction:</h1>

    //   </div>

    <div className="container mx-auto p-6">
      {/* Introduction Section */}
      <h1 className="mb-6 text-4xl font-bold text-primary-black">
        Welcome to Aasida Charity Foundation
      </h1>
      <p className="mb-6 text-lg text-secondary-2">
        At <strong>Aasida Charity Foundation</strong>, our mission is to empower
        aspiring students by providing financial support to those who dream of
        pursuing postgraduate studies in Australia. Founded on the belief that
        education is the key to transforming lives, we are dedicated to creating
        opportunities for students who show immense potential but lack the
        financial means to achieve their academic aspirations.
      </p>
      <p className="mb-6 text-lg text-secondary-2">
        Our foundation serves as a bridge to higher education, offering
        scholarships, grants, and mentorship programs for students from various
        backgrounds. With our assistance, hundreds of students have successfully
        enrolled in prestigious Australian universities, setting them on the
        path to successful and fulfilling careers.
      </p>

      {/* Mission Section */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        Our Mission
      </h2>
      <ul className="mb-6 ml-6 list-disc text-lg">
        <li>
          <strong>Provide Financial Aid:</strong> We support talented students
          with financial barriers, covering tuition, accommodation, and living
          expenses during their studies in Australia.
        </li>
        <li>
          <strong>Promote Education for All:</strong> By offering scholarships
          to deserving candidates, we advocate for equal educational
          opportunities regardless of socio-economic background.
        </li>
        <li>
          <strong>Foster Global Leaders:</strong> Our beneficiaries are future
          leaders who will contribute to their communities and the world at
          large.
        </li>
      </ul>

      {/* Success Stories Section */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        Success Stories
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        Our foundation’s impact can be seen in the inspiring stories of students
        who, with the help of Aasida, have completed their postgraduate studies
        in Australia. Their success is a testament to the importance of
        accessible education.
      </p>
      <blockquote className="mb-6 border-l-4 pl-4 text-lg italic">
        “The Aasida Charity Foundation’s support made my dream of studying in
        Australia a reality. I am forever grateful for the opportunity they gave
        me.”
        <span className="mt-2 block font-bold">
          — Fatima A., Aasida Scholar, University of Melbourne
        </span>
      </blockquote>
      <blockquote className="mb-6 border-l-4 pl-4 text-lg italic">
        “Without the financial assistance of Aasida, I would not have been able
        to pursue my Master's in Engineering. Their dedication to helping
        students is remarkable.”
        <span className="mt-2 block font-bold">
          — Rajesh K., Aasida Scholar, University of Sydney
        </span>
      </blockquote>

      {/* Recognition in the Media Section */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        Recognition in the Media
      </h2>
      <ul className="mb-6 ml-6 list-disc text-lg">
        <li>
          <strong>The Australian Times</strong> praised our mission in their
          article,{" "}
          <em>
            "Empowering Global Students: The Impact of Aasida Charity
            Foundation"
          </em>
          , which highlighted our efforts to bridge financial gaps for
          international students.
        </li>
        <li>
          <strong>Global Education News</strong> featured us in{" "}
          <em>
            "Breaking Barriers to Education: Aasida's Role in Supporting
            International Postgraduate Students"
          </em>
          , focusing on our partnerships with Australian universities.
        </li>
        <li>
          <strong>The Global Post</strong> reported on our most recent
          scholarship ceremony in{" "}
          <em>"Aasida Foundation: Transforming Lives through Education"</em>,
          where over 50 students received full funding.
        </li>
      </ul>

      {/* Media Image Section */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Image
          src={img1}
          alt="News cutting of Aasida Charity Foundation's featured article in The Australian Times"
          className="rounded-lg shadow-md"
        />
        <Image
          src={img2}
          alt="Scholarship ceremony covered in Global Post"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Global Praise Section */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        Global Praise
      </h2>
      <blockquote className="mb-6 border-l-4 pl-4 text-lg italic">
        “The Aasida Charity Foundation is a shining example of how philanthropy
        can change lives. Their unwavering commitment to education has already
        had a profound impact on hundreds of students.”
        <span className="mt-2 block font-bold">
          — Dr. Michael Brown, Chancellor, University of Queensland
        </span>
      </blockquote>
      <blockquote className="mb-6 border-l-4 pl-4 text-lg italic">
        “We are proud to partner with the Aasida Charity Foundation, whose
        efforts ensure that education is within reach for all students,
        regardless of their background. Their work is truly remarkable.”
        <span className="mt-2 block font-bold">
          — Australian Higher Education Council
        </span>
      </blockquote>

      {/* Call to Action Section */}
      <h2 className="mb-4 text-3xl font-semibold text-primary-black">
        Join Us in Supporting Education
      </h2>
      <p className="mb-6 text-lg text-secondary-2">
        We invite you to learn more about our work and the difference we are
        making. Together, we can ensure that no talented student is left behind
        due to financial constraints.{" "}
        <strong>
          Join us on this journey to empower the next generation of leaders.
        </strong>
      </p>
    </div>
  );
}
