import { makeServiceMetadata, ServicePage } from "@/components/service-page";

export const metadata = makeServiceMetadata("/switchboard-upgrades-sydney");

export default function Page() {
  return <ServicePage path="/switchboard-upgrades-sydney" />;
}
