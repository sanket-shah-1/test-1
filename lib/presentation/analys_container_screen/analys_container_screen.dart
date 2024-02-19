import '../../core/app_export.dart';import '../../widgets/custom_bottom_bar.dart';import '../analys_page/analys_page.dart';import 'notifier/analys_container_notifier.dart';class AnalysContainerScreen extends ConsumerStatefulWidget {const AnalysContainerScreen({Key? key}) : super(key: key);

@override AnalysContainerScreenState createState() =>  AnalysContainerScreenState();
 }

// ignore_for_file: must_be_immutable
class AnalysContainerScreenState extends ConsumerState<AnalysContainerScreen> {GlobalKey<NavigatorState> navigatorKey = GlobalKey();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Navigator(key: navigatorKey, initialRoute: AppRoutes.analysPage, onGenerateRoute: (routeSetting) => PageRouteBuilder(pageBuilder: (ctx, ani, ani1) => getCurrentPage(context, routeSetting.name!), transitionDuration: Duration(seconds: 0))), bottomNavigationBar: _buildBottomBar(context))); } 
/// Section Widget
Widget _buildBottomBar(BuildContext context) { return CustomBottomBar(onChanged: (BottomBarEnum type) {Navigator.pushNamed(navigatorKey.currentContext!, getCurrentRoute(type));}); } 
///Handling route based on bottom click actions
String getCurrentRoute(BottomBarEnum type) { switch (type) {case BottomBarEnum.Home: return "/"; case BottomBarEnum.Iconlyboldchart: return "/"; case BottomBarEnum.Group133: return AppRoutes.analysPage; case BottomBarEnum.Clock: return "/"; case BottomBarEnum.User: return "/"; default: return "/";} } 
///Handling page based on route
Widget getCurrentPage(BuildContext context, String currentRoute, ) { switch (currentRoute) {case AppRoutes.analysPage: return AnalysPage(); default: return DefaultWidget();} } 
 }
