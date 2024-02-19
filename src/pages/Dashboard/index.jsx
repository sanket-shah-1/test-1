import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const monthlyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const monthlyOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const monthlyOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:mt-0 mt-0.5 md:px-5 w-[18%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start py-[33px] shadow-bs w-full">
              <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[30px] w-[52%] md:w-full">
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
              <div className="bg-blue-50 flex flex-row font-roboto items-center justify-start mt-[53px] md:pr-10 pr-28 sm:pr-5 w-full">
                <Line className="bg-blue-A201 h-10 w-0.5" />
                <Img
                  className="h-[13px] ml-[29px] w-[13px]"
                  src="images/img_circlesfour.svg"
                  alt="CirclesFour"
                />
                <Text
                  className="font-medium ml-[15px] text-base text-blue-A201"
                  size="textxl"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start mb-[600px] md:ml-[0] ml-[29px] mt-[23px] w-[76%] md:w-full">
                <List
                  className="flex flex-col gap-[35px] w-[94%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-4 mt-0.5 w-4"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Text
                      className="font-normal mb-0.5 ml-2 text-base text-bluegray-400"
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
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                    <Text
                      className="font-normal ml-2 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Menus
                    </Text>
                    <Img
                      className="h-3 ml-24 mt-0.5 w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright One"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_user_16X16.svg"
                      alt="user"
                    />
                    <Text
                      className="font-normal ml-2 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Customer
                    </Text>
                    <Img
                      className="h-3 ml-[75px] mt-0.5 w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright Two"
                    />
                  </div>
                </List>
                <div className="flex flex-row gap-2 items-start justify-start mt-8 w-[48%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_vector.svg"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Analytics
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-start mt-[29px] w-[34%] md:w-full">
                  <Img
                    className="h-4 mt-0.5 w-4"
                    src="images/img_circlehalf.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="font-normal mb-0.5 text-base text-bluegray-400"
                    size="textxl"
                  >
                    Table{" "}
                  </Text>
                </div>
                <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start mt-[271px] p-[5px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="font-medium mt-1.5 text-base text-white-A700"
                    size="textxl"
                  >
                    Favourite Add Menus
                  </Text>
                  <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                    <Img
                      className="h-[17px] mt-[37px] w-[18px]"
                      src="images/img_cart_21.svg"
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
                      src="images/img_cart_22.svg"
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
                <div className="h-3 md:h-[18px] mt-1.5 relative w-[56%]">
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
          <div className="flex md:flex-1 flex-col font-roboto gap-[38px] items-center justify-start md:px-5 w-[83%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-5 shadow-bs2 w-full">
              <header className="flex items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <Input
                    name="Search"
                    placeholder="Search here"
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e)}
                    className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pl-5 text-bluegray-400 text-left text-xs w-full"
                    wrapClassName="bg-gray-50 border border-gray-50 border-solid flex md:flex-1 md:mt-0 my-0.5 pl-6 py-2.5 rounded-[17.5px] w-[29%] md:w-full"
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
              </header>
            </div>
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <Text
                className="font-medium sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                size="text2xl"
              >
                Dashboard
              </Text>
              <Text
                className="font-normal mt-2 text-base text-bluegray-400"
                size="textxl"
              >
                Wellcome to Lojusa Admin
              </Text>
              <List
                className="flex flex-col items-center mt-9 w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex md:flex-1 flex-row gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-[23%] md:w-full">
                  <Button className="bg-blue-50 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img src="images/img_menu_70X70.svg" alt="menu" />
                  </Button>
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="font-bold text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      as="h5"
                      size="headingxl"
                    >
                      2560
                    </Text>
                    <Text
                      className="font-normal text-bluegray-400 text-sm"
                      size="textlg"
                    >
                      Total Menus
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-[23%] md:w-full">
                  <Text
                    className="bg-blue-50 flex font-normal h-[70px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[31px] md:text-[33px] text-[35px] text-blue-A201 text-center w-[70px]"
                    size="text4xl"
                  >
                    $
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="font-bold text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      as="h5"
                      size="headingxl"
                    >
                      $87,256
                    </Text>
                    <Text
                      className="font-normal text-bluegray-400 text-sm"
                      size="textlg"
                    >
                      Total Revenew
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-[23%] md:w-full">
                  <Button className="bg-blue-50 flex h-[70px] items-center justify-center p-[18px] rounded-[50%] w-[70px]">
                    <Img
                      src="images/img_search_blue_A201.svg"
                      alt="search One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="font-bold text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      as="h5"
                      size="headingxl"
                    >
                      2560k
                    </Text>
                    <Text
                      className="font-normal text-bluegray-400 text-sm"
                      size="textlg"
                    >
                      Total Customer
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-row gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs3 w-[23%] md:w-full">
                  <Button className="bg-blue-50 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_airplane_16X16.svg"
                      alt="airplane One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="font-bold text-[22px] text-gray-700 sm:text-lg md:text-xl"
                      as="h5"
                      size="headingxl"
                    >
                      2560
                    </Text>
                    <Text
                      className="font-normal text-bluegray-400 text-sm"
                      size="textlg"
                    >
                      Total Oders
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[30px] w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[52%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-4 rounded-[15px] shadow-bs3 w-[95%] md:w-full">
                    <div className="flex flex-row items-center justify-between mt-[9px] w-[99%] md:w-full">
                      <Text
                        className="font-medium text-base text-gray-700"
                        size="textxl"
                      >
                        Revenue
                      </Text>
                      <Button
                        className="border border-blue-50 border-solid cursor-pointer flex items-center justify-center min-w-[104px] pl-[21px] py-2 rounded-[15px]"
                        rightIcon={
                          <Img
                            className="mt-[7px] mb-1.5 ml-[7px] mr-[22px]"
                            src="images/img_caretdown_blue_A201.svg"
                            alt="caret-down"
                          />
                        }
                      >
                        <div className="leading-[normal] sm:pl-5 text-blue-A201 text-left text-xs">
                          Monthly
                        </div>
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[19px] w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-bold text-blue-A201 text-xs"
                          size="headingxs"
                        >
                          Income
                        </Text>
                        <Text
                          className="font-medium mt-[5px] text-gray-700 text-xs"
                          size="textmd"
                        >
                          $1236598
                        </Text>
                      </div>
                      <div className="border border-blue-50 border-solid flex flex-row items-center justify-between p-[5px] rounded-[14px] w-[38%] sm:w-full">
                        <Text
                          className="bg-blue-A201 font-normal h-5 justify-center ml-[5px] px-2.5 py-[3px] rounded-[10px] text-white-A700 text-xs w-[35px]"
                          size="textmd"
                        >
                          All
                        </Text>
                        <Text
                          className="font-normal text-gray-700 text-xs"
                          size="textmd"
                        >
                          Food
                        </Text>
                        <Text
                          className="font-normal mr-[5px] text-gray-700 text-xs"
                          size="textmd"
                        >
                          Beverages
                        </Text>
                      </div>
                    </div>
                    <div className="h-[194px] md:h-[213px] mb-[5px] mt-6 pl-1 relative w-full">
                      <div className="absolute flex flex-col gap-[26px] items-start justify-start left-[2%] top-[0]">
                        <Text
                          className="font-normal font-roboto text-bluegray-400 text-xs tracking-[0.40px]"
                          size="textmd"
                        >
                          $40k
                        </Text>
                        <Text
                          className="font-normal font-roboto text-bluegray-400 text-xs tracking-[0.40px]"
                          size="textmd"
                        >
                          $30k
                        </Text>
                        <Text
                          className="font-normal font-roboto text-bluegray-400 text-xs tracking-[0.40px]"
                          size="textmd"
                        >
                          $20k
                        </Text>
                        <Text
                          className="font-normal font-roboto text-bluegray-400 text-xs tracking-[0.40px]"
                          size="textmd"
                        >
                          $10k
                        </Text>
                        <Text
                          className="font-montserrat font-normal ml-5 md:ml-[0] text-gray-501 text-xs tracking-[0.40px]"
                          size="textmd"
                        >
                          0
                        </Text>
                      </div>
                      <div className="absolute flex md:h-[184px] h-[187px] inset-y-[0] justify-end my-auto pb-0.5 right-[0] w-[94%] sm:w-full">
                        <Text
                          className="font-normal ml-0.5 mt-auto text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Mon
                        </Text>
                        <div className="absolute h-[184px] inset-[0] justify-center m-auto w-full">
                          <div className="h-[184px] m-auto w-full">
                            <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[0] w-full">
                              <Line className="bg-blue-50 h-[163px] ml-3 md:ml-[0] mr-[463px] w-px" />
                              <Line className="bg-gray-301 h-[0.82px] mt-[3px] w-full" />
                            </div>
                            <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start left-[16%] my-auto w-[4%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Tue
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-max inset-y-[0] items-center justify-start left-[32%] my-auto w-[5%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Wed
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-max inset-[0] items-center justify-center m-auto w-[4%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Thu
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-start justify-start my-auto right-[33%] w-[3%]">
                              <Line className="bg-blue-50 h-[163px] ml-1 md:ml-[0] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Fri
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[4%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Sat
                              </Text>
                            </div>
                            <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[4%]">
                              <Line className="bg-blue-50 h-[163px] w-px" />
                              <Text
                                className="font-normal text-bluegray-400 text-xs"
                                size="textmd"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[9%] h-[135px] inset-x-[0] mx-auto object-cover w-[95%]"
                            src="images/img_group18304.png"
                            alt="Group18304"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-[18px] rounded-[15px] shadow-bs3 w-[95%] md:w-full">
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
                <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[49%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[15px] shadow-bs3 w-full">
                    <div className="flex flex-row items-start justify-between mt-1.5 w-full">
                      <Text
                        className="font-medium mt-[3px] text-base text-gray-700"
                        size="textxl"
                      >
                        Order Summary
                      </Text>
                      <SelectBox
                        className="border border-blue-50 border-solid sm:flex-1 leading-[normal] sm:pl-5 pl-[21px] py-2 rounded-[15px] text-blue-A201 text-left text-xs w-[21%] sm:w-full"
                        placeholderClassName="text-blue-A201"
                        indicator={
                          <Img
                            className="h-4 mr-[22px] w-2.5"
                            src="images/img_caretdown_blue_A201.svg"
                            alt="caret-down"
                          />
                        }
                        isMulti={false}
                        name="group18307"
                        options={monthlyOptionsList}
                        isSearchable={false}
                        placeholder="Monthly"
                      />
                    </div>
                    <div className="border border-blue-50 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[23px] rounded-[5px] w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="font-medium text-base text-gray-700"
                          size="textxl"
                        >
                          1256K
                        </Text>
                        <Text
                          className="font-normal text-bluegray-400 text-sm"
                          size="textlg"
                        >
                          On Delivery{" "}
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:w-full w-px" />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-5 sm:ml-[0]">
                        <Text
                          className="font-medium text-base text-gray-700"
                          size="textxl"
                        >
                          452K
                        </Text>
                        <Text
                          className="font-normal text-bluegray-400 text-sm"
                          size="textlg"
                        >
                          Total Delivered
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:ml-[0] ml-[11px] sm:w-full w-px" />
                      <div className="flex flex-col gap-[5px] items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="font-medium text-base text-gray-700"
                          size="textxl"
                        >
                          25K
                        </Text>
                        <Text
                          className="font-normal text-bluegray-400 text-sm"
                          size="textlg"
                        >
                          Canceled
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[59px] sm:h-px sm:ml-[0] ml-[19px] sm:w-full w-px" />
                      <div className="flex flex-col gap-[5px] items-start justify-start sm:ml-[0] ml-[19px]">
                        <Text
                          className="font-medium text-base text-gray-700"
                          size="textxl"
                        >
                          2256K
                        </Text>
                        <Text
                          className="font-normal text-bluegray-400 text-sm"
                          size="textlg"
                        >
                          Total Proses
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-101 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-1.5 mt-5 p-2.5 rounded-[5px] w-full">
                      <Text
                        className="font-medium sm:ml-[0] ml-[5px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        New Order
                      </Text>
                      <Button className="bg-green-500 cursor-pointer font-medium leading-[normal] min-w-[78px] sm:ml-[0] ml-[120px] py-[7px] rounded-sm text-center text-sm text-white-A700">
                        2512k
                      </Button>
                      <Text
                        className="font-medium sm:ml-[0] ml-[138px] text-blue-A201 text-sm"
                        size="textlg"
                      >
                        Viwe All
                      </Text>
                      <Img
                        className="h-px ml-1 sm:ml-[0] w-[3%]"
                        src="images/img_arrow1.svg"
                        alt="ArrowOne"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start py-[21px] rounded-[15px] shadow-bs3 w-full">
                    <div className="flex flex-row items-center justify-between w-[93%] md:w-full">
                      <Text
                        className="font-medium text-base text-gray-701"
                        size="textxl"
                      >
                        Deliyvery Map
                      </Text>
                      <SelectBox
                        className="border border-blue-50 border-solid leading-[normal] sm:pl-5 pl-[21px] py-2 rounded-[15px] text-blue-A201 text-left text-xs w-[21%] sm:w-full"
                        placeholderClassName="text-blue-A201"
                        indicator={
                          <Img
                            className="h-4 mr-[22px] w-2.5"
                            src="images/img_caretdown_blue_A201.svg"
                            alt="caret-down"
                          />
                        }
                        isMulti={false}
                        name="groupTwentySeven"
                        options={monthlyOptionsList1}
                        isSearchable={false}
                        placeholder="Monthly"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat sm:h-[177px] h-[189px] md:h-[92px] p-6 sm:px-5 relative w-full"
                      style={{
                        backgroundImage: "url('images/img_group18347.png')",
                      }}
                    >
                      <div className="absolute bottom-[24%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start left-[11%] w-[70%]">
                        <Img
                          className="h-[45px] mb-1 sm:mt-0 mt-[34px] w-1/4"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Img
                          className="h-11 sm:ml-[0] ml-[33px] w-[29%]"
                          src="images/img_vector1.svg"
                          alt="VectorOne"
                        />
                        <Img
                          className="h-11 sm:ml-[0] ml-[31px] sm:mt-0 mt-[39px] w-[29%]"
                          src="images/img_vector1.svg"
                          alt="VectorOne One"
                        />
                      </div>
                      <Img
                        className="absolute h-[92px] left-[21%] object-cover top-[13%] w-[92px]"
                        src="images/img_marker1.png"
                        alt="MarkerOne"
                      />
                      <Img
                        className="absolute bottom-[33%] h-[43px] right-[39%] w-[43px]"
                        src="images/img_ticket_43X43.svg"
                        alt="ticket One"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-10 inset-x-[0] items-center justify-start mx-auto p-1 top-[22%] w-[7%]"
                        style={{
                          backgroundImage: "url('images/img_maskgroup.svg')",
                        }}
                      >
                        <Img
                          className="h-[26px] md:h-auto mb-[5px] rounded-[50%] w-[26px]"
                          src="images/img_image1_26X26.png"
                          alt="imageOne"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[15%] h-10 md:h-[26px] p-1 right-[16%] w-[7%]"
                        style={{
                          backgroundImage: "url('images/img_maskgroup.svg')",
                        }}
                      >
                        <Img
                          className="h-[26px] mx-auto rounded-[50%] w-[26px]"
                          src="images/img_image1.png"
                          alt="imageOne One"
                        />
                        <Img
                          className="absolute h-[26px] inset-x-[0] mx-auto rounded-[50%] top-[10%] w-[26px]"
                          src="images/img_3201371361.png"
                          alt="3201371361"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[14%] h-10 md:h-[26px] left-[9%] p-1 w-[7%]"
                        style={{
                          backgroundImage: "url('images/img_maskgroup.svg')",
                        }}
                      >
                        <Img
                          className="h-[26px] mx-auto rounded-[50%] w-[26px]"
                          src="images/img_image1.png"
                          alt="imageOne Two"
                        />
                        <div className="absolute h-[26px] inset-x-[0] mx-auto top-[10%] w-[26px]">
                          <Img
                            className="h-[26px] m-auto rounded-[50%] w-[26px]"
                            src="images/img_3201371361.png"
                            alt="3201371361 One"
                          />
                          <Img
                            className="absolute h-[26px] inset-[0] justify-center m-auto rounded-[50%] w-[26px]"
                            src="images/img_3020795721_26X26.png"
                            alt="3020795721"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="font-medium ml-0.5 md:ml-[0] text-base text-gray-700"
                        size="textxl"
                      >
                        Upcomming Sehedule
                      </Text>
                      <List
                        className="flex flex-col gap-3 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[30px] md:h-auto sm:mt-0 mt-0.5 object-cover rounded-sm w-[30px]"
                            src="images/img_rectangle4099.png"
                            alt="Rectangle4099"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="font-normal text-gray-700 text-sm"
                              size="textlg"
                            >
                              <span className="text-gray-700 font-roboto text-left">
                                Mohan Cudhidi
                              </span>
                              <span className="text-blue-A201 font-roboto text-left font-medium">
                                {" "}
                                (4 Iteam )
                              </span>
                            </Text>
                            <Text
                              className="font-normal mt-0.5 text-bluegray-400 text-xs"
                              size="textmd"
                            >
                              Wiil be shipping on 11 : 24 Am
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start sm:mt-0 mt-0.5">
                            <Text
                              className="font-normal text-gray-700 text-xs"
                              size="textmd"
                            >
                              2340 Hex Parker Rd. Allentown,
                            </Text>
                            <Text
                              className="font-normal mt-0.5 text-gray-700 text-xs"
                              size="textmd"
                            >
                              South Africa
                            </Text>
                          </div>
                          <Button className="bg-blue-A201 flex h-[30px] items-center justify-center mb-[3px] p-2 rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_search_white_A700.svg"
                              alt="search Two"
                            />
                          </Button>
                        </div>
                        <Line className="self-center h-px bg-blue-50 w-[99%]" />
                        <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[30px] md:h-auto sm:mt-0 mt-0.5 object-cover rounded-sm w-[30px]"
                            src="images/img_rectangle4099_30X30.png"
                            alt="Rectangle4099 One"
                          />
                          <div className="flex flex-col items-start justify-start mb-[5px]">
                            <Text
                              className="font-normal text-gray-700 text-sm"
                              size="textlg"
                            >
                              <span className="text-gray-700 font-roboto text-left">
                                Nohan Cudhidi
                              </span>
                              <span className="text-blue-A201 font-roboto text-left">
                                {" "}
                              </span>
                              <span className="text-blue-A201 font-roboto text-left font-medium">
                                (2 Iteam )
                              </span>
                            </Text>
                            <Text
                              className="font-normal text-bluegray-400 text-xs"
                              size="textmd"
                            >
                              Wiil be shipping on 12 : 24 Am
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start sm:mt-0 mt-2">
                            <Text
                              className="font-normal text-gray-700 text-xs"
                              size="textmd"
                            >
                              4140 Parker Rd. Allentown, New{" "}
                            </Text>
                            <Text
                              className="font-normal text-gray-700 text-xs"
                              size="textmd"
                            >
                              United states
                            </Text>
                          </div>
                          <Button className="bg-blue-A201 flex h-[30px] items-center justify-center sm:mt-0 mt-1.5 p-2 rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_search_white_A700.svg"
                              alt="search Three"
                            />
                          </Button>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-start p-5 rounded-[15px] shadow-bs3 w-[66%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-2 w-full">
                    <Text
                      className="font-medium text-base text-gray-700"
                      size="textxl"
                    >
                      Recent Oder Request
                    </Text>
                    <SelectBox
                      className="border border-blue-50 border-solid sm:flex-1 leading-[normal] sm:pl-5 pl-[21px] py-2 rounded-[15px] text-blue-A201 text-left text-xs w-[16%] sm:w-full"
                      placeholderClassName="text-blue-A201"
                      indicator={
                        <Img
                          className="h-4 mr-[22px] w-2.5"
                          src="images/img_caretdown_blue_A201.svg"
                          alt="caret-down"
                        />
                      }
                      isMulti={false}
                      name="group18140"
                      options={monthlyOptionsList2}
                      isSearchable={false}
                      placeholder="Monthly"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center mb-2 w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start pb-0.5 w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto md:mt-0 mt-0.5 object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4151.png"
                        alt="Rectangle4144"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <Text
                          className="font-medium text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #012365
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Marvin McKinney
                        </Text>
                        <Text
                          className="font-normal leading-[16.00px] mt-1 text-bluegray-400 text-xs w-[66%] sm:w-full"
                          size="textmd"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[9px] md:mt-0 mt-[18px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $12.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] md:mt-0 mt-[18px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        X2
                      </Text>
                      <Button className="bg-blue-50 cursor-pointer font-medium mb-2 min-w-[100px] md:ml-[0] ml-[58px] md:mt-0 mt-[11px] py-[7px] rounded-sm text-blue-A201 text-center text-sm">
                        Pending
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start pb-0.5 w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto md:mt-0 mt-[3px] object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4150.png"
                        alt="Rectangle4144 One"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <Text
                          className="font-medium text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #012365
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Jacob Jones
                        </Text>
                        <Text
                          className="font-normal leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-[66%] sm:w-full"
                          size="textmd"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[9px] md:mt-0 mt-[19px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $11.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] md:mt-0 mt-[19px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        X2
                      </Text>
                      <Button className="bg-green-50 cursor-pointer font-medium min-w-[100px] md:ml-[0] ml-[58px] md:mt-0 my-2.5 py-[7px] rounded-sm text-center text-green-400 text-sm">
                        Delivered
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto md:mt-0 mt-0.5 object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4144_5.png"
                        alt="Rectangle4144 Two"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <Text
                          className="font-medium text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #012365
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Cody Fisher
                        </Text>
                        <Text
                          className="font-normal leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-[66%] sm:w-full"
                          size="textmd"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[9px] md:mt-0 mt-[18px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $42.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] md:mt-0 mt-[18px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        X2
                      </Text>
                      <Button className="bg-blue-50 cursor-pointer font-medium mb-2 min-w-[100px] md:ml-[0] ml-[58px] md:mt-0 mt-[11px] py-[7px] rounded-sm text-blue-A201 text-center text-sm">
                        Pending
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start pb-0.5 w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto md:mt-0 mt-[3px] object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4144_6.png"
                        alt="Rectangle4144 Three"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <Text
                          className="font-medium text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #012365
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Esther Howard
                        </Text>
                        <Text
                          className="font-normal leading-[16.00px] mt-[5px] text-bluegray-400 text-xs w-[66%] sm:w-full"
                          size="textmd"
                        >
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[9px] md:mt-0 mt-[19px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $92.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] md:mt-0 mt-[19px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        X2
                      </Text>
                      <Button className="bg-green-50 cursor-pointer font-medium min-w-[100px] md:ml-[0] ml-[58px] md:mt-0 my-2.5 py-[7px] rounded-sm text-center text-green-400 text-sm">
                        Delivered
                      </Button>
                    </div>
                  </List>
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
                        src="images/img_rectangle4144_7.png"
                        alt="Rectangle4144 Four"
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
                        src="images/img_rectangle4144_8.png"
                        alt="Rectangle4144 Five"
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
                        src="images/img_rectangle4144_9.png"
                        alt="Rectangle4144 Six"
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
                        src="images/img_rectangle4144.png"
                        alt="Rectangle4144 Seven"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
