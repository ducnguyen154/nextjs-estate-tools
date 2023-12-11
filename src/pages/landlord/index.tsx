import { fetchLandlords, FETCH_LANDLORDS_KEY } from "@/adapters/landlord";
import PcLandlordListTemplate from "@/components/templates/LandlordTemplate/PcLandlordListTemplate";
import { useQuery } from "react-query";

const LandlordIndexPage: React.FC = () => {
  const {
    data: landlords,
    isLoading,
    isError,
  } = useQuery(FETCH_LANDLORDS_KEY, () => fetchLandlords());

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4">
      <PcLandlordListTemplate
        landlords={landlords.results}
        resultSet={landlords.resultSet}
      />
    </div>
  );
};

export default LandlordIndexPage;
