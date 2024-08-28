
import Link from 'next/link';

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;
