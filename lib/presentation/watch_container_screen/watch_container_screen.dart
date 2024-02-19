import '../../core/app_export.dart';import '../../widgets/custom_bottom_bar.dart';import '../watch_page/watch_page.dart';
// ignore_for_file: must_be_immutable
class WatchContainerScreen extends StatelessWidget {WatchContainerScreen({Key? key}) : super(key: key);

GlobalKey<NavigatorState> navigatorKey = GlobalKey();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Navigator(key: navigatorKey, initialRoute: AppRoutes.watchPage, onGenerateRoute: (routeSetting) => PageRouteBuilder(pageBuilder: (ctx, ani, ani1) => getCurrentPage(routeSetting.name!), transitionDuration: Duration(seconds: 0))), bottomNavigationBar: _buildBottomBar(context))); } 
/// Section Widget
Widget _buildBottomBar(BuildContext context) { return CustomBottomBar(onChanged: (BottomBarEnum type) {Navigator.pushNamed(navigatorKey.currentContext!, getCurrentRoute(type));}); } 
///Handling route based on bottom click actions
String getCurrentRoute(BottomBarEnum type) { switch (type) {case BottomBarEnum.Applewatchultra: return AppRoutes.watchPage; case BottomBarEnum.Applewatchseries2: return "/"; case BottomBarEnum.Applewatchse: return "/"; default: return "/";} } 
///Handling page based on route
Widget getCurrentPage(String currentRoute) { switch (currentRoute) {case AppRoutes.watchPage: return WatchPage(); default: return DefaultWidget();} } 
 }
