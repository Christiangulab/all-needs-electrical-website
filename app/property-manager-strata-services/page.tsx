import { makeServiceMetadata, ServicePage } from "@/components/service-page";

export const metadata = makeServiceMetadata("/property-manager-strata-services");

export default function Page() {
  return <ServicePage path="/property-manager-strata-services" />;
}
