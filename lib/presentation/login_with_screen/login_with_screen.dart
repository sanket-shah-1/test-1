import '../../core/app_export.dart';class LoginWithScreen extends StatelessWidget {const LoginWithScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 58.v), child: Column(children: [Spacer(flex: 70), Text("Smart App", style: CustomTextStyles.headlineSmallGray900), SizedBox(height: 23.v), Opacity(opacity: 0.8, child: SizedBox(width: 216.h, child: Text("Say hello to your new technological companion", maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.titleMediumBold.copyWith(height: 1.63)))), SizedBox(height: 7.v), Opacity(opacity: 0.6, child: Container(width: 254.h, margin: EdgeInsets.only(left: 25.h, right: 31.h), child: Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.labelLargeGray900Bold.copyWith(height: 1.83)))), Spacer(flex: 29), SizedBox(width: 311.h, height: 60.v, child: OutlinedButton(style: OutlinedButton.styleFrom(side: BorderSide(color: appTheme.gray900, width: 1.0), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 18.v)), onPressed: () {}, child: Text("Login with google", style: CustomTextStyles.titleMediumBold))), SizedBox(height: 10.v), GestureDetector(onTap: () {onTapBtnLoginWithApple(context);}, child: Container(padding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 18.v), width: 311.h, decoration: BoxDecoration(borderRadius: BorderRadius.circular(14.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), child: Text("Login with Apple", style: CustomTextStyles.titleMediumWhiteA700)))])))); } 
/// Navigates to the tvScreen when the action is triggered.
onTapBtnLoginWithApple(BuildContext context) { Navigator.pushNamed(context, AppRoutes.tvScreen); } 
 }
