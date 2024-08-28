import SidebarLayout from "../layouts/sideBar";

export default function Page({ children }) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  );
}
