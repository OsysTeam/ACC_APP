import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { FaBell, FaBuilding } from "react-icons/fa";

const NavbarMUI: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "#000",
        flexDirection: "row-reverse",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        {/* القسم الأيمن */}
        <Box display="flex" alignItems="center" gap={2}>
          <FaBuilding size={28} color="#6a11cb" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              نظام إدارة المكاتب الخدمية
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.85rem", color: "gray" }}
            >
              محاماة - معاملات - استشارات
            </Typography>
          </Box>
        </Box>

        {/* القسم الأيسر */}
        <Box display="flex" alignItems="center" gap={3}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
              <FaBell />
            </Badge>
          </IconButton>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            أحمد محمد
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMUI;
