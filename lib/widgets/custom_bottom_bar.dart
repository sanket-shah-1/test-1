import '../core/app_export.dart';enum BottomBarEnum { Applewatchultra,
Applewatchseries2,
Applewatchse }

// ignore_for_file: must_be_immutable
class CustomBottomBar extends StatefulWidget {CustomBottomBar({this.onChanged});

 Function(BottomBarEnum)? onChanged;

@override CustomBottomBarState createState() =>  CustomBottomBarState();
 }

// ignore_for_file: must_be_immutable
class CustomBottomBarState extends State<CustomBottomBar> {int selectedIndex = 0;

List<BottomMenuModel> bottomMenuList = [BottomMenuModel(icon: ImageConstant.imgNavAppleWatchUltra, activeIcon: ImageConstant.imgNavAppleWatchUltra, title: "Apple Watch\nUltra", type: BottomBarEnum.Applewatchultra), BottomMenuModel(icon: ImageConstant.imgNavAppleWatchSeries, activeIcon: ImageConstant.imgNavAppleWatchSeries, title: "Apple Watch\nSeries 8", type: BottomBarEnum.Applewatchseries2), BottomMenuModel(icon: ImageConstant.imgNavAppleWatchSe, activeIcon: ImageConstant.imgNavAppleWatchSe, title: "Apple Watch\nSE", type: BottomBarEnum.Applewatchse)];

@override Widget build(BuildContext context) { return Container(height: 124.v, decoration: BoxDecoration(color: theme.colorScheme.secondaryContainer), child: BottomNavigationBar(backgroundColor: Colors.transparent, showSelectedLabels: false, showUnselectedLabels: false, selectedFontSize: 0, elevation: 0, currentIndex: selectedIndex, type: BottomNavigationBarType.fixed, items: List.generate(bottomMenuList.length, (index) {return BottomNavigationBarItem(icon: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.center, children: [CustomImageView(imagePath: bottomMenuList[index].icon, height: 43.v, width: 25.h, color: theme.colorScheme.onErrorContainer), Container(width: 71.h, margin: EdgeInsets.only(top: 7.v), child: Text(bottomMenuList[index].title ?? "", maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: theme.textTheme.bodySmall!.copyWith(color: theme.colorScheme.onErrorContainer, height: 1.33)))]), activeIcon: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.center, children: [CustomImageView(imagePath: bottomMenuList[index].activeIcon, height: 45.v, width: 28.h, color: theme.colorScheme.onErrorContainer), Container(width: 71.h, margin: EdgeInsets.only(top: 8.v), child: Text(bottomMenuList[index].title ?? "", maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: theme.textTheme.bodySmall!.copyWith(color: theme.colorScheme.onErrorContainer, height: 1.33)))]), label: '');}), onTap: (index) {selectedIndex = index; widget.onChanged?.call(bottomMenuList[index].type); setState(() {});})); } 
 }

// ignore_for_file: must_be_immutable
class BottomMenuModel {BottomMenuModel({required this.icon, required this.activeIcon, this.title, required this.type});

String icon;

String activeIcon;

String? title;

BottomBarEnum type;

 }
class DefaultWidget extends StatelessWidget {@override Widget build(BuildContext context) { return Container(color: Color(0xffffffff), padding: EdgeInsets.all(10), child: Center(child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.center, children: [Text('Please replace the respective Widget here', style: TextStyle(fontSize: 18))]))); } 
 }
