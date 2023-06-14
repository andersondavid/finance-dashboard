import MainContent from "./components/maincontent";
import SideBar from "./components/sidebar";
import SideBarRight from "./components/sidebarright";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <MainContent />
      <SideBarRight />
    </main>
  )
}
