import { useState } from "react";
import { AppLayout as Applayout } from "@triquetra/ui";
import FalainaLogo from "./../assets/whiteLogo.png";

// this is the real app layout like topbar and side navbar

const Layout = ({ children }) => {
  const items = [
    {
      links: [
        {
          name: "Home",
          url: "/#/",
          icon: "Home",
          expandAriaLabel: "Expand Home section",
          collapseAriaLabel: "Collapse Home section",
          title: "",
          isExpanded: false,
          key: "home",
        },
        {
          name: "Test",
          url: "/#/test",
          icon: "ToolBox",
          expandAriaLabel: "Expand Test section",
          collapseAriaLabel: "Collapse Test section",
          title: "",
          isExpanded: false,
          key: "test",
        },
      ],
    },
  ];
  const onLinkClick = () => {
    console.log("clicked");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isShowProfileCard, setIsShowProfileCard] = useState(false);
  const isShowSidebarContent = true;
  const isSuperAdmin = true;
  const userDetails = {
    firstName: "Harshal",
    lastName: "Singh"
  };

  return (
    <Applayout
      navbarColor="#305884"
      url={FalainaLogo}
      isSidebarOpen={isSidebarOpen}
      setSidebarOpen={setIsSidebarOpen}
      showSidebarContent={isShowSidebarContent}
      isShowProfileCard={isShowProfileCard}
      setIsShowProfileCard={setIsShowProfileCard}
      onLinkClick={onLinkClick}
      item={items}
      isSuperAdmin={isSuperAdmin}
      userDetails={userDetails}
    >
      <div style={{ marginLeft: "15px" }}>{children}</div>
    </Applayout>
  );
};

export default Layout