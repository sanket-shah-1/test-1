import '../../core/app_export.dart';class AppNavigationScreen extends StatelessWidget {const AppNavigationScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: Color(0XFFFFFFFF), body: SizedBox(width: double.maxFinite, child: Column(children: [_buildAppNavigation(context), Expanded(child: SingleChildScrollView(child: Container(decoration: BoxDecoration(color: Color(0XFFFFFFFF)), child: Column(children: [_buildScreenTitle(context, screenTitle: "Flash Screen", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.flashScreen)), _buildScreenTitle(context, screenTitle: "Onboarding", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.onboardingScreen)), _buildScreenTitle(context, screenTitle: "Onboarding One", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.onboardingOneScreen)), _buildScreenTitle(context, screenTitle: "Onboarding Two", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.onboardingTwoScreen)), _buildScreenTitle(context, screenTitle: "Login", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.loginScreen)), _buildScreenTitle(context, screenTitle: "Login with", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.loginWithScreen)), _buildScreenTitle(context, screenTitle: "SignUp", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.signupScreen)), _buildScreenTitle(context, screenTitle: "SignUp One", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.signupOneScreen)), _buildScreenTitle(context, screenTitle: "Login One", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.loginOneScreen)), _buildScreenTitle(context, screenTitle: "choose", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.chooseScreen)), _buildScreenTitle(context, screenTitle: "Living room", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.livingRoomScreen)), _buildScreenTitle(context, screenTitle: "Kitchen room", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.kitchenRoomScreen)), _buildScreenTitle(context, screenTitle: "Home", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.homeScreen)), _buildScreenTitle(context, screenTitle: "Roomsview all", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.roomsviewAllScreen)), _buildScreenTitle(context, screenTitle: "Temperatur", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.temperaturScreen)), _buildScreenTitle(context, screenTitle: "TV", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.tvScreen)), _buildScreenTitle(context, screenTitle: "Light", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.lightScreen)), _buildScreenTitle(context, screenTitle: "Window - Tab Container", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.windowTabContainerScreen)), _buildScreenTitle(context, screenTitle: "Music", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.musicScreen)), _buildScreenTitle(context, screenTitle: "Playlist music", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.playlistMusicScreen)), _buildScreenTitle(context, screenTitle: "Analys - Container", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.analysContainerScreen)), _buildScreenTitle(context, screenTitle: "Connect ", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.connectScreen)), _buildScreenTitle(context, screenTitle: "Connecting", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.connectingScreen)), _buildScreenTitle(context, screenTitle: "Connected", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.connectedScreen)), _buildScreenTitle(context, screenTitle: "History", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.historyScreen)), _buildScreenTitle(context, screenTitle: "Profile", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.profileScreen)), _buildScreenTitle(context, screenTitle: "Family access", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.familyAccessScreen)), _buildScreenTitle(context, screenTitle: "Personal info", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.personalInfoScreen)), _buildScreenTitle(context, screenTitle: "iPhone 11 Pro / X - FortyTwo", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.iphone11ProXFortytwoScreen)), _buildScreenTitle(context, screenTitle: "Login page", onTapScreenTitle: () => onTapScreenTitle(context, AppRoutes.loginPageScreen))]))))])))); } 
/// Section Widget
Widget _buildAppNavigation(BuildContext context) { return Container(decoration: BoxDecoration(color: Color(0XFFFFFFFF)), child: Column(children: [SizedBox(height: 10.v), Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.symmetric(horizontal: 20.h), child: Text("App Navigation", textAlign: TextAlign.center, style: TextStyle(color: Color(0XFF000000), fontSize: 20.fSize, fontFamily: 'Roboto', fontWeight: FontWeight.w400)))), SizedBox(height: 10.v), Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(left: 20.h), child: Text("Check your app's UI from the below demo screens of your app.", textAlign: TextAlign.center, style: TextStyle(color: Color(0XFF888888), fontSize: 16.fSize, fontFamily: 'Roboto', fontWeight: FontWeight.w400)))), SizedBox(height: 5.v), Divider(height: 1.v, thickness: 1.v, color: Color(0XFF000000))])); } 
/// Common widget
Widget _buildScreenTitle(BuildContext context, {required String screenTitle, Function? onTapScreenTitle, }) { return GestureDetector(onTap: () {onTapScreenTitle!.call();}, child: Container(decoration: BoxDecoration(color: Color(0XFFFFFFFF)), child: Column(children: [SizedBox(height: 10.v), Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.symmetric(horizontal: 20.h), child: Text(screenTitle, textAlign: TextAlign.center, style: TextStyle(color: Color(0XFF000000), fontSize: 20.fSize, fontFamily: 'Roboto', fontWeight: FontWeight.w400)))), SizedBox(height: 10.v), SizedBox(height: 5.v), Divider(height: 1.v, thickness: 1.v, color: Color(0XFF888888))]))); } 
/// Common click event
void onTapScreenTitle(BuildContext context, String routeName, ) { Navigator.pushNamed(context, routeName); } 
 }
