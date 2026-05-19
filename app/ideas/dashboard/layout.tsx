import Sidebar from "@/components/student-dashboard/Sidebar";
import Topbar from "@/components/student-dashboard/Topbar";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StudentDashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />
        {children}
      </main>
    </div>
  );
}