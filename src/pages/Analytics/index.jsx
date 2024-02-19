import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";
import "react-tabs/style/react-tabs.css";

const todayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AnalyticsPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:px-5 w-[18%] md:w-full">
            <div className="bg-white-A700 flex flex-col gap-[23px] items-start justify-start py-[35px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px] w-[71%] md:w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-[74%] md:w-full">
                  <Img
                    className="h-[22px] w-[14%]"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="font-normal text-3xl sm:text-[26px] md:text-[28px] text-blue-A200"
                    size="text3xl"
                  >
                    Retoza
                  </Text>
                </div>
                <div className="flex flex-row font-roboto gap-2.5 items-center justify-start mt-[53px] pb-[3px] pl-[3px] w-3/5 md:w-full">
                  <Img
                    className="h-[13px] w-[13px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Dashboard
                  </Text>
                </div>
                <List
                  className="flex flex-col font-roboto gap-[35px] items-center mt-[33px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-start justify-start pb-0.5 w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Text
                      className="font-normal ml-2 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Orders
                    </Text>
                    <Img
                      className="h-3 ml-[97px] mt-[3px] w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_sort.svg"
                      alt="sort"
                    />
                    <Text
                      className="font-normal ml-1.5 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Menus
                    </Text>
                    <Img
                      className="h-3 ml-[97px] mt-0.5 w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright One"
                    />
                  </div>
                </List>
                <div className="flex flex-row font-roboto gap-[7px] items-start justify-start mt-[33px] w-[53%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Customer
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row font-roboto gap-2 h-10 items-center justify-start p-2.5 w-full"
                style={{ backgroundImage: "url('images/img_group18575.svg')" }}
              >
                <Img
                  className="h-4 ml-5 w-4"
                  src="images/img_vector_16X16.svg"
                  alt="Vector"
                />
                <Text
                  className="font-normal text-base text-blue-A201"
                  size="textxl"
                >
                  Analytics
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start mb-[67px] md:ml-[0] ml-[29px] w-[76%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start ml-0.5 md:ml-[0] w-[34%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_circlehalf.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Table{" "}
                  </Text>
                </div>
                <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start mt-[272px] p-[5px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="font-medium mt-1.5 text-base text-white-A700"
                    size="textxl"
                  >
                    Favourite Add Menus
                  </Text>
                  <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                    <Img
                      className="h-[17px] mt-[37px] w-[18px]"
                      src="images/img_cart_13.svg"
                      alt="cart"
                    />
                    <div className="md:h-[108px] h-[133px] mb-1.5 relative w-[66%]">
                      <Img
                        className="absolute h-[102px] inset-[0] justify-center m-auto object-cover w-[102px]"
                        src="images/img_image11.png"
                        alt="imageEleven"
                      />
                      <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-center mx-auto w-[61%]">
                        <Text
                          className="border border-dashed border-white-A700 flex font-medium h-5 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-5"
                          size="textlg"
                        >
                          +
                        </Text>
                        <Text
                          className="font-medium ml-[5px] text-[10px] text-white-A700"
                          size="texts"
                        >
                          Add Menu{" "}
                        </Text>
                      </div>
                      <Text
                        className="absolute font-normal inset-x-[0] mx-auto text-blue-100 text-xs top-[0] w-max"
                        size="textmd"
                      >
                        It is a long established{" "}
                      </Text>
                    </div>
                    <Img
                      className="h-[17px] mt-[122px] w-[18px]"
                      src="images/img_cart_14.svg"
                      alt="cart One"
                    />
                  </div>
                </div>
                <Text
                  className="font-medium mt-6 text-gray-700 text-xs"
                  size="textmd"
                >
                  Retoza Restaurant Admin{" "}
                </Text>
                <Text
                  className="font-normal mt-1.5 text-[10px] text-gray-700"
                  size="texts"
                >
                  2021 All Rights
                </Text>
                <div className="h-3 md:h-[18px] mt-1.5 relative w-[57%]">
                  <Text
                    className="font-normal m-auto text-[10px] text-gray-700"
                    size="texts"
                  >
                    Made with by Retoza
                  </Text>
                  <Img
                    className="absolute h-3 inset-[0] justify-center m-auto w-[10%]"
                    src="images/img_favorite.svg"
                    alt="favorite"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-roboto gap-[37px] items-center justify-start md:px-5 w-[83%] md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 shadow-bs2 w-full">
              <Input
                name="Search"
                placeholder="Search here"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pl-5 text-bluegray-400 text-left text-xs w-full"
                wrapClassName="bg-gray-50 border border-gray-50 border-solid flex md:flex-1 ml-0.5 md:ml-[0] md:mt-0 my-0.5 pl-6 py-2.5 rounded-[17.5px] w-[29%] md:w-full"
                suffix={
                  searchvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-3 mb-[11px] cursor-pointer h-3 ml-[35px] mr-6"
                      onClick={() => setSearchvalue("")}
                      fillColor="#8c8787"
                      height={12}
                      width={12}
                      viewBox="0 0 12 12"
                    />
                  ) : (
                    <Img
                      className="mt-3 mb-[11px] cursor-pointer h-3 ml-[35px] mr-6"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
              ></Input>
              <div className="bg-gray-50 md:h-[18px] h-[35px] md:ml-[0] ml-[643px] md:mt-0 my-0.5 relative rounded-[50%] w-[35px]">
                <Img
                  className="absolute bottom-[17%] h-4 inset-x-[0] mx-auto w-2/5"
                  src="images/img_notification.svg"
                  alt="Notification"
                />
                <Text
                  className="absolute bg-blue-A201 flex font-medium h-3 items-center justify-center right-[0] rounded-[50%] text-[6px] text-center text-white-A700 top-[0] w-3"
                  size="textxs"
                >
                  5
                </Text>
              </div>
              <div className="bg-gray-50 flex flex-col h-[35px] items-center justify-start ml-6 md:ml-[0] md:mt-0 my-0.5 rounded-[50%] w-[35px]">
                <Text
                  className="bg-blue-A201 flex font-medium h-3 items-center justify-center rounded-[50%] text-[6px] text-center text-white-A700 w-3"
                  size="textxs"
                >
                  5
                </Text>
                <Img
                  className="h-[13px] mb-[7px] w-[43%]"
                  src="images/img_user_13X15.svg"
                  alt="user One"
                />
              </div>
              <Img
                className="h-10 md:h-auto md:ml-[0] ml-[25px] rounded-[50%] w-10"
                src="images/img_ellipse1.png"
                alt="EllipseOne"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly pt-1 w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="font-medium sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                    size="text2xl"
                  >
                    Analytics
                  </Text>
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Analytics / Analytics
                  </Text>
                </div>
                <SelectBox
                  className="bg-blue-A201 border border-blue-A201 border-solid md:flex-1 leading-[normal] mb-3 md:mt-0 mt-[7px] sm:pl-5 pl-[23px] py-2 rounded-[15px] text-left text-white-A700 text-xs w-[9%] md:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-4 mr-[23px] w-2.5"
                      src="images/img_caretdown.svg"
                      alt="caret-down"
                    />
                  }
                  isMulti={false}
                  name="group18140"
                  options={todayOptionsList}
                  isSearchable={false}
                  placeholder="Today"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-10 w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-center p-1.5 rounded-[15px] shadow-bs3 w-[66%] md:w-full">
                  <Tabs
                    selectedTabClassName="!text-white-A700 font-roboto font-normal !opacity-100 !bg-blue-A201 leading-[normal] rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                    className="flex flex-col gap-6 items-center justify-center relative w-full"
                  >
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-[25px] w-[97%] md:w-full">
                      <Text
                        className="font-medium text-base text-gray-700"
                        size="textxl"
                      >
                        Most Favorites Item{" "}
                      </Text>
                      <TabList className="border border-blue-50 border-solid flex flex-row rounded-[15px]">
                        <Tab
                          className="font-normal h-3 ml-[19px] mr-[180px] mt-[9px] text-[10px] text-gray-700"
                          data-path={`Column.0.Row.1.Column.1.Column.1.Row.0.Column.0.Row.1.Tab.0.Text`}
                          data-compid="195:2500"
                          data-comptype="Text"
                        >
                          <Text size="texts">All</Text>
                        </Tab>
                        <Tab
                          className="font-normal ml-[55px] mr-[131px] text-[10px] text-gray-700"
                          data-path={`Column.0.Row.1.Column.1.Column.1.Row.0.Column.0.Row.1.Tab.1.Text`}
                          data-compid="195:2497"
                          data-comptype="Text"
                        >
                          <Text size="texts">Pizza</Text>
                        </Tab>
                        <Tab
                          className="font-normal ml-[106px] mr-[91px] text-[10px] text-gray-700"
                          data-path={`Column.0.Row.1.Column.1.Column.1.Row.0.Column.0.Row.1.Tab.2.Text`}
                          data-compid="195:2498"
                          data-comptype="Text"
                        >
                          <Text size="texts">Drink</Text>
                        </Tab>
                        <Tab
                          className="font-normal ml-[120px] mr-[71px] text-[10px] text-white-A700"
                          data-path={`Column.0.Row.1.Column.1.Column.1.Row.0.Column.0.Row.1.Tab.3.Text`}
                          data-compid="195:2495"
                          data-comptype="Text"
                        >
                          <Text size="texts">Month</Text>
                        </Tab>
                        <Tab
                          className="font-normal ml-[156px] mr-5 text-[10px] text-gray-700"
                          data-path={`Column.0.Row.1.Column.1.Column.1.Row.0.Column.0.Row.1.Tab.4.Text`}
                          data-compid="195:2499"
                          data-comptype="Text"
                        >
                          <Text size="texts">Dessert</Text>
                        </Tab>
                      </TabList>
                    </div>
                    <div className="w-[98%]">
                      {[...Array(5)].map((_, index) => {
                        return (
                          <TabPanel
                            key={"tab-content-" + index}
                            className="absolute w-full"
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                              <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[53%] md:w-full">
                                <div className="flex flex-row gap-[13px] items-center justify-start w-[86%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_14.png"
                                    alt="Rectangle4126"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[58%]">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Sweet cheezy pizza{" "}
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings One"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[7px] w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-[89%]" />
                                <div className="flex flex-row gap-[13px] items-center justify-start w-[86%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_15.png"
                                    alt="Rectangle4126 One"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[58%]">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Beezy pizza for kids
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings Two"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[7px] w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210 One"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-[89%]" />
                                <div className="flex flex-row gap-[13px] items-center justify-start w-[86%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_16.png"
                                    alt="Rectangle4126 Two"
                                  />
                                  <div className="flex flex-col gap-2 items-start justify-start w-[58%]">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Juice for kids
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings Three"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210 Two"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[48%] md:w-full">
                                <div className="flex flex-row gap-[13px] items-center justify-between w-[97%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_17.png"
                                    alt="Rectangle4126 Three"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Cheesy desert kids
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings Four"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[7px] w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210 Three"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row gap-[13px] items-center justify-between w-[97%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_18.png"
                                    alt="Rectangle4126 Four"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Sweet cheezy pizza{" "}
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings Five"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[7px] w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210 Four"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-blue-50 h-px w-full" />
                                <div className="flex flex-row gap-[13px] items-center justify-between w-[97%] md:w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                                    src="images/img_rectangle4126_19.png"
                                    alt="Rectangle4126 Five"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="font-medium text-gray-700 text-sm"
                                      size="textlg"
                                    >
                                      Sweet cheezy pizza{" "}
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[81%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[47%]"
                                        src="images/img_settings_12X68.svg"
                                        alt="settings Six"
                                      />
                                      <Text
                                        className="font-medium text-bluegray-400 text-xs"
                                        size="textmd"
                                      >
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[7px] w-[55%] md:w-full">
                                      <Img
                                        className="h-2.5 w-[8%]"
                                        src="images/img_group18210.svg"
                                        alt="Group18210 Five"
                                      />
                                      <Text
                                        className="font-medium text-gray-700 text-xs"
                                        size="textmd"
                                      >
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-[50px] relative w-[50px]">
                                    <div className="!w-[50px] h-[50px] m-auto overflow-visible">
                                      <CircularProgressbar
                                        className="!w-[50px] h-[50px] m-auto overflow-visible"
                                        value={51}
                                        counterClockwise
                                        strokeWidth={10}
                                        styles={{
                                          trail: {
                                            strokeWidth: 10,
                                            stroke: "#c4c4c4",
                                          },
                                          path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(161deg)",
                                            stroke: "#438ffe",
                                          },
                                        }}
                                      ></CircularProgressbar>
                                    </div>
                                    <Text
                                      className="absolute font-medium h-max inset-[0] justify-center m-auto text-gray-700 text-xs w-max"
                                      size="textmd"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        );
                      })}
                    </div>
                  </Tabs>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[25px] w-[96%] md:w-full">
                    <Text
                      className="font-medium font-poppins md:mt-0 mt-[3px] text-gray-700 text-xs"
                      size="textmd"
                    >
                      Dispalying 6 Out of 25
                    </Text>
                    <Text
                      className="font-normal font-roboto mb-0.5 md:ml-[0] ml-[487px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Viwe All
                    </Text>
                    <Img
                      className="h-px md:ml-[0] ml-[5px] md:mt-0 mt-2 w-[2%]"
                      src="images/img_arrow1.svg"
                      alt="ArrowOne"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-start justify-start p-5 rounded-[15px] shadow-bs3 w-[32%] md:w-full">
                  <Text
                    className="font-medium mt-1 text-base text-gray-700"
                    size="textxl"
                  >
                    Daily Trending Menus
                  </Text>
                  <List
                    className="flex flex-col gap-3 items-center mb-[9px] w-[97%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-3.5 items-center justify-between pr-0.5 pt-0.5 w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4126.png"
                        alt="Rectangle4144"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-between w-[78%]">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="font-medium leading-[16.00px] text-gray-700 text-sm"
                            size="textlg"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="font-bold text-gray-700 text-sm"
                            size="headings"
                          >
                            $5.6
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[23px] items-end justify-start">
                          <Text
                            className="font-medium text-blue-A201 text-sm"
                            size="textlg"
                          >
                            #1
                          </Text>
                          <Text
                            className="font-medium text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_2.png"
                        alt="Rectangle4144 One"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-between w-[79%]">
                        <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
                          <Text
                            className="font-medium leading-[16.00px] text-gray-700 text-sm"
                            size="textlg"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="font-bold text-gray-700 text-sm"
                            size="headings"
                          >
                            $5.6
                          </Text>
                        </div>
                        <div className="flex flex-col gap-6 items-end justify-start">
                          <Text
                            className="font-medium text-blue-A201 text-sm"
                            size="textlg"
                          >
                            #2
                          </Text>
                          <Text
                            className="font-medium mr-1 text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_3.png"
                        alt="Rectangle4144 Two"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-between w-[79%]">
                        <div className="flex flex-col gap-1.5 items-start justify-start mt-0.5">
                          <Text
                            className="font-medium leading-[16.00px] text-gray-700 text-sm"
                            size="textlg"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="font-bold text-gray-700 text-sm"
                            size="headings"
                          >
                            $5.6
                          </Text>
                        </div>
                        <div className="flex flex-col gap-6 items-end justify-start">
                          <Text
                            className="font-medium text-blue-A201 text-sm"
                            size="textlg"
                          >
                            #3
                          </Text>
                          <Text
                            className="font-medium mr-1 text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-[99%]" />
                    <div className="flex flex-row gap-3.5 items-center justify-between pt-0.5 w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded"
                        src="images/img_rectangle4144_4.png"
                        alt="Rectangle4144 Three"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-between w-[79%]">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="font-medium leading-[16.00px] text-gray-700 text-sm"
                            size="textlg"
                          >
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text
                            className="font-bold text-gray-700 text-sm"
                            size="headings"
                          >
                            $5.6
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[23px] items-end justify-start">
                          <Text
                            className="font-medium text-blue-A201 text-sm"
                            size="textlg"
                          >
                            #4
                          </Text>
                          <Text
                            className="font-medium mr-1 text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-[30px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-start p-[18px] rounded-[15px] shadow-bs3 w-[49%] md:w-full">
                  <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                    <Text
                      className="font-medium text-base text-gray-700"
                      size="textxl"
                    >
                      Most Selling Items
                    </Text>
                    <div className="border border-blue-50 border-solid flex flex-row items-center justify-between p-[5px] rounded-[15px] w-[35%]">
                      <Text
                        className="font-normal ml-[7px] text-[10px] text-gray-700"
                        size="texts"
                      >
                        Today
                      </Text>
                      <Button className="bg-blue-A201 cursor-pointer leading-[normal] min-w-[57px] py-1 rounded-[10px] text-[10px] text-center text-white-A700">
                        Month
                      </Button>
                      <Text
                        className="font-normal mr-[7px] text-[10px] text-gray-700"
                        size="texts"
                      >
                        Weekly
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                        src="images/img_rectangle4127.png"
                        alt="Rectangle4127"
                      />
                      <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0] pb-0.5 pr-0.5 w-[45%] sm:w-full">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Sweet cheezy pizza kids
                        </Text>
                        <Text
                          className="font-medium text-[10px] text-blue-A201"
                          size="texts"
                        >
                          BURGER
                        </Text>
                        <div className="flex flex-row gap-[11px] items-start justify-start w-[66%] md:w-full">
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Serves for 4 Person
                          </Text>
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            4 min
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-bold ml-4 sm:ml-[0] text-base text-gray-700"
                        as="h6"
                        size="headingmd"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-1 sm:ml-[0] ml-[127px] w-[4%]"
                        src="images/img_group18181.svg"
                        alt="Group18181"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                        src="images/img_rectangle4127_50X50.png"
                        alt="Rectangle4127 One"
                      />
                      <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0] pb-0.5 pr-0.5 w-[45%] sm:w-full">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Sweet cheezy pizza kids
                        </Text>
                        <Text
                          className="font-medium text-[10px] text-blue-A201"
                          size="texts"
                        >
                          BURGER
                        </Text>
                        <div className="flex flex-row gap-[11px] items-start justify-start w-[66%] md:w-full">
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Serves for 4 Person
                          </Text>
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            4 min
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-bold ml-4 sm:ml-[0] text-base text-gray-700"
                        as="h6"
                        size="headingmd"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-1 sm:ml-[0] ml-[127px] w-[4%]"
                        src="images/img_group18181.svg"
                        alt="Group18181 One"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[50px] md:h-auto object-cover rounded-sm w-[50px]"
                        src="images/img_rectangle4127_1.png"
                        alt="Rectangle4127 Two"
                      />
                      <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0] pb-0.5 pr-0.5 w-[45%] sm:w-full">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Sweet cheezy pizza kids
                        </Text>
                        <Text
                          className="font-medium text-[10px] text-blue-A201"
                          size="texts"
                        >
                          BURGER
                        </Text>
                        <div className="flex flex-row gap-[11px] items-start justify-start w-[66%] md:w-full">
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Serves for 4 Person
                          </Text>
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            4 min
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-bold ml-4 sm:ml-[0] text-base text-gray-700"
                        as="h6"
                        size="headingmd"
                      >
                        <>$12.56</>
                      </Text>
                      <Img
                        className="h-1 sm:ml-[0] ml-[127px] w-[4%]"
                        src="images/img_group18181.svg"
                        alt="Group18181 Two"
                      />
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-0.5 w-full">
                    <Text
                      className="font-medium font-poppins sm:mt-0 mt-0.5 text-gray-700 text-xs"
                      size="textmd"
                    >
                      Dispalying 3 Out of 25
                    </Text>
                    <Text
                      className="font-normal font-roboto sm:ml-[0] ml-[303px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Viwe All
                    </Text>
                    <Img
                      className="h-px sm:ml-[0] ml-[5px] sm:mt-0 mt-2 w-[3%]"
                      src="images/img_arrow1.svg"
                      alt="ArrowOne One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-start mb-[17px] p-[18px] rounded-[15px] shadow-bs3 w-[49%] md:w-full">
                  <div className="flex flex-row items-center justify-between mt-[7px] w-full">
                    <Text
                      className="font-medium text-base text-gray-700"
                      size="textxl"
                    >
                      Customer Map
                    </Text>
                    <div className="border border-blue-50 border-solid flex flex-row items-center justify-between p-[5px] rounded-[15px] w-2/5">
                      <Text
                        className="font-normal ml-1.5 text-gray-700 text-xs"
                        size="textmd"
                      >
                        Today
                      </Text>
                      <Text
                        className="bg-blue-A201 font-normal h-5 justify-center px-[11px] py-[3px] rounded-[10px] text-white-A700 text-xs w-[57px]"
                        size="textmd"
                      >
                        Month
                      </Text>
                      <Text
                        className="font-normal mr-1.5 text-gray-700 text-xs"
                        size="textmd"
                      >
                        Weekly
                      </Text>
                    </div>
                  </div>
                  <div className="sm:h-[2242px] h-[232px] md:h-[238px] mb-1.5 relative w-full">
                    <div className="absolute flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto py-0.5 top-[2%] w-[99%]">
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          500
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          400
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          300
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          200
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          100
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[21px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          90
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[21px] items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          70
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[93%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          60
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                        <Text
                          className="font-normal text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          50
                        </Text>
                        <Line className="bg-blue-50 h-px sm:mt-0 my-[5px] w-[94%]" />
                      </div>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-y-[0] items-end justify-evenly my-auto right-[0] w-[94%]">
                      <div className="flex flex-col items-start justify-start mb-[3px] sm:mt-0 mt-[42px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[78px] ml-1 md:ml-[0] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <div className="bg-orange-301 h-[34px] ml-1 md:ml-[0] mt-[9px] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <Text
                          className="font-normal mt-[51px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Jan
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[3px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[117px] ml-1 md:ml-[0] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <div className="bg-orange-301 h-6 ml-1 md:ml-[0] mt-3 rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <Text
                          className="font-normal mt-[61px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Feb
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[3px] sm:mt-0 mt-3 w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[105px] md:ml-[0] ml-[5px] rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <div className="bg-orange-301 h-[73px] md:ml-[0] ml-[5px] mt-2.5 rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <Text
                          className="font-normal mt-[13px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Mar
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-[73px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[46px] md:ml-[0] ml-[3px] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <div className="bg-orange-301 h-11 md:ml-[0] ml-[3px] mt-[9px] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <Text
                          className="font-normal mt-[43px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Apr
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-[92px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[25px] md:ml-[0] ml-[5px] rounded-tl-md rounded-tr-md w-[26%]"></div>
                        <div className="bg-orange-301 h-6 md:ml-[0] ml-[5px] mt-[11px] rounded-tl-md rounded-tr-md w-[26%]"></div>
                        <Text
                          className="font-normal mt-[63px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          May
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-0.5 sm:mt-0 mt-11 w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[75px] ml-1 md:ml-[0] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <div className="bg-orange-301 h-[39px] ml-1 md:ml-[0] mt-2 rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <Text
                          className="font-normal mt-[49px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Jun
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-[21px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[97px] md:ml-[0] ml-[5px] rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <div className="bg-orange-301 h-8 md:ml-[0] ml-[5px] mt-2.5 rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <Text
                          className="font-normal mt-[55px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          July
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-[84px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-8 md:ml-[0] ml-[5px] rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <div className="bg-orange-301 h-[45px] md:ml-[0] ml-[5px] mt-[11px] rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <Text
                          className="font-normal mt-[43px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Aug
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-6 w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[97px] ml-1 md:ml-[0] rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <div className="bg-orange-301 h-8 ml-1 md:ml-[0] mt-2.5 rounded-tl-md rounded-tr-md w-[27%]"></div>
                        <Text
                          className="font-normal mt-[52px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Sep
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[3px] sm:mt-0 mt-[74px] w-[10%] sm:w-full">
                        <div className="bg-blue-A201 h-[46px] md:ml-[0] ml-[3px] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <div className="bg-orange-301 h-11 md:ml-[0] ml-[3px] mt-[9px] rounded-tl-md rounded-tr-md w-[28%]"></div>
                        <Text
                          className="font-normal mt-[41px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Oct
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[3px] sm:mt-0 mt-2.5 w-[5%] sm:w-full">
                        <div className="bg-blue-A201 h-[105px] rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <div className="bg-orange-301 h-[73px] mt-2.5 rounded-tl-md rounded-tr-md w-[55%]"></div>
                        <Text
                          className="font-normal mt-[15px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Nov
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
