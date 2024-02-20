import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TableIdPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex font-salsa mx-auto pb-[5px] relative w-full">
        <div className="flex flex-col md:hidden items-center justify-start my-auto md:px-5 w-[18%]">
          <div className="h-[1019px] relative w-full">
            <Img
              className="absolute h-[1019px] inset-[0] justify-center m-auto object-cover shadow-bs w-full"
              src="images/img_rectangle8_1019X250.png"
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
                style={{ backgroundImage: "url('images/img_group18575.svg')" }}
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
                  className="font-normal text-base text-bluegray-400"
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
                  className="font-normal text-base text-blue-A201"
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
                      src="images/img_cart_17.svg"
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
                      src="images/img_cart_18.svg"
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
        <div className="bg-white-A700 flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start ml-[-1px] p-[15px] md:px-5 shadow-bs2 w-[83%] z-[1]">
          <Input
            name="Search"
            placeholder="Search here"
            value={searchvalue}
            onChange={(e) => setSearchvalue(e)}
            className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pl-5 text-bluegray-400 text-left text-xs w-full"
            wrapClassName="bg-gray-50 border border-gray-50 border-solid flex mb-2 md:ml-[0] ml-[7px] md:mt-0 mt-0.5 pl-6 py-2.5 rounded-[17.5px] w-[29%] md:w-full"
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
          <div className="bg-gray-50 md:h-6 h-[35px] mb-2 md:ml-[0] ml-[643px] md:mt-0 mt-0.5 relative rounded-[50%] w-[35px]">
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
          <div className="bg-gray-50 flex flex-col h-[35px] items-center justify-start mb-2 ml-6 md:ml-[0] md:mt-0 mt-0.5 rounded-[50%] w-[35px]">
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
            className="h-10 md:h-auto mb-[5px] md:ml-[0] ml-[25px] rounded-[50%] w-10"
            src="images/img_ellipse1.png"
            alt="EllipseOne"
          />
        </div>
        <div className="flex flex-col font-roboto items-start justify-start mb-[55px] ml-[undefinedpx] mr-10 mt-auto md:px-5 w-[78%] z-[1]">
          <Text
            className="font-medium sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
            size="text2xl"
          >
            Table ID
          </Text>
          <Text
            className="font-normal mt-2 text-base text-bluegray-400"
            size="textxl"
          >
            Table List /Table ID
          </Text>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[54px] w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-5 items-center justify-center p-3 rounded-[10px] shadow-bs3 w-[66%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-2.5 w-[98%] md:w-full">
                <Text
                  className="font-medium text-base text-gray-700"
                  size="textxl"
                >
                  Current Booking
                </Text>
                <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between mt-4 w-full">
                  <Button className="bg-blue-A201 flex h-[60px] items-center justify-center p-4 rounded-[50%] w-[60px]">
                    <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <Text
                      className="font-medium text-base text-blue-A201"
                      size="textxl"
                    >
                      Booking ID #01236556
                    </Text>
                    <Text
                      className="font-normal text-base text-gray-700"
                      size="textxl"
                    >
                      Queen Table
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="font-medium text-base text-gray-700"
                      size="textxl"
                    >
                      Table Capacity
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] text-base text-gray-700"
                      size="textxl"
                    >
                      3-5 Person
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="font-medium text-gray-700 text-sm"
                      size="textlg"
                    >
                      Table Type
                    </Text>
                    <Text
                      className="font-normal text-base text-gray-700"
                      size="textxl"
                    >
                      Spcial table
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <Text
                      className="font-medium text-base text-gray-700"
                      size="textxl"
                    >
                      Date Book
                    </Text>
                    <Text
                      className="font-normal text-base text-gray-700"
                      size="textxl"
                    >
                      2 Oct - 28 oct{" "}
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium mt-[29px] text-base text-gray-700"
                  size="textxl"
                >
                  Table Facilitics
                </Text>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00]"
                ref={sliderRef}
                className="mb-[18px] w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mx-2.5">
                      <Img
                        className="h-[134px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle4146.png"
                        alt="Rectangle4146"
                      />
                      <Img
                        className="h-[134px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle4147.png"
                        alt="Rectangle4147"
                      />
                      <Img
                        className="h-[134px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle4148.png"
                        alt="Rectangle4148"
                      />
                      <Img
                        className="h-[134px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle4149.png"
                        alt="Rectangle4149"
                      />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-center p-5 rounded-[15px] shadow-bs3 w-[32%] md:w-full">
              <Img
                className="h-[120px] md:h-auto mt-1.5 rounded-[50%] w-[120px]"
                src="images/img_ellipse48_120X120.png"
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
              <div className="flex flex-col gap-[15px] items-start justify-start mb-[5px] mt-[15px] w-full">
                <div className="flex flex-row items-start justify-start w-full">
                  <Button className="bg-blue-A201 flex h-[35px] items-center justify-center p-[9px] rounded-[50%] w-[35px]">
                    <Img
                      src="images/img_search_white_A700.svg"
                      alt="search One"
                    />
                  </Button>
                  <Text
                    className="sm:flex-1 font-medium ml-[15px] mt-1 text-bluegray-400 text-sm w-[49%] sm:w-full"
                    size="textlg"
                  >
                    Parker Rd. 12Allentown, New
                  </Text>
                  <Text
                    className="font-medium ml-[62px] mt-2.5 text-bluegray-400 text-xs"
                    size="textmd"
                  >
                    02 Items
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[59%] md:w-full">
                  <Button className="bg-blue-A201 flex h-[35px] items-center justify-center p-2.5 rounded-[50%] w-[35px]">
                    <Img
                      className="h-3.5"
                      src="images/img_vector_white_A700.svg"
                      alt="Vector One"
                    />
                  </Button>
                  <Text
                    className="font-medium text-bluegray-400 text-sm"
                    size="textlg"
                  >
                    +99 01 2365 5698 23
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[26px] justify-start mt-[35px] p-4 rounded-[15px] shadow-bs3 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 md:ml-[0] mt-3.5 w-[86%] md:w-full">
              <Text
                className="font-medium md:mt-0 mt-[3px] text-gray-700 text-sm"
                size="textlg"
              >
                Items
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[187px] text-gray-700 text-sm"
                size="textlg"
              >
                Table Type
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[114px] text-gray-700 text-sm"
                size="textlg"
              >
                Table Capacity
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[101px] text-gray-700 text-sm"
                size="textlg"
              >
                Table Faciliticstal{" "}
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[145px] text-gray-700 text-sm"
                size="textlg"
              >
                Book Date
              </Text>
            </div>
            <List
              className="flex flex-col gap-3 items-center mb-3.5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle4150.png"
                  alt="Rectangle4150"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-3 md:ml-[0]">
                  <Text
                    className="font-medium text-gray-700 text-sm"
                    size="textlg"
                  >
                    Sweet 05641
                  </Text>
                  <Text
                    className="font-medium text-blue-A201 text-xs"
                    size="textmd"
                  >
                    #45612
                  </Text>
                </div>
                <Text
                  className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                  size="textlg"
                >
                  Special Table
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[98px] text-gray-700 text-sm"
                  size="textlg"
                >
                  3-5 Person
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[125px] text-gray-700 text-sm"
                  size="textlg"
                >
                  Ac, Double Table, Wifi
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[119px] text-gray-700 text-sm"
                  size="textlg"
                >
                  2 Oct - 28 oct{" "}
                </Text>
                <Img
                  className="h-1 md:ml-[0] ml-[110px] w-[2%]"
                  src="images/img_group18181.svg"
                  alt="Group18181"
                />
              </div>
              <Line className="self-center h-px bg-blue-50 w-full" />
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle4151.png"
                  alt="Rectangle4151"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-3 md:ml-[0]">
                  <Text
                    className="font-medium text-gray-700 text-sm"
                    size="textlg"
                  >
                    Sweet 05641
                  </Text>
                  <Text
                    className="font-medium text-blue-A201 text-xs"
                    size="textmd"
                  >
                    #45612
                  </Text>
                </div>
                <Text
                  className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                  size="textlg"
                >
                  Double Table
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[100px] text-gray-700 text-sm"
                  size="textlg"
                >
                  3-5 Person
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[125px] text-gray-700 text-sm"
                  size="textlg"
                >
                  Ac, Double Table, Wifi
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[126px] text-gray-700 text-sm"
                  size="textlg"
                >
                  3 Oct - 28 oct{" "}
                </Text>
                <Img
                  className="h-1 md:ml-[0] ml-[110px] w-[2%]"
                  src="images/img_group18181.svg"
                  alt="Group18181 One"
                />
              </div>
              <Line className="self-center h-px bg-blue-50 w-full" />
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle4152.png"
                  alt="Rectangle4152"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-3 md:ml-[0]">
                  <Text
                    className="font-medium text-gray-700 text-sm"
                    size="textlg"
                  >
                    Sweet 05641
                  </Text>
                  <Text
                    className="font-medium text-blue-A201 text-xs"
                    size="textmd"
                  >
                    #45612
                  </Text>
                </div>
                <Text
                  className="font-medium ml-3 md:ml-[0] text-gray-700 text-sm"
                  size="textlg"
                >
                  Single Table
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[105px] text-gray-700 text-sm"
                  size="textlg"
                >
                  1-2 Person
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[125px] text-gray-700 text-sm"
                  size="textlg"
                >
                  Ac, Double Table, Wifi
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[119px] text-gray-700 text-sm"
                  size="textlg"
                >
                  4 Oct - 28 oct{" "}
                </Text>
                <Img
                  className="h-1 md:ml-[0] ml-[110px] w-[2%]"
                  src="images/img_group18181.svg"
                  alt="Group18181 Two"
                />
              </div>
            </List>
          </div>
          <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[30px] w-full">
            <Text
              className="font-medium sm:mt-0 mt-2.5 text-gray-700 text-sm"
              size="textlg"
            >
              Dispalying 10 Out of 250
            </Text>
            <Text
              className="font-medium sm:ml-[0] ml-[822px] sm:mt-0 mt-[9px] text-gray-700 text-sm"
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
    </>
  );
};

export default TableIdPage;
