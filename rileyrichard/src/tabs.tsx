import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Projects from "./Projects/projects";
import About from "./About/About";
import Education from "./Education/Education";

function Tabs() {
  return (
    <TabGroup defaultIndex={0}>
      <TabList>
        <Tab>Projects</Tab>
        <Tab>Education</Tab>
        <Tab>Work</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <Education />
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
