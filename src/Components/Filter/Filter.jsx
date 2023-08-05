import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Filter.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Filter({ data, selectFilterIndex, setSelectFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectFilterIndex(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectFilterIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                background: "var(--color-primary)",
              },
            }}
          >
            {data.map((ele) => (
              <Tab className={styles.tab} label={ele.label} {...a11yProps(0)} />
            ))}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}

export default Filter;
