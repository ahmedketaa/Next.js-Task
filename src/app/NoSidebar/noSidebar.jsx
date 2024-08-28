import NoSidebarLayout from '../layouts/NoSidebarLayout';

export default function Page({ children }) {
  return (
    <NoSidebarLayout>
      {children}
    </NoSidebarLayout>
  );
}
