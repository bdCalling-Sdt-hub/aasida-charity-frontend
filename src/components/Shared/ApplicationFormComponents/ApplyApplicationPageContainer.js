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
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import {
  useApplyForApplicationMutation,
  useGetMyApplicationsQuery,
} from "@/redux/features/application/applicationApi";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";
import TextSkeleton from "@/components/TextSkeleton/TextSkeleton";
import { Tag } from "antd";
import { Check } from "lucide-react";
import { SuccessModal } from "@/utils/custom-modal";
import { BadgeInfo } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApplyApplicationPageContainer() {
  const { user } = useSelector((state) => state.auth);
  const { data: userDataRes, isLoading: isUserLoading } = useGetSingleUserQuery(
    user?.userId,
    { skip: !user?.userId },
  );
  const userData = userDataRes?.data || {};

  // ============ Applications data =================
  const { data: applicationsRes } = useGetMyApplicationsQuery(null, {
    skip: !user?.userId,
  });
  const myApplications = applicationsRes?.data || [];

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

      SuccessModal("Application submitted successfully!");
    } catch (error) {
      ErrorToast(error?.message);
    }
  };

  return (
    <div className="space-y-16">
      {/* Account holder details */}
      <section className="space-y-5 text-primary-black">
        <h3 className="text-3xl font-bold">Account Holder Details</h3>

        <div className="grid w-full grid-cols-1 gap-16 gap-y-4 lg:grid-cols-2">
          <div className="flex-center-between text-xl font-medium">
            <p>Surname: </p>
            <p>{isUserLoading ? <TextSkeleton /> : userData.surName}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Email Address: </p>
            <p>{isUserLoading ? <TextSkeleton /> : userData?.email}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>First Name: </p>
            <p>
              {isUserLoading ? <TextSkeleton /> : userData?.name?.firstName}
            </p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Phone Number: </p>
            <p>{isUserLoading ? <TextSkeleton /> : userData?.phoneNumber}</p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Middle Name: </p>
            <p>
              {isUserLoading ? (
                <TextSkeleton />
              ) : (
                userData?.name?.middleName || "N/A"
              )}
            </p>
          </div>
          <div className="flex-center-between text-xl font-medium">
            <p>Verification: </p>
            <p>
              {isUserLoading ? (
                <TextSkeleton />
              ) : userData?.isVerified ? (
                <Tag
                  color="green"
                  className="flex items-center gap-x-1 text-base"
                >
                  Verified <Check size={15} />
                </Tag>
              ) : (
                <Tag color="error" className="text-base">
                  Not Verified
                </Tag>
              )}
            </p>
          </div>
        </div>
      </section>

      {myApplications?.length > 0 ? (
        <section className="text-center">
          <div className="flex items-center justify-center gap-x-3">
            <h3 className="text-3xl font-bold">You have already applied</h3>
            <CircleCheckBig size={30} color="#4bb543" />
          </div>

          <p className="mt-2 text-lg text-gray-500">
            If you want to see your application details or update it, please
            click button below:
          </p>

          <div className="mt-6">
            <Link href="/update-application">
              <Button
                type="primary"
                htmlType="button"
                size="large"
                icon={<ArrowRight size={20} />}
                iconPosition="end"
                style={{
                  paddingInline: "40px",
                }}
              >
                See Details
              </Button>
            </Link>
          </div>
        </section>
      ) : (
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
      )}
    </div>
  );
}
