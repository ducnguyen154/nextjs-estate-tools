import { useRouter } from "next/router";
import PcPropertyBookingTempalte from "@/components/templates/PropertyTemplate/PcPropertyBookingTemplate";

const propertyBookingPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  const bookingData = {
    propertyid: id,
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl mb-4">Booking form</h1>
      <PcPropertyBookingTempalte />
    </div>
  );
};

export default propertyBookingPage;
