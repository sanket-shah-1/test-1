import '../../core/app_export.dart';import '../../widgets/custom_bottom_bar.dart';import '../analys_page/analys_page.dart';import 'models/analys_container_model.dart';import 'provider/analys_container_provider.dart';class AnalysContainerScreen extends StatefulWidget {const AnalysContainerScreen({Key? key}) : super(key: key);

@override AnalysContainerScreenState createState() =>  AnalysContainerScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => AnalysContainerProvider(), child: AnalysContainerScreen()); } 
 }

// ignore_for_file: must_be_immutable
class AnalysContainerScreenState extends State<AnalysContainerScreen> {GlobalKey<NavigatorState> navigatorKey = GlobalKey();

@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Navigator(key: navigatorKey, initialRoute: AppRoutes.analysPage, onGenerateRoute: (routeSetting) => PageRouteBuilder(pageBuilder: (ctx, ani, ani1) => getCurrentPage(context, routeSetting.name!), transitionDuration: Duration(seconds: 0))), bottomNavigationBar: _buildBottomBar(context))); } 
/// Section Widget
Widget _buildBottomBar(BuildContext context) { return CustomBottomBar(onChanged: (BottomBarEnum type) {Navigator.pushNamed(navigatorKey.currentContext!, getCurrentRoute(type));}); } 
///Handling route based on bottom click actions
String getCurrentRoute(BottomBarEnum type) { switch (type) {case BottomBarEnum.Home: return "/"; case BottomBarEnum.Iconlyboldchart: return "/"; case BottomBarEnum.Group133: return AppRoutes.analysPage; case BottomBarEnum.Clock: return "/"; case BottomBarEnum.User: return "/"; default: return "/";} } 
///Handling page based on route
Widget getCurrentPage(BuildContext context, String currentRoute, ) { switch (currentRoute) {case AppRoutes.analysPage: return AnalysPage.builder(context); default: return DefaultWidget();} } 
 }
