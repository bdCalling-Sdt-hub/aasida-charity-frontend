"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import CurrentQualificationForm from "@/components/Shared/ApplicationFormComponents/CurrentQualificationForm";
import EnglishProficiencyForm from "@/components/Shared/ApplicationFormComponents/EnglishProficiencyForm";
import IntendedStudiesForm from "@/components/Shared/ApplicationFormComponents/IntendedStudiesForm";
import PersonalInfoForm from "@/components/Shared/ApplicationFormComponents/PersonalInfoForm";
import { applyApplicationSchema } from "@/schema/applyApplicationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";
import { useEffect, useState } from "react";
import BookLoader from "@/components/Shared/BookLoader/BookLoader";
import { useGetMyApplicationsQuery } from "@/redux/features/application/applicationApi";
import { useUpdateApplicationMutation } from "@/redux/features/application/applicationApi";
import { EditFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { Button } from "antd";

export default function UpdateApplicationContainer({ id }) {
  // Get applications data
  const { data: applicationsRes, isLoading: isApplicationsLoading } =
    useGetMyApplicationsQuery();
  const applications = applicationsRes?.data || [];

  // Find application data by id from applications
  const [application, setApplication] = useState({});
  useEffect(() => {
    const foundApplication = applications?.find(
      (application) => application._id === id,
    );
    setApplication(foundApplication);
  }, [applications]);

  // Update application api handler
  const [updateApplication, { isLoading: isUpdating }] =
    useUpdateApplicationMutation();

  // Set default values
  // TODO: Split the data into different components
  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    if (application) {
      setDefaultValues({
        // Basic info
        dateOfBirth: application?.dateOfBirth
          ? dayjs(new Date(application.dateOfBirth)).format("MM-DD-YYYY")
          : null,
        citizenship: application?.citizenship ?? null,
        homeAddress: application?.homeAddress ?? null,

        // CURRENT QUALIFICATIONS with number conversion
        "undergraduate.degree":
          application?.qualifications?.[0]?.degree ?? null,
        "postgraduate1.degree":
          application?.qualifications?.[1]?.degree ?? null,
        "postgraduate2.degree":
          application?.qualifications?.[2]?.degree ?? null,

        "undergraduate.discipline":
          application?.qualifications?.[0]?.discipline ?? null,
        "postgraduate1.discipline":
          application?.qualifications?.[1]?.discipline ?? null,
        "postgraduate2.discipline":
          application?.qualifications?.[2]?.discipline ?? null,

        "undergraduate.university":
          application?.qualifications?.[0]?.university ?? null,
        "postgraduate1.university":
          application?.qualifications?.[1]?.university ?? null,
        "postgraduate2.university":
          application?.qualifications?.[2]?.university ?? null,

        // English Proficiency
        englishTest: application?.englishProficiency?.testName,
        englishTestDate: application?.englishProficiency?.testDate,
        "englishTestResult.overall": application?.englishProficiency?.overall,
        "englishTestResult.listening":
          application?.englishProficiency?.listening,
        "englishTestResult.speaking": application?.englishProficiency?.speaking,
        "englishTestResult.writing": application?.englishProficiency?.writing,
        "englishTestResult.reading": application?.englishProficiency?.reading,

        // Commenced and Completed Dates
        "undergraduate.commenced":
          application?.qualifications?.[0]?.commenced ?? null,
        "postgraduate1.commenced":
          application?.qualifications?.[1]?.commenced ?? null,
        "postgraduate2.commenced":
          application?.qualifications?.[2]?.commenced ?? null,

        "undergraduate.completed":
          application?.qualifications?.[0]?.completed ?? null,
        "postgraduate1.completed":
          application?.qualifications?.[1]?.completed ?? null,
        "postgraduate2.completed":
          application?.qualifications?.[2]?.completed ?? null,

        // Marks (Converted to number)
        "undergraduate.marks": application?.qualifications?.[0]?.overallMark
          ? parseFloat(application.qualifications[0].overallMark)
          : null,
        "postgraduate1.marks": application?.qualifications?.[1]?.overallMark
          ? parseFloat(application.qualifications[1].overallMark)
          : null,
        "postgraduate2.marks": application?.qualifications?.[2]?.overallMark
          ? parseFloat(application.qualifications[2].overallMark)
          : null,

        // GPA (Converted to number)
        "undergraduate.gpa": application?.qualifications?.[0]?.overallGPA
          ? parseFloat(application.qualifications[0].overallGPA)
          : null,
        "postgraduate1.gpa": application?.qualifications?.[1]?.overallGPA
          ? parseFloat(application.qualifications[1].overallGPA)
          : null,
        "postgraduate2.gpa": application?.qualifications?.[2]?.overallGPA
          ? parseFloat(application.qualifications[2].overallGPA)
          : null,

        // POST-GRADUATION STUDIES with number conversions where applicable
        "intendedStudiesOption1.degree":
          application?.intendedPostGraduateStudies?.[0]?.degree ?? null,
        "intendedStudiesOption2.degree":
          application?.intendedPostGraduateStudies?.[1]?.degree ?? null,
        "intendedStudiesOption3.degree":
          application?.intendedPostGraduateStudies?.[2]?.degree ?? null,

        "intendedStudiesOption1.discipline":
          application?.intendedPostGraduateStudies?.[0]?.discipline ?? null,
        "intendedStudiesOption2.discipline":
          application?.intendedPostGraduateStudies?.[1]?.discipline ?? null,
        "intendedStudiesOption3.discipline":
          application?.intendedPostGraduateStudies?.[2]?.discipline ?? null,

        "intendedStudiesOption1.university":
          application?.intendedPostGraduateStudies?.[0]?.university ?? null,
        "intendedStudiesOption2.university":
          application?.intendedPostGraduateStudies?.[1]?.university ?? null,
        "intendedStudiesOption3.university":
          application?.intendedPostGraduateStudies?.[2]?.university ?? null,

        "intendedStudiesOption1.plannedStart":
          application?.intendedPostGraduateStudies?.[0]?.plannedStart ?? null,
        "intendedStudiesOption2.plannedStart":
          application?.intendedPostGraduateStudies?.[1]?.plannedStart ?? null,
        "intendedStudiesOption3.plannedStart":
          application?.intendedPostGraduateStudies?.[2]?.plannedStart ?? null,

        // Duration (Converted to number)
        "intendedStudiesOption1.duration": application
          ?.intendedPostGraduateStudies?.[0]?.duration
          ? parseInt(application.intendedPostGraduateStudies[0].duration)
          : null,
        "intendedStudiesOption2.duration": application
          ?.intendedPostGraduateStudies?.[1]?.duration
          ? parseInt(application.intendedPostGraduateStudies[1].duration)
          : null,
        "intendedStudiesOption3.duration": application
          ?.intendedPostGraduateStudies?.[2]?.duration
          ? parseInt(application.intendedPostGraduateStudies[2].duration)
          : null,

        // Tuition Fee (Converted to number)
        "intendedStudiesOption1.tuitionFee": application
          ?.intendedPostGraduateStudies?.[0]?.tuitionFee
          ? parseFloat(application.intendedPostGraduateStudies[0].tuitionFee)
          : null,
        "intendedStudiesOption2.tuitionFee": application
          ?.intendedPostGraduateStudies?.[1]?.tuitionFee
          ? parseFloat(application.intendedPostGraduateStudies[1].tuitionFee)
          : null,
        "intendedStudiesOption3.tuitionFee": application
          ?.intendedPostGraduateStudies?.[2]?.tuitionFee
          ? parseFloat(application.intendedPostGraduateStudies[2].tuitionFee)
          : null,

        // Boolean values as they are
        "intendedStudiesOption1.alreadyApplied":
          application?.intendedPostGraduateStudies?.[0]?.alreadyApplied ?? null,
        "intendedStudiesOption2.alreadyApplied":
          application?.intendedPostGraduateStudies?.[1]?.alreadyApplied ?? null,
        "intendedStudiesOption3.alreadyApplied":
          application?.intendedPostGraduateStudies?.[2]?.alreadyApplied ?? null,

        "intendedStudiesOption1.admissionGranted":
          application?.intendedPostGraduateStudies?.[0]?.admissionGranted ??
          null,
        "intendedStudiesOption2.admissionGranted":
          application?.intendedPostGraduateStudies?.[1]?.admissionGranted ??
          null,
        "intendedStudiesOption3.admissionGranted":
          application?.intendedPostGraduateStudies?.[2]?.admissionGranted ??
          null,

        "intendedStudiesOption1.australianVisaApplied":
          application?.intendedPostGraduateStudies?.[0]
            ?.australianVisaApplied ?? null,
        "intendedStudiesOption2.australianVisaApplied":
          application?.intendedPostGraduateStudies?.[1]
            ?.australianVisaApplied ?? null,
        "intendedStudiesOption3.australianVisaApplied":
          application?.intendedPostGraduateStudies?.[2]
            ?.australianVisaApplied ?? null,

        "intendedStudiesOption1.australianVisaGranted":
          application?.intendedPostGraduateStudies?.[0]
            ?.australianVisaGranted ?? null,
        "intendedStudiesOption2.australianVisaGranted":
          application?.intendedPostGraduateStudies?.[1]
            ?.australianVisaGranted ?? null,
        "intendedStudiesOption3.australianVisaGranted":
          application?.intendedPostGraduateStudies?.[2]
            ?.australianVisaGranted ?? null,
      });
    }
  }, [isUpdating, application, isApplicationsLoading]);

  const onSubmit = async (data) => {
    const payload = {
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
          admissionGranted: data?.intendedStudiesOption1?.admissionGranted,
          alreadyApplied: data?.intendedStudiesOption1?.alreadyApplied,
          australianVisaApplied:
            data?.intendedStudiesOption1?.australianVisaApplied,
          australianVisaGranted:
            data?.intendedStudiesOption1?.australianVisaGranted,
          degree: data?.intendedStudiesOption1?.degree,
          discipline: data?.intendedStudiesOption1?.discipline,
          duration: data?.intendedStudiesOption1?.duration,
          plannedStart: data?.intendedStudiesOption1?.plannedStart,
          tuitionFee: data?.intendedStudiesOption1?.tuitionFee,
          university: data?.intendedStudiesOption1?.university,
        },
        {
          admissionGranted: data?.intendedStudiesOption2?.admissionGranted,
          alreadyApplied: data?.intendedStudiesOption2?.alreadyApplied,
          australianVisaApplied:
            data?.intendedStudiesOption2?.australianVisaApplied,
          australianVisaGranted:
            data?.intendedStudiesOption2?.australianVisaGranted,
          degree: data?.intendedStudiesOption2?.degree,
          discipline: data?.intendedStudiesOption2?.discipline,
          duration: data?.intendedStudiesOption2?.duration,
          plannedStart: data?.intendedStudiesOption2?.plannedStart,
          tuitionFee: data?.intendedStudiesOption2?.tuitionFee,
          university: data?.intendedStudiesOption2?.university,
        },
        {
          admissionGranted: data?.intendedStudiesOption3?.admissionGranted,
          alreadyApplied: data?.intendedStudiesOption3?.alreadyApplied,
          australianVisaApplied:
            data?.intendedStudiesOption3?.australianVisaApplied,
          australianVisaGranted:
            data?.intendedStudiesOption3?.australianVisaGranted,
          degree: data?.intendedStudiesOption3?.degree,
          discipline: data?.intendedStudiesOption3?.discipline,
          duration: data?.intendedStudiesOption3?.duration,
          plannedStart: data?.intendedStudiesOption3?.plannedStart,
          tuitionFee: data?.intendedStudiesOption3?.tuitionFee,
          university: data?.intendedStudiesOption3?.university,
        },
      ],
    };

    try {
      await updateApplication({
        id: application?._id,
        data: payload,
      });

      SuccessToast("Application updated successfully");
    } catch (error) {
      ErrorToast(
        error?.message || error?.data?.message || "Something went wrong!",
      );
    }
  };

  if (isApplicationsLoading) {
    return <BookLoader />;
  }

  return (
    <section className="text-primary-black">
      <FormWrapper
        onSubmit={onSubmit}
        // resolver={zodResolver(
        //   applyApplicationSchema.applyApplicationFormSchema,
        // )}
        defaultValues={defaultValues}
      >
        <PersonalInfoForm data={application} />
        <CurrentQualificationForm />
        <EnglishProficiencyForm data={application} />
        <IntendedStudiesForm data={application} />

        <Button
          loading={isUpdating}
          htmlType="submit"
          className="primary-button mt-10 h-12"
        >
          Update
        </Button>
      </FormWrapper>
    </section>
  );
}
