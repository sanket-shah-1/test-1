import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const OrderIdPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:px-5 w-[18%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start py-[35px] shadow-bs w-full">
              <div className="flex flex-col gap-[53px] items-start justify-start md:ml-[0] ml-[27px] w-[54%] md:w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start ml-1 md:ml-[0] w-[97%] md:w-full">
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
                <div className="flex flex-row font-roboto gap-[11px] items-start justify-start w-[79%] md:w-full">
                  <Img
                    className="h-[13px] ml-0.5 mt-0.5 w-[13px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="font-normal mb-0.5 text-base text-bluegray-400"
                    size="textxl"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row font-roboto h-10 items-center justify-start mt-[22px] p-2.5 w-full"
                style={{ backgroundImage: "url('images/img_group18575.svg')" }}
              >
                <Img
                  className="h-4 ml-[19px] w-4"
                  src="images/img_airplane_16X16.svg"
                  alt="airplane"
                />
                <Text
                  className="font-normal mb-0.5 ml-2 text-base text-blue-A201"
                  size="textxl"
                >
                  Orders
                </Text>
                <Img
                  className="h-[7px] ml-24 w-[6%]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col font-roboto gap-[22px] items-start justify-start md:ml-[0] ml-[54px] mt-[21px]">
                <Text
                  className="font-normal text-base text-bluegray-400"
                  size="textxl"
                >
                  Order list
                </Text>
                <Text
                  className="font-normal text-base text-blue-A201"
                  size="textxl"
                >
                  Order ID
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start mb-[99px] md:ml-[0] ml-[30px] mt-9 w-[76%] md:w-full">
                <List
                  className="flex flex-col gap-[35px] w-[94%]"
                  orientation="vertical"
                >
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
                      alt="arrowright"
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
                      alt="arrowright One"
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
                <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start mt-[207px] p-[5px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="font-medium mt-1.5 text-base text-white-A700"
                    size="textxl"
                  >
                    Favourite Add Menus
                  </Text>
                  <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                    <Img
                      className="h-[17px] mt-[37px] w-[18px]"
                      src="images/img_cart_9.svg"
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
                      src="images/img_cart_10.svg"
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
                <>Order ID #5552351</>
              </Text>
              <Text
                className="font-normal mt-2 text-base text-bluegray-400"
                size="textxl"
              >
                Dashboard / Order Details
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[37px] w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[69%] md:w-full">
                  <div className="bg-white-A700 h-[129px] md:h-[196px] sm:h-[540px] p-[25px] sm:px-5 relative rounded-[10px] shadow-bs3 w-[97%] md:w-full">
                    <Line className="bg-blue-A201 h-0.5 ml-[25px] mt-[13px] w-[82%]" />
                    <List
                      className="absolute sm:flex-col flex-row md:gap-10 gap-[76px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-center m-auto w-[91%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-blue-A201 flex flex-col h-[26px] items-center justify-start p-[7px] rounded-[50%] w-[26px]">
                          <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                        </div>
                        <Text
                          className="font-medium mt-3 text-base text-gray-700"
                          size="textxl"
                        >
                          Order Created
                        </Text>
                        <Text
                          className="font-medium mt-2.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Thu, 21 jul 2020{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-blue-A201 flex flex-col h-[26px] items-center justify-start p-[7px] rounded-[50%] w-[26px]">
                          <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                        </div>
                        <Text
                          className="font-medium mt-4 text-base text-gray-700"
                          size="textxl"
                        >
                          Payment Succcess
                        </Text>
                        <Text
                          className="font-medium mt-1.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Thu, 21 jul 2020
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-blue-A201 flex flex-col h-[26px] items-center justify-start p-[7px] rounded-[50%] w-[26px]">
                          <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                        </div>
                        <Text
                          className="font-medium mt-[13px] text-base text-gray-700"
                          size="textxl"
                        >
                          On Delivery
                        </Text>
                        <Text
                          className="font-medium mt-[7px] text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Thu, 21 jul 2020
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="bg-blue-A201 flex flex-col h-[26px] items-center justify-start p-[7px] rounded-[50%] w-[26px]">
                          <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                        </div>
                        <Text
                          className="font-medium mt-3 text-base text-gray-700"
                          size="textxl"
                        >
                          Order Delivered
                        </Text>
                        <Text
                          className="font-medium mt-2.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          Thu, 21 jul 2020{" "}
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-[15px] shadow-bs3 w-[97%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[34px] h-[280px] items-start justify-start p-[15px] rounded-[10px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group18410.png')",
                      }}
                    >
                      <div className="md:h-[202px] h-[239px] ml-1 md:ml-[0] md:mt-0 mt-[9px] relative w-[86%] md:w-full">
                        <div className="absolute flex flex-col gap-3 h-max inset-[0] justify-center m-auto w-full">
                          <div className="md:h-[163px] h-[183px] relative w-full">
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[164px] inset-x-[0] items-end justify-start mx-auto p-8 sm:px-5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group19.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[41px] items-center justify-end mb-[59px] mr-[185px] p-[3px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group18406.svg')",
                                }}
                              >
                                <Text
                                  className="font-medium mt-1.5 text-blue-A201 text-xs"
                                  size="textmd"
                                >
                                  <>
                                    1-2
                                    <br />
                                    min
                                  </>
                                </Text>
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat h-10 md:h-[26px] p-1 right-[12%] top-[0] w-[7%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_maskgroup.svg')",
                              }}
                            >
                              <Img
                                className="h-[26px] mx-auto rounded-[50%] w-[26px]"
                                src="images/img_image1.png"
                                alt="imageOne"
                              />
                              <Img
                                className="absolute h-[26px] inset-x-[0] mx-auto rounded-[50%] top-[10%] w-[26px]"
                                src="images/img_3201371361.png"
                                alt="3201371361"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-10 md:h-[27px] justify-end md:ml-[0] ml-[143px] p-[3px] relative rotate-[178deg] w-[7%]"
                            style={{
                              backgroundImage:
                                "url('images/img_maskgroup.svg')",
                            }}
                          >
                            <Img
                              className="h-[27px] mt-auto mx-auto rounded-[50%] w-[27px]"
                              src="images/img_image1.png"
                              alt="imageOne One"
                            />
                            <Img
                              className="absolute bottom-[8%] h-[27px] inset-x-[0] mx-auto rotate-[2deg] rounded-[50%] w-[27px]"
                              src="images/img_3020795721.png"
                              alt="3020795721"
                            />
                          </div>
                        </div>
                        <div className="absolute flex flex-col gap-[7px] items-start justify-start left-[8%] top-[0]">
                          <Text
                            className="font-medium text-base text-gray-700"
                            size="textxl"
                          >
                            Tark Order
                          </Text>
                          <Text
                            className="font-normal text-bluegray-400 text-xs"
                            size="textmd"
                          >
                            Nor again is For
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-bluegray-800 flex h-10 items-center justify-center mb-[9px] md:mt-0 mt-[199px] p-2.5 rounded-[5px] w-10">
                        <Img
                          className="h-[19px]"
                          src="images/img_minimize_40X40.svg"
                          alt="minimize One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[479px] relative w-[32%] md:w-full">
                  <div className="absolute bg-white-A700 h-[479px] inset-[0] justify-center m-auto rounded-[15px] shadow-bs3 w-full"></div>
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <Img
                      className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                      src="images/img_ellipse48.png"
                      alt="EllipseFortyEight"
                    />
                    <Text
                      className="font-medium mt-3 text-base text-gray-700"
                      size="textxl"
                    >
                      Darlene Robertson
                    </Text>
                    <Button className="bg-blue-A201 cursor-pointer font-medium leading-[normal] min-w-[119px] mt-4 py-2 rounded-[15px] text-center text-white-A700 text-xs">
                      Customer
                    </Button>
                    <div className="flex flex-row items-center justify-start mt-[17px] w-[89%] md:w-full">
                      <Button className="bg-blue-A201 flex h-10 items-center justify-center p-3 rounded-[50%] w-10">
                        <Img src="images/img_location.svg" alt="location" />
                      </Button>
                      <Text
                        className="font-medium ml-2.5 text-bluegray-400 text-sm w-[49%] sm:w-full"
                        size="textlg"
                      >
                        Parker Rd. 12Allentown, New
                      </Text>
                      <Text
                        className="font-medium ml-[62px] text-bluegray-400 text-xs"
                        size="textmd"
                      >
                        02 Items
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-col gap-[21px] items-center justify-end mt-[18px] pt-4 w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-[89%] md:w-full">
                        <div className="flex flex-row items-start justify-between pr-0.5 w-full">
                          <Text
                            className="font-medium mb-0.5 text-base text-blue-A201"
                            size="textxl"
                          >
                            Note Order
                          </Text>
                          <Img
                            className="h-4 mt-0.5"
                            src="images/img_volume_16X41.svg"
                            alt="volume One"
                          />
                        </div>
                        <Text
                          className="font-normal leading-[20.00px] text-bluegray-400 text-xs w-[99%] sm:w-full"
                          size="textmd"
                        >
                          Nor again is there anyone who loves or pursues or
                          desires to obtain pain of itself, because it is pain,
                          but because occasionally circumstances occur in which
                          toil{" "}
                        </Text>
                      </div>
                      <div className="bg-blue-A201 flex flex-row gap-10 items-center justify-start p-2.5 rounded-bl-[15px] rounded-br-[15px] w-full">
                        <div className="bg-white-A700 h-10 md:h-4 ml-[11px] p-2 relative rounded-[50%] w-10">
                          <Img
                            className="absolute bottom-[20%] h-4 right-[20%] w-[53%]"
                            src="images/img_megaphone.svg"
                            alt="megaphone"
                          />
                        </div>
                        <Text
                          className="font-medium text-base text-white-A700"
                          size="textxl"
                        >
                          {" "}
                          Parker Rd. Allentown, New
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[19px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[30px] items-center justify-start md:mt-0 mt-[11px] p-5 rounded-[15px] shadow-bs3 w-[66%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[3px] w-full">
                    <Text
                      className="font-medium sm:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="textlg"
                    >
                      Items
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[249px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Oty
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[102px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[73px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Total Price
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[72px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Clear
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center mb-3.5 w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4144.png"
                        alt="Rectangle4144"
                      />
                      <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start ml-3 md:ml-[0] w-[32%] md:w-full">
                        <Text
                          className="font-medium leading-[16.00px] ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-start w-1/2 md:w-full">
                          <Img
                            className="h-3 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star One"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Two"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Three"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Four"
                          />
                          <Text
                            className="font-medium ml-1.5 text-orange-300 text-xs"
                            size="textmd"
                          >
                            (45)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                        size="textlg"
                      >
                        1x
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[109px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $12.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[70px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $456
                      </Text>
                      <Img
                        className="h-[13px] md:ml-[0] ml-[115px] w-3"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4144_48X50.png"
                        alt="Rectangle4144 One"
                      />
                      <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start ml-3 md:ml-[0] w-[32%] md:w-full">
                        <Text
                          className="font-medium leading-[16.00px] ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-start w-1/2 md:w-full">
                          <Img
                            className="h-3 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star One"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star One One"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Two One"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Three One"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Four One"
                          />
                          <Text
                            className="font-medium ml-1.5 text-orange-300 text-xs"
                            size="textmd"
                          >
                            (45)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                        size="textlg"
                      >
                        3x
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[109px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $12.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[70px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $456
                      </Text>
                      <Img
                        className="h-[13px] md:ml-[0] ml-[115px] w-3"
                        src="images/img_trash_13X12.svg"
                        alt="trash One"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Img
                        className="md:flex-1 h-12 sm:h-auto object-cover rounded w-[8%] md:w-full"
                        src="images/img_rectangle4144_1.png"
                        alt="Rectangle4144 Two"
                      />
                      <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start ml-3 md:ml-[0] w-[32%] md:w-full">
                        <Text
                          className="font-medium leading-[16.00px] ml-0.5 md:ml-[0] text-gray-700 text-sm"
                          size="textlg"
                        >
                          <>
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-start w-1/2 md:w-full">
                          <Img
                            className="h-3 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Two"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star One Two"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Two Two"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Three Two"
                          />
                          <Img
                            className="h-3 ml-1 mt-0.5 w-3"
                            src="images/img_star.svg"
                            alt="star Four Two"
                          />
                          <Text
                            className="font-medium ml-1.5 text-orange-300 text-xs"
                            size="textmd"
                          >
                            (45)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                        size="textlg"
                      >
                        5x
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[109px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $12.5
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[70px] text-gray-700 text-sm"
                        size="textlg"
                      >
                        $456
                      </Text>
                      <Img
                        className="h-[13px] md:ml-[0] ml-[115px] w-3"
                        src="images/img_trash.svg"
                        alt="trash Two"
                      />
                    </div>
                  </List>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-[18px] rounded-[15px] shadow-bs3 w-[32%] md:w-full">
                  <Text
                    className="font-medium ml-0.5 md:ml-[0] mt-1 text-base text-gray-700"
                    size="textxl"
                  >
                    Order Summary
                  </Text>
                  <div className="h-[139px] md:h-[158px] md:ml-[0] ml-[87px] mt-[19px] relative shadow-bs4 w-[139px]">
                    <div className="!w-[139px] h-[139px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[139px] h-[139px] m-auto overflow-visible"
                        value={44}
                        counterClockwise
                        strokeWidth={16}
                        styles={{
                          trail: { strokeWidth: 16, stroke: "#ffa41d" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(90deg)",
                            stroke: "#fe4242",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <div className="!w-[139px] absolute h-[139px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs5">
                      <CircularProgressbar
                        className="!w-[139px] absolute h-[139px] inset-[0] justify-center m-auto overflow-visible rounded-[50%] shadow-bs5"
                        value={22}
                        counterClockwise
                        strokeWidth={16}
                        styles={{
                          trail: { strokeWidth: 16, stroke: "#ffa41d" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(246deg)",
                            stroke: "#72c1e2",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[38px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[97%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[57%]">
                      <Text
                        className="font-medium text-gray-700 text-sm"
                        size="textlg"
                      >
                        Piza (40%)
                      </Text>
                      <div className="h-[3px] overflow-hidden relative w-[78%]">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[1.5px]"></div>
                        <div
                          className="h-full absolute bg-red_500  rounded-[1.5px]"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[44%]">
                      <Text
                        className="font-medium text-gray-700 text-sm"
                        size="textlg"
                      >
                        Dessert (40%)
                      </Text>
                      <div className="h-[3px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[1.5px]"></div>
                        <div
                          className="h-full absolute bg-orange_400  rounded-[1.5px]"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-4 text-gray-700 text-sm"
                    size="textlg"
                  >
                    juice (20%)
                  </Text>
                  <div className="h-[3px] ml-0.5 md:ml-[0] mt-[7px] overflow-hidden relative w-[43%]">
                    <div className="w-full h-full absolute bg-gray_200 rounded-[1.5px]"></div>
                    <div
                      className="h-full absolute bg-blue_300  rounded-[1.5px]"
                      style={{ width: "77%" }}
                    ></div>
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

export default OrderIdPage;
