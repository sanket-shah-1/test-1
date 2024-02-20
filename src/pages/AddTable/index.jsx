import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const group18637OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddTablePage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:px-5 w-[18%] md:w-full">
            <div className="h-[1024px] relative w-full">
              <Img
                className="absolute h-[1024px] inset-[0] justify-center m-auto object-cover shadow-bs w-full"
                src="images/img_rectangle8.png"
                alt="RectangleEight"
              />
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto pt-[3px] top-[3%] w-full">
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
                  <div className="flex flex-row font-roboto gap-[11px] items-center justify-start mt-[53px] pb-[3px] pl-[3px] w-3/5 md:w-full">
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
                  <div className="flex flex-row font-roboto items-start justify-start mt-[35px] w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="font-normal ml-2 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Customer
                    </Text>
                    <Img
                      className="h-3 ml-[75px] w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright Two"
                    />
                  </div>
                  <div className="flex flex-row font-roboto gap-[9px] items-start justify-start mt-8 w-[51%] md:w-full">
                    <Img
                      className="h-4 w-[15px]"
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
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-row font-roboto h-10 items-center justify-start mt-[22px] p-2.5 w-full"
                  style={{
                    backgroundImage: "url('images/img_group18575.svg')",
                  }}
                >
                  <Img
                    className="h-4 ml-5 w-4"
                    src="images/img_circlehalf_16X16.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="font-normal mb-0.5 ml-2 text-base text-blue-A201"
                    size="textxl"
                  >
                    Table{" "}
                  </Text>
                  <Img
                    className="h-[7px] ml-[102px] w-[6%]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-col font-roboto gap-[23px] items-start justify-start md:ml-[0] ml-[55px] mt-[19px]">
                  <Text
                    className="font-normal text-base text-blue-A201"
                    size="textxl"
                  >
                    Add Table
                  </Text>
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Table List
                  </Text>
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Table ID
                  </Text>
                </div>
                <div className="flex flex-col font-roboto items-start justify-start md:ml-[0] ml-[29px] mt-[143px] w-[76%] md:w-full">
                  <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start p-[5px] rounded-[10px] shadow-bs1 w-full">
                    <Text
                      className="font-medium mt-1.5 text-base text-white-A700"
                      size="textxl"
                    >
                      Favourite Add Menus
                    </Text>
                    <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                      <Img
                        className="h-[17px] mt-[37px] w-[18px]"
                        src="images/img_cart_11.svg"
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
                        src="images/img_cart_12.svg"
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
                Add Table
              </Text>
              <Text
                className="font-normal mt-2 text-base text-bluegray-400"
                size="textxl"
              >
                Table /Add Table
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-10 p-5 rounded-[15px] shadow-bs3 w-full">
                <Text
                  className="font-medium mt-1 text-base text-gray-700"
                  size="textxl"
                >
                  Choose Better Table Type
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-7 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[52%] md:w-full">
                    <Text
                      className="font-normal text-base text-gray-700"
                      size="textxl"
                    >
                      Table Name
                    </Text>
                    <Input
                      name="Group18632"
                      placeholder="Enter Name "
                      className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                      wrapClassName="bg-gray-51 border border-gray-200 border-solid mt-[11px] pl-4 pr-[35px] py-[21px] rounded-[5px] w-[95%]"
                      type="text"
                    ></Input>
                    <Text
                      className="font-normal mt-[17px] text-base text-gray-700"
                      size="textxl"
                    >
                      Upload{" "}
                    </Text>
                    <div className="bg-gray-51 border border-dashed border-gray-200 flex flex-col gap-[17px] items-center justify-start mt-2 p-10 sm:px-5 rounded-[5px] w-[95%] md:w-full">
                      <Img
                        className="h-[25px] w-[7%]"
                        src="images/img_download.svg"
                        alt="download"
                      />
                      <Text
                        className="font-normal text-bluegray-400 text-sm"
                        size="textlg"
                      >
                        <span className="text-gray-700 font-roboto text-left font-medium">
                          Drop your imges here,
                        </span>
                        <span className="text-bluegray-400 font-roboto text-left">
                          {" "}
                        </span>
                        <span className="text-blue-A201 font-roboto text-left">
                          or browes
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="font-normal text-base text-gray-700"
                      size="textxl"
                    >
                      Table Price
                    </Text>
                    <Input
                      name="Group18639"
                      placeholder="Enter Price"
                      className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                      wrapClassName="bg-gray-51 border border-gray-200 border-solid mt-[11px] pl-[15px] pr-[35px] py-[21px] rounded-[5px] w-full"
                    ></Input>
                    <Text
                      className="font-normal mt-5 text-base text-bluegray-400"
                      size="textxl"
                    >
                      Categories
                    </Text>
                    <SelectBox
                      className="bg-gray-51 border border-gray-200 border-solid leading-[normal] mt-[7px] pb-[23px] pl-4 pt-5 rounded-[5px] text-base text-bluegray-400 text-left w-full"
                      placeholderClassName="text-bluegray-400"
                      indicator={
                        <Img
                          className="h-1.5 mr-4 w-3"
                          src="images/img_arrowdown_blue_A201.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="Group18637"
                      options={group18637OptionsList}
                      isSearchable={false}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-start mb-[5px] mt-[25px] w-[23%] md:w-full">
                  <Button className="bg-blue-A201 cursor-pointer font-medium leading-[normal] min-w-[112px] py-2.5 rounded-sm text-[15px] text-center text-white-A700">
                    Submit
                  </Button>
                  <Button className="border border-blue-A201 border-solid cursor-pointer font-medium leading-[normal] min-w-[112px] py-2.5 rounded-sm text-[15px] text-blue-A201 text-center">
                    Cencel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTablePage;
