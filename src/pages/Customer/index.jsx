import React from "react";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CustomerPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:px-5 w-[18%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start py-[35px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[31px] w-[71%] md:w-full">
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
                </List>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row font-roboto h-10 items-center justify-start mt-6 p-[11px] w-full"
                style={{ backgroundImage: "url('images/img_group18575.svg')" }}
              >
                <Img
                  className="h-[15px] ml-[19px] w-4"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="font-normal ml-[7px] text-base text-blue-A201"
                  size="textxl"
                >
                  Customer
                </Text>
                <Img
                  className="h-[7px] ml-[73px] w-[6%]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col font-roboto gap-[25px] items-start justify-start md:ml-[0] ml-[54px] mt-[23px]">
                <Text
                  className="font-normal text-base text-blue-A201"
                  size="textxl"
                >
                  Coustomer List
                </Text>
                <Text
                  className="font-normal text-base text-bluegray-400"
                  size="textxl"
                >
                  Review
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start mb-[71px] md:ml-[0] ml-[30px] mt-[31px] w-[76%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[48%] md:w-full">
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
                <div className="flex flex-row items-start justify-start mt-[33px] pb-0.5 w-[94%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_circlehalf.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="font-normal ml-2 text-base text-bluegray-400"
                    size="textxl"
                  >
                    Table{" "}
                  </Text>
                  <Img
                    className="h-3 ml-[106px] mt-[3px] w-[4%]"
                    src="images/img_arrowright.svg"
                    alt="arrowright Two"
                  />
                </div>
                <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start mt-[165px] p-[5px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="font-medium mt-1.5 text-base text-white-A700"
                    size="textxl"
                  >
                    Favourite Add Menus
                  </Text>
                  <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                    <Img
                      className="h-[17px] mt-[37px] w-[18px]"
                      src="images/img_cart_3.svg"
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
                      src="images/img_cart_4.svg"
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
                      alt="user"
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
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start">
                  <Text
                    className="font-medium sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                    size="text2xl"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Customer / Reviwe
                  </Text>
                </div>
                <SelectBox
                  className="md:flex-1 leading-[normal] py-2 text-left text-white-A700 text-xs w-[10%] md:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-4 mr-[15px] w-2.5"
                      src="images/img_caretdown.svg"
                      alt="caret-down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Filter"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-3 mr-[-62px] pl-[17px] pr-[35px] sm:pr-5 border-blue-A201 border border-solid w-[1%] rounded-[15px] py-[9px]"
                        src="images/img_settings_12X10.svg"
                        alt="settings"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="group18179"
                  isMulti={false}
                  options={filterOptionsList}
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-9 p-5 rounded-[15px] shadow-bs3 w-full">
                <List
                  className="flex flex-col gap-[21.5px] items-center mb-[27px] mt-0.5 w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      Order ID{" "}
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[59px] md:mt-0 mt-0.5 text-gray-700 text-sm"
                      size="textlg"
                    >
                      Date
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[184px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Customer
                    </Text>
                    <Text
                      className="font-medium ml-28 md:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Location
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[178px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Total Spent
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[70px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Last Order
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[78px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $83.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $12.3
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[132px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[78px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $83.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $12.3
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[132px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 One"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[86px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $82.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $45.36
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[123px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Two"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[82px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $87.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $8.36
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[131px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Three"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[94px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $82.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $71.56
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[123px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Four"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      24 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $90.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $12.59
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[124px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Five"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Annette Black
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[90px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $12.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-green-50 text-sm"
                      size="textlg"
                    >
                      <span className="text-gray-700 font-roboto text-left">
                        <>
                          $78.12
                          <br />
                        </>
                      </span>
                      <span className="text-green-50 font-roboto text-left">
                        <>
                          <br />
                        </>
                      </span>
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[123px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Six"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[95px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $92.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-500 text-sm"
                      size="textlg"
                    >
                      <span className="text-gray-700 font-roboto text-left">
                        <>
                          $78.32
                          <br />
                        </>
                      </span>
                      <span className="text-gray-500 font-roboto text-left">
                        <>
                          <br />
                        </>
                      </span>
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[123px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Seven"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      23 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[94px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $32.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $78.6
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[131px] sm:mt-0 mt-1.5 w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Eight"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[62px] text-gray-700 text-xs"
                      size="textmd"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[76px] text-gray-700 text-sm"
                      size="textlg"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium ml-20 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $82.46{" "}
                    </Text>
                    <Text
                      className="font-medium ml-24 sm:ml-[0] text-gray-700 text-sm"
                      size="textlg"
                    >
                      $78.52
                    </Text>
                    <Img
                      className="h-1 sm:ml-[0] ml-[123px] w-[2%]"
                      src="images/img_group18181.svg"
                      alt="Group18181 Nine"
                    />
                  </div>
                </List>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[30px] w-full">
                <Text
                  className="font-medium font-roboto sm:mt-0 mt-1.5 text-gray-700 text-sm"
                  size="textlg"
                >
                  Dispalying 10 Out of 250
                </Text>
                <Text
                  className="font-medium font-montserrat sm:ml-[0] ml-[826px] sm:mt-0 mt-2.5 text-gray-700 text-sm"
                  size="textlg"
                >
                  10-250
                </Text>
                <Img
                  className="h-[30px] sm:ml-[0] ml-[18px] w-[6%]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
