import React from "react";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// reactstrap components
import GridTable from "./GridTable";
import GridTable2 from "./GridTable2";
import {
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
} from "reactstrap";
// core components

function PreTest() {
  const [plainTabs, setPlainTabs] = React.useState("1");

  return (
    <>
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={plainTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPlainTabs("1");
                    }}
                  >
                    前測
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPlainTabs("2");
                    }}
                  >
                    自建凱利方格
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPlainTabs("3");
                    }}
                  >
                    後測
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent
            className="text-center"
            activeTab={"plainTabs" + plainTabs}
          >
            <TabPane tabId="plainTabs1">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdIekJ83a_gZXckAn0mAAMljHH284EHyk3fATHa-qGyAmNT6A/viewform?embedded=true"
                width="640"
                height="1030"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                載入中…
              </iframe>
            </TabPane>
            <TabPane tabId="plainTabs2">
              <br />
              <GridTable />
              <br />
              <br />
              <GridTable2 />
            </TabPane>
            <TabPane tabId="plainTabs3">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe9RzaS71MI-zNztLVdXH4A9xSnalDVPdfLj1TAxOtklioNPg/viewform?embedded=true"
                width="640"
                height="1030"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                載入中…
              </iframe>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>{" "}
      <DefaultFooter />
    </>
  );
}

export default PreTest;
