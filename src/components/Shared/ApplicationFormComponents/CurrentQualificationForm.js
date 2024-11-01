import UInput from "@/components/Form/UInput";
import "./CurrentQualificationForm.css";
import UDatePicker from "@/components/Form/UDatePicker";

// Common style
const rowWith4Col =
  "grid grid-cols-4 lg:mx-auto lg:w-[95%] w-max gap-x-10 whitespace-nowrap px-5 lg:px-0";

export default function CurrentQualificationForm() {
  return (
    <div className="mt-16">
      <h3 className="mb-5 text-3xl font-bold">Current Qualifications:</h3>

      <div className="space-y-8 overflow-auto rounded-lg bg-white py-6 shadow">
        {/* 1st row */}
        <div className={`${rowWith4Col} text-center font-medium`}>
          <p className="text-start">Title</p>
          <p>Undergraduate</p>
          <p>Postgraduate-1(If any)</p>
          <p>Postgraduate-2(If any)</p>
        </div>

        {/* 2nd row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Degree</p>

          <UInput type="text" name="undergraduate.degree" />
          <UInput type="text" name="postgraduate1.degree" />
          <UInput type="text" name="postgraduate2.degree" />
        </div>

        {/* 3rd Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Discipline/Area</p>

          <UInput type="text" name="undergraduate.discipline" />
          <UInput type="text" name="postgraduate1.discipline" />
          <UInput type="text" name="postgraduate2.discipline" />
        </div>

        {/* 4th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">University</p>

          <UInput type="text" name="undergraduate.university" />
          <UInput type="text" name="postgraduate1.university" />
          <UInput type="text" name="postgraduate2.university" />
        </div>

        {/* 5th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Commenced</p>

          <UDatePicker
            name="undergraduate.commenced"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="postgraduate1.commenced"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="postgraduate2.commenced"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
        </div>

        {/* 6th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Completed</p>

          <UDatePicker
            name="undergraduate.completed"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="postgraduate1.completed"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="postgraduate2.completed"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
        </div>

        {/* 7th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Overall Marks (%)</p>

          <UInput type="number" name="undergraduate.marks" max={100} />
          <UInput type="number" name="postgraduate1.marks" max={100} />
          <UInput type="number" name="postgraduate2.marks" max={100} />
        </div>

        {/* 7th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Overall GPA</p>

          <UInput type="number" name="undergraduate.gpa" max={4} />
          <UInput type="number" name="postgraduate1.gpa" max={4} />
          <UInput type="number" name="postgraduate2.gpa" max={4} />
        </div>
      </div>
    </div>
  );
}
