import * as React from "react";
import {
  Switch,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Tooltip
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>MN</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            width: "16rem"
          },
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ margin: "0.5rem", color: "#2e2e2e" }}>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            Dark Mode
            <Switch color="primary" />
          </MenuItem>
          <MenuItem>Profile</MenuItem>
          <Divider />
          <MenuItem
            sx={{
              bgcolor: "#dde5ed",
              opacity: 0.8,
              display: "flex",
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            What's new
            <CircleIcon
              sx={{
                justifySelf: "flex-end",
                margin: "0",
                fontSize: "0.5rem",
                color: "#2c58d1"
              }}
            />
          </MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Send Feedback</MenuItem>
          <MenuItem>Hints and Shortcuts</MenuItem>
          <Divider />
          <MenuItem>Logout</MenuItem>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
