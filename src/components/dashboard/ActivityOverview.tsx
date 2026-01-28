import DentalHealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";

function ActivityOverview() {
  
  return (
    <div className="flex flex-col items-center md:items-stretch gap-6">
      <DentalHealthOverview />
      <NextAppointment />
    </div>
  );
}
export default ActivityOverview;