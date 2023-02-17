import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

import { Media, MediaContextProvider } from "../../media";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface INavbar {
  isAuthenticated: boolean;
}

const Navbar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <MediaContextProvider>
      <Media lessThan="sm">
        <MobileNavbar isAuthenticated={isAuthenticated} />
      </Media>
      <Media greaterThanOrEqual="sm">
        <DesktopNavbar isAuthenticated={isAuthenticated} />
      </Media>
    </MediaContextProvider>
  );
};

export default Navbar;
