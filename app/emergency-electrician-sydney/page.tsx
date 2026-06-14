import { makeServiceMetadata, ServicePage } from "@/components/service-page";

export const metadata = makeServiceMetadata("/emergency-electrician-sydney");

export default function Page() {
  return <ServicePage path="/emergency-electrician-sydney" />;
}
