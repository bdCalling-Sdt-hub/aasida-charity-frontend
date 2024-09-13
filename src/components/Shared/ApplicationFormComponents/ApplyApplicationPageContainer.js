"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import { applyApplicationSchema } from "@/schema/applyApplicationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfoForm from "./PersonalInfoForm";
import CurrentQualificationForm from "./CurrentQualificationForm";
import EnglishProficiencyForm from "./EnglishProficiencyForm";
import IntendedStudiesForm from "./IntendedStudiesForm";

export default function ApplyApplicationPageContainer() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Account holder details */}
      <section className="space-y-5 text-primary-black">
        <h3 className="text-3xl font-bold">Account Holder Details</h3>

        <div className="grid w-full grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex-center-between text-xl font-medium">
            <p>Surname: </p>
            <p>xxxx</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Email Address: </p>
            <p>xxxx</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>First Name: </p>
            <p>Mr. X</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Phone Number: </p>
            <p>xxxx</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Middle Name: </p>
            <p>xxxx</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Password: </p>
            <p>****</p>
          </div>
        </div>
      </section>

      {/* Personal information form */}
      <section className="text-primary-black">
        <FormWrapper
          onSubmit={onSubmit}
          resolver={zodResolver(
            applyApplicationSchema.applyApplicationFormSchema,
          )}
        >
          <PersonalInfoForm />
          <CurrentQualificationForm />
          <EnglishProficiencyForm />
          <IntendedStudiesForm />

          <button type="submit" className="primary-button mt-10 h-12">
            Submit
          </button>
        </FormWrapper>
      </section>
    </div>
  );
}
