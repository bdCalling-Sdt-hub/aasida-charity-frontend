"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import CurrentQualificationForm from "@/components/Shared/ApplicationFormComponents/CurrentQualificationForm";
import EnglishProficiencyForm from "@/components/Shared/ApplicationFormComponents/EnglishProficiencyForm";
import IntendedStudiesForm from "@/components/Shared/ApplicationFormComponents/IntendedStudiesForm";
import PersonalInfoForm from "@/components/Shared/ApplicationFormComponents/PersonalInfoForm";
import { applyApplicationSchema } from "@/schema/applyApplicationSchema";
import { EditFilled } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UpdateApplicationPageContainer() {
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
            Update <EditFilled className="ml-1" />
          </button>
        </FormWrapper>
      </section>
    </div>
  );
}
