import { Outlet } from "react-router";
import { AppNav } from "./AppNav";
import { AppTopBar } from "./AppTopBar";
import { useAnonymousSession } from "~/hooks/useAnonymousSession";

export function AppLayout() {
  const { remaining } = useAnonymousSession();

  return (
    <div className="flex h-screen bg-pearl overflow-hidden">
      <AppNav />
      <div className="flex-1 flex flex-col min-w-0 relative">
        <AppTopBar remaining={remaining} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
