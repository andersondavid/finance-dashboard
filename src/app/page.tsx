import SideBar from "./components/sidebar";
import SideBarRight from "./components/sidebarright";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <SideBarRight />
    </main>
  )
}
