import UpdateApplicationContainer from "./_components/UpdateApplicationContainer";

export const metadata = {
  title: "Update Application",
  description: "Update existing application for financial assistance page",
};

export default function DynamicUpdateApplicationPage({ params }) {
  return <UpdateApplicationContainer id={params?.id} />;
}
