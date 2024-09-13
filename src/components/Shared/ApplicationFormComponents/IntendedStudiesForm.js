import UDatePicker from "@/components/Form/UDatePicker";
import UInput from "@/components/Form/UInput";
import USelect from "@/components/Form/USelect";

// Common style
const rowWith4Col = "grid grid-cols-4 lg:mx-auto lg:w-[90%] gap-x-10";

export default function IntendedStudiesForm() {
  return (
    <div className="mt-16">
      <h3 className="mb-5 text-3xl font-bold">
        Intended Post-graduate Studies in Australia:
      </h3>

      <section className="space-y-8 rounded-lg bg-white py-6 shadow">
        {/* 1st row */}
        <div className={`${rowWith4Col} text-center font-medium`}>
          <p className="text-start">Title</p>
          <p>Option 1</p>
          <p>Option 2 (If any)</p>
          <p>Option 3(If any)</p>
        </div>

        {/* 2nd row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Degree</p>

          <UInput type="text" name="intendedStudiesOption1.degree" />
          <UInput type="text" name="intendedStudiesOption2.degree" />
          <UInput type="text" name="intendedStudiesOption3.degree" />
        </div>

        {/* 3rd Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Discipline/Area</p>

          <UInput type="text" name="intendedStudiesOption1.discipline" />
          <UInput type="text" name="intendedStudiesOption2.discipline" />
          <UInput type="text" name="intendedStudiesOption3.discipline" />
        </div>

        {/* 4th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">University</p>

          <UInput type="text" name="intendedStudiesOption1.university" />
          <UInput type="text" name="intendedStudiesOption2.university" />
          <UInput type="text" name="intendedStudiesOption3.university" />
        </div>

        {/* 5th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Planned Start</p>

          <UDatePicker
            name="intendedStudiesOption1.plannedStart"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="intendedStudiesOption2.plannedStart"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="intendedStudiesOption3.plannedStart"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
        </div>

        {/* 6th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Duration</p>

          <UDatePicker
            name="intendedStudiesOption1.duration"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="intendedStudiesOption2.duration"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
          <UDatePicker
            name="intendedStudiesOption3.duration"
            picker="month"
            placeholder="MM-YYYY"
            format="YYYY-MM"
          />
        </div>

        {/* 7th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">
            University Tuition Fee (AU$/Year)
          </p>

          <UInput
            type="number"
            name="intendedStudiesOption1.universityTuition"
          />
          <UInput
            type="number"
            name="intendedStudiesOption2.universityTuition"
          />
          <UInput
            type="number"
            name="intendedStudiesOption3.universityTuition"
          />
        </div>

        {/* 7th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Already Applied?</p>

          <USelect
            name="intendedStudiesOption1.alreadyApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption2.alreadyApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption3.alreadyApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />
        </div>

        {/* 8th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Admission Granted?</p>

          <USelect
            name="intendedStudiesOption1.admissionGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption2.admissionGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption3.admissionGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />
        </div>

        {/* 9th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Australian Visa Applied?</p>

          <USelect
            name="intendedStudiesOption1.australianVisaApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption2.australianVisaApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption3.australianVisaApplied"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />
        </div>

        {/* 7th Row */}
        <div className={`${rowWith4Col}`}>
          <p className="text-lg font-semibold">Australian Visa Granted?</p>

          <USelect
            name="intendedStudiesOption1.australianVisaGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption2.australianVisaGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />

          <USelect
            name="intendedStudiesOption3.australianVisaGranted"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            placeholder="Yes/No"
          />
        </div>
      </section>
    </div>
  );
}
