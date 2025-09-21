import { useNavigation } from "react-router";
import "../app.css";

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      {isNavigating && (
        <span className="bg-red-400 absolute top-0 right-0 self-center">
          Loading...
        </span>
      )}
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
