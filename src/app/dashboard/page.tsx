import HelpButton from "@/components/chatbox/HelpButton";
import ActivityOverview from "@/components/dashboard/ActivityOverview";
import MainActions from "@/components/dashboard/MainActions";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar />
      {/* <div className="max-w-7xl mx-auto px-6 py-8 pt-24"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 pt-24 flex flex-col items-center md:items-stretch">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
      <HelpButton/>
    </>
  );
}
export default DashboardPage;