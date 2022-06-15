import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Fab from "@mui/material/Fab";
import DraftsIcon from "@mui/icons-material/Drafts";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

interface IProps {
  children: JSX.Element;
}

const MenuItems = [
  {
    icon: HomeIcon,
  },
  {
    icon: AccountCircleIcon,
  },
  {
    icon: WorkHistoryIcon,
  },
  {
    icon: DraftsIcon,
  },
  {
    icon: ForumIcon,
  },
];

const drawerWidth = 240;

export const Layout = ({ children }: IProps) => {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "none",
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "center",
            background: "transparent",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List>
          {MenuItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                m: "5px 0px",
              }}
            >
              <Fab size="medium" color="primary" aria-label="add">
                <item.icon sx={{ color: "white" }} />
              </Fab>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        {children}
      </Box>
    </Box>
  );
};
