"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import { applyApplicationSchema } from "@/schema/applyApplicationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfoForm from "./PersonalInfoForm";
import CurrentQualificationForm from "./CurrentQualificationForm";
import EnglishProficiencyForm from "./EnglishProficiencyForm";
import IntendedStudiesForm from "./IntendedStudiesForm";
import { useGetSingleUserQuery } from "@/redux/features/user/userApi";
import { useSelector } from "react-redux";
import { Badge, Button } from "antd";
import { BadgeCheck } from "lucide";
import { CheckOutlined } from "@ant-design/icons";
import { useApplyForApplicationMutation } from "@/redux/features/application/applicationApi";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";

// {
//   "dateOfBirth": "1990-05-15T00:00:00.000Z",
//   "homeAddress": "123 Main St, Sydney, Australia",
//   "citizenship": "Australian",
//   "qualifications": [
//     {
//     "degreeLevel":"gra",
//       "degree": "Bachelor of Computer Science",
//       "discipline": "Computer Science",
//       "university": "University of Sydney",
//       "commenced": "2010-02-01T00:00:00.000Z",
//       "completed": "2014-11-30T00:00:00.000Z",
//       "overallMark": 85,
//       "overallGPA": 3.8
//     },
//     {
//       "degreeLevel":"gra",
//       "degree": "Master of Data Science",
//       "discipline": "Data Science",
//       "university": "University of Melbourne",
//       "commenced": "2015-02-01T00:00:00.000Z",
//       "completed": "2017-11-30T00:00:00.000Z",
//       "overallMark": 88,
//       "overallGPA": 4.0
//     }
//   ],
//   "englishProficiency": {
//     "testName": "IELTS",
//     "overall": 8,
//     "listening": 8.5,
//     "reading": 8,
//     "speaking": 7.5,
//     "writing": 7.5,
//     "testDate": "2018-05-10T00:00:00.000Z"
//   },
//   "intendedPostGraduateStudies": [
//     {
//       "degree": "PhD in Artificial Intelligence",
//       "discipline": "Artificial Intelligence",
//       "university": "University of New South Wales",
//       "plannedStart": "2024-02-01T00:00:00.000Z",
//       "duration": 4,
//       "isAlreadyApplied": true,
//       "isAustralianVisaApplied": true,
//       "isAustralianVisaGranted": false
//     }
//   ]
// }

export default function ApplyApplicationPageContainer() {
  const { user } = useSelector((state) => state.auth);
  const { data: userDataRes, isLoading: isUserLoading } = useGetSingleUserQuery(
    user?.userId,
    { skip: !user?.userId },
  );
  console.log(userDataRes);
  const userData = userDataRes?.data || {};

  const [applyForApplication, { isLoading: isApplying }] =
    useApplyForApplicationMutation();

  const onSubmit = async (data) => {
    const updatedData = {
      dateOfBirth: data?.dateOfBirth,
      homeAddress: data?.homeAddress,
      citizenship: data?.citizenship,
      qualifications: [
        {
          degreeLevel: "undergraduate",
          ...data?.undergraduate,
          overallMark: data.undergraduate?.marks,
          overallGPA: data.undergraduate?.gpa,
        },
        {
          degreeLevel: "postgraduate1",
          ...data?.postgraduate1,
          overallMark: data.postgraduate1?.marks,
          overallGPA: data.postgraduate1?.gpa,
        },
        {
          degreeLevel: "postgraduate2",
          ...data?.postgraduate2,
          overallMark: data.postgraduate2?.marks,
          overallGPA: data.postgraduate2?.gpa,
        },
      ],
      englishProficiency: {
        testName: data?.englishTest,
        ...data?.englishTestResult,
        testDate: data?.englishTestDate,
      },
      intendedPostGraduateStudies: [
        {
          ...data?.intendedStudiesOption1,
        },
        {
          ...data?.intendedStudiesOption2,
        },
        {
          ...data?.intendedStudiesOption3,
        },
      ],
    };

    try {
      await applyForApplication(updatedData).unwrap();
      SuccessToast("Application submitted successfully");
    } catch (error) {
      console.log(error);
      ErrorToast(error?.error);
    }

    console.log(updatedData);
  };

  return (
    <div className="space-y-16">
      {/* Account holder details */}
      <section className="space-y-5 text-primary-black">
        <h3 className="text-3xl font-bold">Account Holder Details</h3>

        <div className="grid w-full grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex-center-between text-xl font-medium">
            <p>Surname: </p>
            <p>{userData?.surName}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Email Address: </p>
            <p>{userData?.email}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>First Name: </p>
            <p>{userData?.name?.firstName}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Phone Number: </p>
            <p>{userData?.phoneNumber}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Middle Name: </p>
            <p>{userData?.name?.middleName || "N/A"}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Verification: </p>
            <p>
              {userData?.isVerified ? (
                <p className="text-green-500">
                  Verified <CheckOutlined className="text-sm" />
                </p>
              ) : (
                <p className="text-yellow-500">Not Verified</p>
              )}
            </p>
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

          <Button
            loading={isApplying}
            htmlType="submit"
            className="primary-button mt-10 h-12"
          >
            Submit
          </Button>
        </FormWrapper>
      </section>
    </div>
  );
}
