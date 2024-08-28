import SidebarLayout from '../layouts/SidebarLayout';

export default function Page({ children }) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  );
}
