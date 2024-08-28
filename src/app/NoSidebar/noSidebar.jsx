import NoSidebarLayout from "../layouts/withoutSidebar";

export default function Page({ children }) {
  return (
    <NoSidebarLayout>
      {children}
    </NoSidebarLayout>
  );
}
