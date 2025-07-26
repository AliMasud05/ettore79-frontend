import { BrokerDetailsPage } from "@/components/mortgage-broker/broker-details";

interface BrokerDetailsProps {
  params: {
    id: string;
  };
}

export default function BrokerDetails({ params }: BrokerDetailsProps) {
  return <BrokerDetailsPage brokerId={params.id} />;
}
