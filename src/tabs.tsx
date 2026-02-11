import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Projects from "./Projects/projects";
import Experience from "./Experience/experience";
import Education from "./Education/Education";
import Work from "./Work/work";
import Contact from "./Contact/contact";

function Tabs() {
  return (
    <TabGroup defaultIndex={0}>
      <TabList>
        <Tab>Projects</Tab>
        <Tab>Experience</Tab>
        <Tab>Education</Tab>
        <Tab>Work</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <Experience />
        </TabPanel>
        <TabPanel>
          <Education />
        </TabPanel>
        <TabPanel>
          <Work />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
