/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrokerDetailsPage } from "@/components/mortgage-broker/broker-details";


export default function BrokerDetails({ params }: any) {
  return <BrokerDetailsPage brokerId={params.id} />;
}
