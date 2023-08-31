import React, { useState } from "react";
import {
  OverlayTrigger,
  Popover,
  PopoverBody,
  Row,
  Tooltip,
} from "react-bootstrap";
import styles from "./Header.module.css";
import { UserProfileIcon } from "../../shared/Icons";
import BellIcon from "@/shared/BellIcon/BellIcon";

interface HeaderProps {
  onToggleSidebarCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebarCollapse }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleUserIconClick = () => {
    setShowPopover(!showPopover);
  };

  const handlePopoverItemClick = (item: string) => {
    // Handle actions based on the clicked item (e.g., 'edit profile', 'privacy settings')
    console.log("Clicked:", item);
    setShowPopover(false);
  };

  const popover = (
    <Popover id="user-popover" placement="right" title="DS">
      <PopoverBody
        className={styles.popoverItem}
        onClick={() => handlePopoverItemClick("edit profile")}
      >
        Edit Profile
      </PopoverBody>
      <div
        className={styles.popoverItem}
        onClick={() => handlePopoverItemClick("privacy settings")}
      >
        Profile Settings
      </div>
    </Popover>
  );

  const notificationCount = 5;

  return (
    <div className={styles.header}>
      <h3 style={{ cursor: "pointer" }} onClick={onToggleSidebarCollapse}>
        ☰
      </h3>
      <div className={styles.title}>Sanjeev Sample Next.js App</div>
      <Row
        style={{
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ marginRight: "3rem" }}>
          <BellIcon notificationCount={notificationCount} />
        </div>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          show={showPopover}
          overlay={popover}
          rootClose
        >
          <div className={styles.userIcon} onClick={handleUserIconClick}>
            {/* Replace this icon with your desired user thumbnail */}
            <img
              src="/userIcon.svg"
              alt="User Thumbnail"
              width="30"
              height="30"
            />
          </div>
        </OverlayTrigger>
      </Row>
    </div>
  );
};

export default Header;
