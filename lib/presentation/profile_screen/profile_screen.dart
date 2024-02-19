import '../../core/app_export.dart';class ProfileScreen extends StatelessWidget {const ProfileScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 35.v), child: Column(children: [SizedBox(height: 34.v), Opacity(opacity: 0.8, child: Text("My Profile", style: theme.textTheme.headlineSmall)), SizedBox(height: 48.v), CustomImageView(imagePath: ImageConstant.imgRectangle6489x89, height: 89.adaptSize, width: 89.adaptSize, radius: BorderRadius.circular(16.h)), SizedBox(height: 70.v), _buildUserRow(context), SizedBox(height: 20.v), _buildUserTwelveRow(context), SizedBox(height: 20.v), _buildAccessRightsRow(context, userImage: ImageConstant.imgShield1, accessRights: "Security"), SizedBox(height: 20.v), _buildAccessRightsRow(context, userImage: ImageConstant.imgGroup23x20, accessRights: "Acces Rights")])), bottomNavigationBar: _buildHomeRow(context))); } 
/// Section Widget
Widget _buildUserRow(BuildContext context) { return Row(mainAxisAlignment: MainAxisAlignment.center, children: [Expanded(child: Container(padding: EdgeInsets.symmetric(horizontal: 20.h, vertical: 19.v), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder16), child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [SizedBox(height: 5.v), SizedBox(width: 188.h, child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [CustomImageView(imagePath: ImageConstant.imgUserWhiteA700, height: 18.adaptSize, width: 18.adaptSize), CustomImageView(imagePath: ImageConstant.imgSettings, height: 16.adaptSize, width: 16.adaptSize)])), SizedBox(height: 42.v), Text("My Family Access", style: theme.textTheme.labelLarge)]))), Container(height: 123.v, width: 63.h, margin: EdgeInsets.only(left: 19.h), padding: EdgeInsets.symmetric(horizontal: 23.h, vertical: 53.v), decoration: AppDecoration.outlineGray900.copyWith(borderRadius: BorderRadiusStyle.roundedBorder16), child: Opacity(opacity: 0.3, child: CustomImageView(imagePath: ImageConstant.imgCloseGray900, height: 14.adaptSize, width: 14.adaptSize, alignment: Alignment.bottomRight)))]); } 
/// Section Widget
Widget _buildUserTwelveRow(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 28.h, vertical: 26.v), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [CustomImageView(imagePath: ImageConstant.imgUser12, height: 18.adaptSize, width: 18.adaptSize), Opacity(opacity: 0.8, child: Padding(padding: EdgeInsets.only(left: 22.h), child: Text("Personal Info", style: CustomTextStyles.labelLargeGray900Medium_1))), Spacer(), CustomImageView(imagePath: ImageConstant.imgArrowRightGray90014x14, height: 14.adaptSize, width: 14.adaptSize, margin: EdgeInsets.symmetric(vertical: 2.v))])); } 
/// Section Widget
Widget _buildHomeRow(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 32.h, right: 35.h, bottom: 20.v), child: Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.end, children: [Opacity(opacity: 0.1, child: CustomImageView(imagePath: ImageConstant.imgHome, height: 20.adaptSize, width: 20.adaptSize, margin: EdgeInsets.only(top: 14.v, bottom: 11.v))), Spacer(flex: 28), Opacity(opacity: 0.1, child: CustomImageView(imagePath: ImageConstant.imgInfo, height: 20.adaptSize, width: 20.adaptSize, margin: EdgeInsets.only(top: 14.v, bottom: 11.v))), Spacer(flex: 20), IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 45.adaptSize, minWidth: 45.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 45.adaptSize, height: 45.adaptSize, decoration: BoxDecoration(borderRadius: BorderRadius.circular(22.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), padding: EdgeInsets.all(16.h), child: CustomImageView(imagePath: ImageConstant.imgGroup133))), Spacer(flex: 22), Opacity(opacity: 0.1, child: CustomImageView(imagePath: ImageConstant.imgClock, height: 20.adaptSize, width: 20.adaptSize, margin: EdgeInsets.only(top: 14.v, bottom: 11.v))), Spacer(flex: 28), CustomImageView(imagePath: ImageConstant.imgIconlyBoldProfile, height: 20.adaptSize, width: 20.adaptSize, margin: EdgeInsets.only(top: 14.v, bottom: 11.v))])); } 
/// Common widget
Widget _buildAccessRightsRow(BuildContext context, {required String userImage, required String accessRights, }) { return Container(padding: EdgeInsets.symmetric(horizontal: 28.h, vertical: 24.v), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [CustomImageView(imagePath: userImage, height: 23.v, width: 20.h), Opacity(opacity: 0.8, child: Padding(padding: EdgeInsets.only(left: 20.h, top: 4.v), child: Text(accessRights, style: CustomTextStyles.labelLargeGray900Medium_1.copyWith(color: appTheme.gray900.withOpacity(0.64))))), Spacer(), CustomImageView(imagePath: ImageConstant.imgArrowRightGray90014x14, height: 14.adaptSize, width: 14.adaptSize, margin: EdgeInsets.symmetric(vertical: 5.v))])); } 
 }
