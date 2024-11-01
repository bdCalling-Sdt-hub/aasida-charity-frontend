"use client";

import BookLoader from "@/components/Shared/BookLoader/BookLoader";
import TextSkeleton from "@/components/TextSkeleton/TextSkeleton";
import { useGetMyApplicationsQuery } from "@/redux/features/application/applicationApi";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Empty, Table, ConfigProvider } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import { Tag } from "antd";
import { Check } from "lucide-react";

export default function UpdateApplicationPageContainer() {
  // Get applications data
  const { data: applicationsRes, isLoading: isApplicationsLoading } =
    useGetMyApplicationsQuery();
  const applications = applicationsRes?.data || []; // Note: This will only work if there is only one application
  const application = applications?.[0] || {};

  // Applicant data
  const applicantData = application?.applicant;

  // Existing application data for table
  const columns = [
    {
      title: "Application ID",
      dataIndex: "applicationId",
      key: "applicationId",
      render: (value) => `#${value}`,
    },
    {
      title: "Applied At",
      dataIndex: "appliedAt",
      key: "appliedAt",
      sorter: (a, b) => new Date(a.appliedAt) - new Date(b.appliedAt),
      sortDirections: ["descend"],

      render: (value) => dayjs(value).format("DD MMM YYYY, HH:mm"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Accepted",
          value: "accepted",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      width: "40%",
      render: (value) => (
        <Tag color="geekblue-inverse">
          {value[0]?.toUpperCase() + value.slice(1)}
        </Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link href={`/update-application/${record.applicationId}`}>
          <Button
            type="primary"
            iconPosition="end"
            icon={<ArrowRightOutlined />}
          >
            See Details
          </Button>
        </Link>
      ),
    },
  ];

  const dataSource = applications?.map((application) => ({
    key: application.id,
    applicationId: application._id,
    appliedAt: application.createdAt,
    status: application.status,
  }));

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#334a55",
            headerColor: "#ffffff",
            colorFillSecondary: "#334a55",
            headerSortHoverBg: "gray",
          },
        },
      }}
    >
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

              <section>
                <h3 className="mb-5 text-3xl font-bold">My Applications</h3>

                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{ pageSize: 5 }}
                />
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
    </ConfigProvider>
  );
}
