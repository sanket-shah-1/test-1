import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_title.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'notifier/connecting_notifier.dart';class ConnectingScreen extends ConsumerStatefulWidget {const ConnectingScreen({Key? key}) : super(key: key);

@override ConnectingScreenState createState() =>  ConnectingScreenState();
 }
class ConnectingScreenState extends ConsumerState<ConnectingScreen> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(vertical: 14.v), child: Column(children: [SizedBox(height: 56.v), Opacity(opacity: 0.8, child: Text("lbl_jbl_big_stream".tr, style: CustomTextStyles.titleMediumOnPrimaryContainer16)), SizedBox(height: 5.v), SizedBox(height: 488.v, width: double.maxFinite, child: Stack(alignment: Alignment.center, children: [Align(alignment: Alignment.topCenter, child: Opacity(opacity: 0.6, child: Text("lbl_speaker".tr, style: CustomTextStyles.bodyLargeOnPrimaryContainer_1))), CustomImageView(imagePath: ImageConstant.imgImage15, height: 467.v, width: 375.h, alignment: Alignment.center), CustomImageView(imagePath: ImageConstant.imgImage16, height: 467.v, width: 375.h, alignment: Alignment.center)]))])), bottomNavigationBar: _buildConnectButton(context))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), title: AppbarTitle(text: "msg_search_to_connect".tr, margin: EdgeInsets.only(left: 85.h))); } 
/// Section Widget
Widget _buildConnectButton(BuildContext context) { return Container(width: 311.h, height: 60.v, margin: EdgeInsets.only(left: 32.h, right: 32.h, bottom: 40.v), decoration: BoxDecoration(borderRadius: BorderRadius.circular(14.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), child: ElevatedButton(style: ElevatedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide.none, shape: RoundedRectangleBorder(borderRadius: BorderRadius.zero), padding: EdgeInsets.zero, elevation: 0), onPressed: () {}, child: Text("lbl_connect".tr, style: CustomTextStyles.titleMediumWhiteA70016))); } 
/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
