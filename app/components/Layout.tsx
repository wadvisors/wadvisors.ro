import { useNavigation } from "react-router";
import "../app.css";

import Nav from "./Nav";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import ObserverProvider from "~/providers/ObserverProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <ObserverProvider>
      {isNavigating && <span className="fixed z-20 bottom-4 right-4">...</span>}
      <Nav />
      <main className="flex-grow">{children}</main>
      <Newsletter />
      <Footer />
    </ObserverProvider>
  );
}
