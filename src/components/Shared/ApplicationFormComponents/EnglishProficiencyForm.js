import UDatePicker from "@/components/Form/UDatePicker";
import UInput from "@/components/Form/UInput";
import USelect from "@/components/Form/USelect";
import { Divider } from "antd";
import React from "react";

export default function EnglishProficiencyForm({ data }) {
  return (
    <div className="mt-16">
      <h3 className="mb-5 text-3xl font-bold">Current Qualifications:</h3>

      <div className="overflow-auto rounded-lg bg-white p-4 shadow">
        <div className="flex-center-start">
          <p className="text-center font-medium lg:w-1/4">English Test Taken</p>
          <Divider
            type="vertical"
            style={{ background: "gray", height: "20px" }}
          />
          <p className="w-full text-center font-medium">Result</p>
        </div>

        <Divider style={{ marginBlock: "16px", backgroundColor: "gray" }} />

        <div className="flex-center-start">
          <div className="lg:w-1/4"></div>
          <div className="grid w-full grid-cols-5 text-center font-medium">
            <p>Overall</p>
            <p>Reading</p>
            <p>Writing</p>
            <p>Speaking</p>
            <p>Listening</p>
          </div>
        </div>

        <Divider style={{ marginBlock: "16px", backgroundColor: "gray" }} />

        <div className="flex-center-start">
          <div className="flex flex-col items-start gap-y-4 font-medium lg:w-1/4">
            <div className="flex-center-start gap-x-2">
              <p>Test: </p>
              <USelect
                defaultValue={data?.englishProficiency?.testName}
                name="englishTest"
                placeholder="Select English Test"
                options={[
                  { label: "IELTS", value: "IELTS" },
                  { label: "PTE", value: "PTE" },
                ]}
              />
            </div>

            <div className="flex-center-start w-max gap-x-2">
              <p>Date: </p>

              <UDatePicker
                name="englishTestDate"
                placeholder="DD-MM-YYYY"
                format="YYYY-MM-DD"
                picker="date"
                style={{ height: "35px" }}
              />
            </div>
          </div>

          <Divider
            type="vertical"
            style={{ backgroundColor: "gray", height: "80px" }}
          />

          <div className="grid w-full grid-cols-5 gap-x-5 px-4 text-center font-medium">
            <UInput name="englishTestResult.overall" type="number" max={9} />
            <UInput name="englishTestResult.reading" type="number" max={9} />
            <UInput name="englishTestResult.writing" type="number" max={9} />
            <UInput name="englishTestResult.speaking" type="number" max={9} />
            <UInput name="englishTestResult.listening" type="number" max={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
