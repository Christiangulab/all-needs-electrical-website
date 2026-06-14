import { makeServiceMetadata, ServicePage } from "@/components/service-page";

export const metadata = makeServiceMetadata("/ev-charger-installation-sydney");

export default function Page() {
  return <ServicePage path="/ev-charger-installation-sydney" />;
}
