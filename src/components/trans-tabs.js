import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QQplot from "../assets/images/wine-quality/qqplot.png"
import ReesvsFittedValues from "../assets/images/wine-quality/trans res vs fitted values.png"
import ResvsTime from "../assets/images/wine-quality/trans res vs time.png"
import ResvsX1 from "../assets/images/wine-quality/trans res vs x1.png"
import ResvsX2 from "../assets/images/wine-quality/trans res vs x2.png"
import ResvsX3 from "../assets/images/wine-quality/trans res vs x3.png"
import ResvsX4 from "../assets/images/wine-quality/trans res vs x4.png"
import ResvsX5 from "../assets/images/wine-quality/trans res vs x5.png"
import ResvsX6 from "../assets/images/wine-quality/trans res vs x6.png"
import ResvsX7 from "../assets/images/wine-quality/trans res vs x7.png"
import ResvsX8 from "../assets/images/wine-quality/trans res vs x8.png"
import ResvsX9 from "../assets/images/wine-quality/trans res vs x9.png"
import ResvsX10 from "../assets/images/wine-quality/trans res vs x10.png"


export default function TransScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        style={{display:'flex', justifyContent:'center'}}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ Width: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Normal QQ Plot" />
        <Tab label="Residuals vs. Time" />
        <Tab label="Residuals vs. Fitted Values" />
        <Tab label="Residuals vs. X1" />
        <Tab label="Residuals vs. X2" />
        <Tab label="Residuals vs. X3" />
        <Tab label="Residuals vs. X4" />
        <Tab label="Residuals vs. X5" />
        <Tab label="Residuals vs. X6" />
        <Tab label="Residuals vs. X7" />
        <Tab label="Residuals vs. X8" />
        <Tab label="Residuals vs. X9" />
        <Tab label="Residuals vs. X10" />
      </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <img src={QQplot} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src={ResvsTime} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img src={ReesvsFittedValues} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <img src={ResvsX1} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <img src={ResvsX2} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <img src={ResvsX3} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <img src={ResvsX4} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <img src={ResvsX5} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <img src={ResvsX6} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={9}>
      <img src={ResvsX7} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <img src={ResvsX8} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <img src={ResvsX9} alt="Image not available." className="tab-img" />
      </TabPanel>
      <TabPanel value={value} index={12}>
      <img src={ResvsX10} alt="Image not available." className="tab-img" />
      </TabPanel>
    </Box>
  );
}
