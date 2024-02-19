import 'package:sanket_s_application1/presentation/analys_page/analys_page.dart';import 'package:sanket_s_application1/widgets/custom_bottom_bar.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';
// ignore_for_file: must_be_immutable
class AnalysContainerScreen extends StatelessWidget {AnalysContainerScreen({Key? key}) : super(key: key);

GlobalKey<NavigatorState> navigatorKey = GlobalKey();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Navigator(key: navigatorKey, initialRoute: AppRoutes.analysPage, onGenerateRoute: (routeSetting) => PageRouteBuilder(pageBuilder: (ctx, ani, ani1) => getCurrentPage(routeSetting.name!), transitionDuration: Duration(seconds: 0))), bottomNavigationBar: _buildBottomBar(context))); } 
/// Section Widget
Widget _buildBottomBar(BuildContext context) { return CustomBottomBar(onChanged: (BottomBarEnum type) {Navigator.pushNamed(navigatorKey.currentContext!, getCurrentRoute(type));}); } 
///Handling route based on bottom click actions
String getCurrentRoute(BottomBarEnum type) { switch (type) {case BottomBarEnum.Home: return "/"; case BottomBarEnum.Iconlyboldchart: return "/"; case BottomBarEnum.Group137: return AppRoutes.analysPage; case BottomBarEnum.Clock: return "/"; case BottomBarEnum.User: return "/"; default: return "/";} } 
///Handling page based on route
Widget getCurrentPage(String currentRoute) { switch (currentRoute) {case AppRoutes.analysPage: return AnalysPage(); default: return DefaultWidget();} } 
 }
