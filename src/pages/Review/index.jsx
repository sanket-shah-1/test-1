import React from "react";

import { CheckBox, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const newestOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReviewPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-salsa items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col md:hidden items-center justify-start md:px-5 w-[18%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start py-[35px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px] w-[73%] md:w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start ml-1 md:ml-[0] w-[72%] md:w-full">
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
                <div className="flex flex-row font-roboto gap-2.5 items-center justify-start mt-[53px] pb-[3px] pl-[3px] w-[59%] md:w-full">
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
                  className="flex flex-col font-roboto gap-[35px] items-center md:ml-[0] ml-[3px] mt-[33px] w-[99%]"
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
                      className="h-3 ml-[98px] mt-[3px] w-[4%]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start w-full">
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
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row font-roboto h-10 items-center justify-start mt-6 p-[11px] w-full"
                style={{ backgroundImage: "url('images/img_group18575.svg')" }}
              >
                <Img
                  className="h-4 ml-[18px] w-4"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="font-normal ml-2 text-base text-blue-A201"
                  size="textxl"
                >
                  Customer
                </Text>
                <Img
                  className="h-[7px] ml-[74px] w-[6%]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col font-roboto gap-[23px] items-start justify-start md:ml-[0] ml-[54px] mt-[15px]">
                <Text
                  className="font-normal text-base text-bluegray-400"
                  size="textxl"
                >
                  Coustomer List
                </Text>
                <Text
                  className="font-normal text-base text-blue-A201"
                  size="textxl"
                >
                  Review
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start mb-[59px] md:ml-[0] ml-[30px] mt-[23px] w-[76%] md:w-full">
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
                <div className="flex flex-row items-start justify-start mt-[33px] w-[94%] md:w-full">
                  <Img
                    className="h-4 mt-0.5 w-4"
                    src="images/img_circlehalf.svg"
                    alt="CircleHalf"
                  />
                  <Text
                    className="font-normal mb-0.5 ml-2 text-base text-bluegray-400"
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
                <div className="bg-blue-A202 flex flex-col gap-[9px] items-center justify-start mt-[195px] p-[5px] rounded-[10px] shadow-bs1 w-full">
                  <Text
                    className="font-medium mt-1.5 text-base text-white-A700"
                    size="textxl"
                  >
                    Favourite Add Menus
                  </Text>
                  <div className="flex flex-row items-start justify-between mb-[5px] w-full">
                    <Img
                      className="h-[17px] mt-[37px] w-[18px]"
                      src="images/img_cart_5.svg"
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
                      src="images/img_cart_6.svg"
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
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start">
                  <Text
                    className="font-medium sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                    size="text2xl"
                  >
                    Review
                  </Text>
                  <Text
                    className="font-normal text-base text-bluegray-400"
                    size="textxl"
                  >
                    Customer / Review
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
                <SelectBox
                  className="border border-blue-50 border-solid md:flex-1 leading-[normal] md:ml-[0] ml-[25px] sm:pl-5 pl-[23px] py-2 rounded-[15px] text-blue-A201 text-left text-xs w-[10%] md:w-full"
                  placeholderClassName="text-blue-A201"
                  indicator={
                    <Img
                      className="h-4 mr-[23px] w-2.5"
                      src="images/img_caretdown_blue_A201.svg"
                      alt="caret-down"
                    />
                  }
                  isMulti={false}
                  name="group18140"
                  options={newestOptionsList}
                  isSearchable={false}
                  placeholder="Newest"
                />
              </div>
              <div className="bg-white-A700 flex flex-col gap-[38px] items-start justify-start mt-[37px] p-[30px] sm:px-5 rounded-[15px] shadow-bs3 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1.5 w-[94%] md:w-full">
                  <CheckBox
                    className=""
                    inputClassName="mr-[5px]"
                    name="rectangle4125"
                    id="rectangle4125"
                  ></CheckBox>
                  <Text
                    className="font-medium md:ml-[0] ml-[27px] text-gray-700 text-sm"
                    size="textlg"
                  >
                    Customer Profile
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[119px] text-gray-700 text-sm"
                    size="textlg"
                  >
                    Review
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[406px] text-gray-700 text-sm"
                    size="textlg"
                  >
                    Total Spent
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[139px] text-gray-700 text-sm"
                    size="textlg"
                  >
                    Update
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-3 items-center mb-1.5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126"
                      id="rectangle4126"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_60X60.png"
                        alt="Rectangle4126 One"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Kristin Watson
                        </Text>
                        <Text
                          className="font-medium mt-[9px] text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                      size="textmd"
                    >
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet It
                      uses a dictionary of over 200 Latin words, combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[72px] w-[14%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.2
                      </Text>
                      <Img
                        className="h-4 w-[72%]"
                        src="images/img_settings_12X68.svg"
                        alt="settings Two"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[72px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126 One"
                      id="rectangle4126 One"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_9.png"
                        alt="Rectangle4126 One One"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Kristin Watson
                        </Text>
                        <Text
                          className="font-medium mt-[9px] text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                      size="textmd"
                    >
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet It
                      uses a dictionary of over 200 Latin words, combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[72px] w-[14%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.2
                      </Text>
                      <Img
                        className="h-4 w-[72%]"
                        src="images/img_settings_12X68.svg"
                        alt="settings Three"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[72px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126 Two"
                      id="rectangle4126 Two"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_10.png"
                        alt="Rectangle4126 One Two"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Ralph Edwards
                        </Text>
                        <Text
                          className="font-medium mt-[9px] text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[36%] sm:w-full"
                      size="textmd"
                    >
                      Generators on the Internet tend to repeat predefined
                      necessary, making this the first true generator on the
                      Internet It uses a dictionary of over 200 Latin words,
                      combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[74px] w-[13%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.3
                      </Text>
                      <Img
                        className="h-4 w-[73%]"
                        src="images/img_settings_12X68.svg"
                        alt="settings Four"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[74px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126 Three"
                      id="rectangle4126 Three"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_11.png"
                        alt="Rectangle4126 One Three"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Darrell Steward
                        </Text>
                        <Text
                          className="font-medium mt-2 text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                      size="textmd"
                    >
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet It uses a dictionary
                      of over 200 Latin words, combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[67px] w-[14%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.7
                      </Text>
                      <Img
                        className="h-4 w-[70%]"
                        src="images/img_settings_12X68.svg"
                        alt="settings Five"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[67px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126 Four"
                      id="rectangle4126 Four"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_12.png"
                        alt="Rectangle4126 One Four"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Jenny Wilson
                        </Text>
                        <Text
                          className="font-medium mt-2 text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[35%] sm:w-full"
                      size="textmd"
                    >
                      Repeat predefined chunks as necessary, making this the
                      first true generator on the Internet It uses a dictionary
                      of over 200 Latin words, combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[85px] w-[12%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.3{" "}
                      </Text>
                      <Img
                        className="h-4 w-4/5"
                        src="images/img_settings_12X68.svg"
                        alt="settings Six"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[85px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-blue-50 w-full" />
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <CheckBox
                      className=""
                      inputClassName="mr-[5px]"
                      name="rectangle4126 Five"
                      id="rectangle4126 Five"
                    ></CheckBox>
                    <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[27px] w-1/5 md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-sm w-[60px]"
                        src="images/img_rectangle4126_13.png"
                        alt="Rectangle4126 One Five"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-gray-700 text-sm"
                          size="textlg"
                        >
                          Robert Fox
                        </Text>
                        <Text
                          className="font-medium mt-[9px] text-blue-A201 text-xs"
                          size="textmd"
                        >
                          #C01256
                        </Text>
                        <Text
                          className="font-normal mt-3.5 text-bluegray-400 text-xs"
                          size="textmd"
                        >
                          21 June 2020, 12:42 AM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:flex-1 font-normal leading-[22.00px] md:ml-[0] ml-[22px] text-gray-700_a2 text-xs w-[37%] sm:w-full"
                      size="textmd"
                    >
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet It uses a dictionary
                      of over 200 Latin words, combined with!
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[67px] w-[14%] md:w-full">
                      <Text
                        className="font-bold text-gray-700 text-xl"
                        as="h5"
                        size="headinglg"
                      >
                        4.5{" "}
                      </Text>
                      <Img
                        className="h-4 w-[70%]"
                        src="images/img_settings_12X68.svg"
                        alt="settings Seven"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[67px] text-blue-A201 text-sm"
                      size="textlg"
                    >
                      Delete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[29px] text-green-500 text-sm"
                      size="textlg"
                    >
                      Publish
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[30px] w-full">
                <Text
                  className="font-medium text-gray-700 text-sm"
                  size="textlg"
                >
                  Dispalying 10 Out of 250
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[827px] text-gray-700 text-sm"
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

export default ReviewPage;
