import { fetchLandlords } from "@/adapters/landlord";
import PcLandlordListTemplate from "@/components/templates/LandlordTemplate/PcLandlordListTemplate";
import { useQuery } from "react-query";

const LandlordIndexPage: React.FC = () => {
  const {
    data: landlords,
    isLoading,
    isError,
  } = useQuery("landlords", () => fetchLandlords());

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!landlords) return <p>Not found.</p>;

  return (
    <div className="container mx-auto px-4">
      <PcLandlordListTemplate landlords={landlords} />
    </div>
  );
};

export default LandlordIndexPage;
