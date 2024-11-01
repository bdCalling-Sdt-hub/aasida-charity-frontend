import UDatePicker from "@/components/Form/UDatePicker";
import UInput from "@/components/Form/UInput";
import USelect from "@/components/Form/USelect";
import { HomeOutlined } from "@ant-design/icons";

const LABEL_STYLES = {
  color: "black",
  fontSize: "1.1rem",
  fontWeight: "400",
};

const CITIZENSHIP_OPTIONS = ["Pakistan"];

export default function PersonalInfoForm({ data }) {
  return (
    <>
      <h3 className="mb-5 text-3xl font-bold">Personal Information:</h3>
      <section className="space-y-5">
        <UDatePicker
          name="dateOfBirth"
          label="Date of Birth"
          placeholder="MM-DD-YYYY"
          labelStyles={LABEL_STYLES}
          format="MM-DD-YYYY"
          style={{ marginBottom: "20px", width: "100%", height: "40px" }}
        />

        <UInput
          type="text"
          name="homeAddress"
          label="Home Address"
          placeholder="xxxxxxxxxxxxxxx"
          style={{ height: "40px", marginBottom: "20px" }}
          labelStyles={LABEL_STYLES}
          suffix={<HomeOutlined style={{ color: "#bfbfbf" }} />}
        />

        <USelect
          name="citizenship"
          label="Citizenship"
          defaultValue={data?.citizenship}
          options={CITIZENSHIP_OPTIONS.map((option) => {
            return { value: option, label: option };
          })}
          placeholder="Select country"
          style={{ height: "40px" }}
          labelStyles={LABEL_STYLES}
        />
      </section>
    </>
  );
}
