import '../core/app_export.dart';enum BottomBarEnum { Home,
Iconlyboldchart,
Group133,
Clock,
User }

// ignore_for_file: must_be_immutable
class CustomBottomBar extends StatefulWidget {CustomBottomBar({this.onChanged});

 Function(BottomBarEnum)? onChanged;

@override CustomBottomBarState createState() =>  CustomBottomBarState();
 }

// ignore_for_file: must_be_immutable
class CustomBottomBarState extends State<CustomBottomBar> {int selectedIndex = 0;

List<BottomMenuModel> bottomMenuList = [BottomMenuModel(icon: ImageConstant.imgHome, activeIcon: ImageConstant.imgHome, type: BottomBarEnum.Home), BottomMenuModel(icon: ImageConstant.imgIconlyBoldChart, activeIcon: ImageConstant.imgIconlyBoldChart, type: BottomBarEnum.Iconlyboldchart), BottomMenuModel(icon: ImageConstant.imgGroup133, activeIcon: ImageConstant.imgGroup133, type: BottomBarEnum.Group133), BottomMenuModel(icon: ImageConstant.imgClock, activeIcon: ImageConstant.imgClock, type: BottomBarEnum.Clock), BottomMenuModel(icon: ImageConstant.imgUser, activeIcon: ImageConstant.imgUser, type: BottomBarEnum.User)];

@override Widget build(BuildContext context) { return Container(height: 106.v, decoration: BoxDecoration(color: appTheme.whiteA700), child: BottomNavigationBar(backgroundColor: Colors.transparent, showSelectedLabels: false, showUnselectedLabels: false, selectedFontSize: 0, elevation: 0, currentIndex: selectedIndex, type: BottomNavigationBarType.fixed, items: List.generate(bottomMenuList.length, (index) {return BottomNavigationBarItem(icon: Opacity(opacity: 0.1, child: CustomImageView(imagePath: bottomMenuList[index].icon, height: 20.adaptSize, width: 20.adaptSize, color: appTheme.gray900)), activeIcon: Container(decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder24), child: CustomImageView(imagePath: bottomMenuList[index].activeIcon, height: 11.v, width: 10.h, margin: EdgeInsets.symmetric(vertical: 17.v))), label: '');}), onTap: (index) {selectedIndex = index; widget.onChanged?.call(bottomMenuList[index].type); setState(() {});})); } 
 }

// ignore_for_file: must_be_immutable
class BottomMenuModel {BottomMenuModel({required this.icon, required this.activeIcon, required this.type});

String icon;

String activeIcon;

BottomBarEnum type;

 }
class DefaultWidget extends StatelessWidget {@override Widget build(BuildContext context) { return Container(color: Color(0xffffffff), padding: EdgeInsets.all(10), child: Center(child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.center, children: [Text('Please replace the respective Widget here', style: TextStyle(fontSize: 18))]))); } 
 }
