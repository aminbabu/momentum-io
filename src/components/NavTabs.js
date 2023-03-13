import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import tabImg1 from "../assets/images/tab-img-1.webp";
import tabImg2 from "../assets/images/tab-img-2.webp";
import tabImg3 from "../assets/images/tab-img-3.webp";
import tabImg4 from "../assets/images/tab-img-4.webp";

const NavTabs = () => {
  return (
    <Tabs default="0">
      <TabList className="navtabs__nav">
        <Tab className="navtabs__link">Research</Tab>
        <Tab className="navtabs__link">Strategy</Tab>
        <Tab className="navtabs__link">Design</Tab>
        <Tab className="navtabs__link">Development</Tab>
      </TabList>

      <TabPanel className="tabpane">
        <div className="grid grid-cols-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="section__tagline">What We Do</p>
            <h2 className="title__2">Research</h2>
            <p>
              Research is key for all businesses; we take the time to understand
              your business and goals, empathize with your users, and learn
              about your competition and the problems or opportunities you seek
              to address.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <img src={tabImg1} alt="" width="648" height="388" />
            <ul className="key__points reboot__list">
              <li>User Research</li>
              <li>Market Research</li>
              <li>Customer Research</li>
              <li>Solution Validation</li>
              <li>Competitive Review</li>
              <li>Stakeholder Interviews</li>
              <li>Survey Development</li>
              <li>Usability Testing</li>
              <li>KPI /NPS Review</li>
              <li>Focus Groups</li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel className="tabpane">
        <div className="grid grid-cols-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="section__tagline">What We Do</p>
            <h2 className="title__2">Strategy</h2>
            <p>
              Research is key for all businesses; we take the time to understand
              your business and goals, empathize with your users, and learn
              about your competition and the problems or opportunities you seek
              to address.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <img src={tabImg2} alt="" width="648" height="388" />
            <ul className="key__points reboot__list">
              <li>User Research</li>
              <li>Market Research</li>
              <li>Customer Research</li>
              <li>Solution Validation</li>
              <li>Competitive Review</li>
              <li>Stakeholder Interviews</li>
              <li>Survey Development</li>
              <li>Usability Testing</li>
              <li>KPI /NPS Review</li>
              <li>Focus Groups</li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel className="tabpane">
        <div className="grid grid-cols-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="section__tagline">What We Do</p>
            <h2 className="title__2">Design</h2>
            <p>
              Research is key for all businesses; we take the time to understand
              your business and goals, empathize with your users, and learn
              about your competition and the problems or opportunities you seek
              to address.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <img src={tabImg3} alt="" width="648" height="388" />
            <ul className="key__points reboot__list">
              <li>User Research</li>
              <li>Market Research</li>
              <li>Customer Research</li>
              <li>Solution Validation</li>
              <li>Competitive Review</li>
              <li>Stakeholder Interviews</li>
              <li>Survey Development</li>
              <li>Usability Testing</li>
              <li>KPI /NPS Review</li>
              <li>Focus Groups</li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel className="tabpane">
        <div className="grid grid-cols-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="section__tagline">What We Do</p>
            <h2 className="title__2">Development</h2>
            <p>
              Research is key for all businesses; we take the time to understand
              your business and goals, empathize with your users, and learn
              about your competition and the problems or opportunities you seek
              to address.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <img src={tabImg4} alt="" width="648" height="388" />
            <ul className="key__points reboot__list">
              <li>User Research</li>
              <li>Market Research</li>
              <li>Customer Research</li>
              <li>Solution Validation</li>
              <li>Competitive Review</li>
              <li>Stakeholder Interviews</li>
              <li>Survey Development</li>
              <li>Usability Testing</li>
              <li>KPI /NPS Review</li>
              <li>Focus Groups</li>
            </ul>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default NavTabs;
