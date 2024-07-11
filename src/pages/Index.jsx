import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Home, LineChart, Menu, Package2, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
    <div className="flex items-center gap-2 text-lg font-semibold">
      <Package2 className="h-6 w-6" />
      <span>Acme Inc</span>
    </div>
    <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/profile">Profile</NavItem>
      <NavItem to="/settings">Settings</NavItem>
    </nav>
    <UserMenu />
  </header>
);

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Acme Inc</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          <SidebarNavLink to="/dashboard">
            <Home className="h-4 w-4" />
            Dashboard
          </SidebarNavLink>
          <SidebarNavLink to="/analytics">
            <LineChart className="h-4 w-4" />
            Analytics
          </SidebarNavLink>
          <SidebarNavLink to="/reports">
            <Users className="h-4 w-4" />
            Reports
          </SidebarNavLink>
          <SidebarNavLink to="/settings">
            <Settings className="h-4 w-4" />
            Settings
          </SidebarNavLink>
        </nav>
      </div>
    </div>
  </div>
);

const MainContent = () => (
  <main className="flex-grow p-4 overflow-auto">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <Card title="Total Users" value="1,234" />
      <Card title="Active Sessions" value="567" />
      <Card title="Revenue" value="$12,345" />
    </div>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Recent Activities</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p>No recent activities.</p>
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer className="border-t bg-muted/40 p-4 text-center">
    <p>&copy; 2023 Acme Inc. All rights reserved.</p>
    <nav className="flex justify-center space-x-4">
      <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      <NavLink to="/terms-of-service">Terms of Service</NavLink>
    </nav>
  </footer>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Account</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )
    }
  >
    {children}
  </NavLink>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-2xl">{value}</p>
  </div>
);

export default Index;