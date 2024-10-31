"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import CurrentQualificationForm from "@/components/Shared/ApplicationFormComponents/CurrentQualificationForm";
import EnglishProficiencyForm from "@/components/Shared/ApplicationFormComponents/EnglishProficiencyForm";
import IntendedStudiesForm from "@/components/Shared/ApplicationFormComponents/IntendedStudiesForm";
import PersonalInfoForm from "@/components/Shared/ApplicationFormComponents/PersonalInfoForm";
import BookLoader from "@/components/Shared/BookLoader/BookLoader";
import TextSkeleton from "@/components/TextSkeleton/TextSkeleton";
import { useGetMyApplicationsQuery } from "@/redux/features/user/userApi";
import { applyApplicationSchema } from "@/schema/applyApplicationSchema";
import { CheckOutlined, EditFilled } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "antd";
import { Empty } from "antd";
import Link from "next/link";

export default function UpdateApplicationPageContainer() {
  // Get applications data
  const { data: applicationsRes, isLoading: isApplicationsLoading } =
    useGetMyApplicationsQuery();
  const applications = applicationsRes?.data || []; // Note: This will only work if there is only one application
  const application = applications[0] || {};

  // Applicant data
  const applicantData = application?.applicant;

  // Set default values
  // TODO: Split the data into different components
  const defaultValues = {
    dateOfBirth: application?.dateOfBirth,
    citizenship: application?.citizenship,
    homeAddress: application?.homeAddress,

    // CURRENT QUALIFICATIONS
    "undergraduate.degree":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.degree,
    "postgraduate1.degree":
      application?.qualifications?.length > 0 &&
      application?.qualifications[1]?.degree,
    "postgraduate2.degree":
      application?.qualifications?.length > 0 &&
      application?.qualifications[2]?.degree,
    "undergraduate.discipline":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.discipline,
    "postgraduate1.discipline":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.discipline,
    "postgraduate2.discipline":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.discipline,

    // University
    "undergraduate.university":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.university,
    "postgraduate1.university":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.university,
    "postgraduate2.university":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.university,

    // Commenced
    "undergraduate.commenced":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.commenced,
    "postgraduate1.commenced":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.commenced,
    "postgraduate2.commenced":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.commenced,

    // Completed
    "undergraduate.completed":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.completed,
    "postgraduate1.completed":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.completed,
    "postgraduate2.completed":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.completed,

    // Marks
    "undergraduate.marks":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.overallMark,
    "postgraduate1.marks":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.overallMark,
    "postgraduate2.marks":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.overallMark,

    // GPA
    "undergraduate.gpa":
      application?.qualifications?.length > 0 &&
      application?.qualifications[0]?.overallGPA,
    "postgraduate1.gpa":
      application?.qualifications?.length > 1 &&
      application?.qualifications[1]?.overallGPA,
    "postgraduate2.gpa":
      application?.qualifications?.length > 2 &&
      application?.qualifications[2]?.overallGPA,

    // English Proficiency
    englishTest: application?.englishProficiency?.testName,
    englishTestDate: application?.englishProficiency?.testDate,
    "englishTestResult.overall": application?.englishProficiency?.overall,
    "englishTestResult.listening": application?.englishProficiency?.listening,
    "englishTestResult.speaking": application?.englishProficiency?.speaking,
    "englishTestResult.writing": application?.englishProficiency?.writing,
    "englishTestResult.reading": application?.englishProficiency?.reading,

    // POST GRADUATION STUDIES
    // Degree
    "intendedStudiesOption1.degree":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.degree,
    "intendedStudiesOption2.degree":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.degree,
    "intendedStudiesOption3.degree":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.degree,

    // Discipline
    "intendedStudiesOption1.discipline":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.discipline,
    "intendedStudiesOption2.discipline":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.discipline,
    "intendedStudiesOption3.discipline":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.discipline,

    // University
    "intendedStudiesOption1.university":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.university,
    "intendedStudiesOption2.university":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.university,
    "intendedStudiesOption3.university":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.university,

    // Planned Start
    "intendedStudiesOption1.plannedStart":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.plannedStart,
    "intendedStudiesOption2.plannedStart":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.plannedStart,
    "intendedStudiesOption3.plannedStart":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.plannedStart,

    // Duration
    "intendedStudiesOption1.duration":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.duration,
    "intendedStudiesOption2.duration":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.duration,
    "intendedStudiesOption3.duration":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.duration,

    // Tuition Fee
    "intendedStudiesOption1.tuitionFee":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.tuitionFee,
    "intendedStudiesOption2.tuitionFee":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.tuitionFee,
    "intendedStudiesOption3.tuitionFee":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.tuitionFee,

    // Already Applied
    "intendedStudiesOption1.alreadyApplied":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.alreadyApplied,
    "intendedStudiesOption2.alreadyApplied":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.alreadyApplied,
    "intendedStudiesOption3.alreadyApplied":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.alreadyApplied,

    // Admission Granted
    "intendedStudiesOption1.admissionGranted":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.admissionGranted,
    "intendedStudiesOption2.admissionGranted":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.admissionGranted,
    "intendedStudiesOption3.admissionGranted":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.admissionGranted,

    // Australian Visa Applied
    "intendedStudiesOption1.australianVisaApplied":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.australianVisaApplied,
    "intendedStudiesOption2.australianVisaApplied":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.australianVisaApplied,
    "intendedStudiesOption3.australianVisaApplied":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.australianVisaApplied,

    // Australian Visa Granted
    "intendedStudiesOption1.australianVisaGranted":
      application?.intendedPostGraduateStudies?.length > 0 &&
      application?.intendedPostGraduateStudies[0]?.australianVisaGranted,
    "intendedStudiesOption2.australianVisaGranted":
      application?.intendedPostGraduateStudies?.length > 1 &&
      application?.intendedPostGraduateStudies[1]?.australianVisaGranted,
    "intendedStudiesOption3.australianVisaGranted":
      application?.intendedPostGraduateStudies?.length > 2 &&
      application?.intendedPostGraduateStudies[2]?.australianVisaGranted,
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {isApplicationsLoading ? (
        <BookLoader />
      ) : (
        <>
          {applications?.length > 0 ? (
            <div className="space-y-16">
              {/* Account holder details */}
              <section className="space-y-5 text-primary-black">
                <h3 className="text-3xl font-bold">Account Holder Details</h3>

                <div className="grid w-full grid-cols-2 gap-x-16 gap-y-4">
                  <div className="flex-center-between text-xl font-medium">
                    <p>Surname: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : (
                        applicantData?.surName
                      )}
                    </p>
                  </div>
                  <div className="flex-center-between text-xl font-medium">
                    <p>Email Address: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : (
                        applicantData?.email
                      )}
                    </p>
                  </div>
                  <div className="flex-center-between text-xl font-medium">
                    <p>First Name: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : (
                        applicantData?.name?.firstName
                      )}
                    </p>
                  </div>
                  <div className="flex-center-between text-xl font-medium">
                    <p>Phone Number: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : (
                        applicantData?.phoneNumber
                      )}
                    </p>
                  </div>
                  <div className="flex-center-between text-xl font-medium">
                    <p>Middle Name: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : (
                        applicantData?.name?.middleName
                      )}
                    </p>
                  </div>
                  <div className="flex-center-between text-xl font-medium">
                    <p>Verification: </p>
                    <p>
                      {isApplicationsLoading ? (
                        <TextSkeleton />
                      ) : applicantData?.isVerified ? (
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
                  defaultValues={defaultValues}
                >
                  <PersonalInfoForm data={application} />
                  <CurrentQualificationForm />
                  <EnglishProficiencyForm data={application} />
                  <IntendedStudiesForm data={application} />

                  <button type="submit" className="primary-button mt-10 h-12">
                    Update <EditFilled className="ml-1" />
                  </button>
                </FormWrapper>
              </section>
            </div>
          ) : (
            <div className="flex h-[50vh] flex-col items-center justify-center space-y-5">
              <Empty />

              <div className="flex-center-start flex-col gap-x-2 text-lg lg:flex-row">
                <p>Seems like you've not applied yet.</p>
                <Link
                  href="/apply-application"
                  className="font-medium text-blue-500 underline"
                >
                  Apply now!
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
