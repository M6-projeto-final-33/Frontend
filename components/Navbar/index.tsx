import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

import { Media, MediaContextProvider } from "../../media";

const Navbar = () => (
  <MediaContextProvider>
    <Media lessThan="sm">
      <MobileNavbar />
    </Media>
    <Media greaterThanOrEqual="sm">
      <DesktopNavbar />
    </Media>
  </MediaContextProvider>
);

export default Navbar;
