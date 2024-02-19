import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_subtitle_one.dart';import '../../widgets/app_bar/custom_app_bar.dart';class AnalysPage extends StatelessWidget {const AnalysPage({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: SizedBox(width: double.maxFinite, child: Column(children: [SizedBox(height: 36.v), _buildJanuaryRow(context), SizedBox(height: 30.v), Align(alignment: Alignment.centerLeft, child: Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(left: 32.h), child: Text("40", style: theme.textTheme.bodySmall)))), SizedBox(height: 3.v), Opacity(opacity: 0.1, child: Divider(height: 1.v, thickness: 1.v, color: appTheme.gray900.withOpacity(0.39))), SizedBox(height: 4.v), Align(alignment: Alignment.centerLeft, child: Container(height: 3.adaptSize, width: 3.adaptSize, margin: EdgeInsets.only(left: 140.h), decoration: BoxDecoration(borderRadius: BorderRadius.circular(1.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])))), SizedBox(height: 15.v), _buildVectorThreeStack(context), Opacity(opacity: 0.1, child: Divider(height: 1.v, thickness: 1.v, color: appTheme.gray900.withOpacity(0.39))), SizedBox(height: 12.v), Align(alignment: Alignment.centerRight, child: Padding(padding: EdgeInsets.only(left: 79.h, right: 50.h), child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [Opacity(opacity: 0.6, child: Text("24", style: CustomTextStyles.bodySmallGray900_1)), Spacer(flex: 33), Opacity(opacity: 0.6, child: Text("25", style: CustomTextStyles.bodySmallGray900_1)), Spacer(flex: 33), Opacity(opacity: 0.6, child: Text("26", style: CustomTextStyles.bodySmallGray900_1)), Spacer(flex: 33), Opacity(opacity: 0.6, child: Text("27", style: CustomTextStyles.bodySmallGray900_1))]))), SizedBox(height: 40.v), Padding(padding: EdgeInsets.only(left: 32.h, right: 35.h), child: _buildFiftySeven(context, airConditioner: ImageConstant.imgLamp1, aC: "Lamp", thirtyFour: "54%")), SizedBox(height: 20.v), Padding(padding: EdgeInsets.only(left: 32.h, right: 35.h), child: _buildFiftySeven(context, airConditioner: ImageConstant.imgAirConditioner, aC: "AC", thirtyFour: "34%")), SizedBox(height: 20.v), _buildView(context)])))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitleOne(text: "Analys", margin: EdgeInsets.fromLTRB(32.h, 17.v, 32.h, 11.v))]); } 
/// Section Widget
Widget _buildJanuaryRow(BuildContext context) { return Padding(padding: EdgeInsets.symmetric(horizontal: 32.h), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [SizedBox(width: 92.h, height: 34.v, child: ElevatedButton(style: ElevatedButton.styleFrom(backgroundColor: appTheme.gray50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.symmetric(horizontal: 21.h, vertical: 8.v)), onPressed: () {}, child: Text("January", style: CustomTextStyles.bodySmallGray900))), SizedBox(width: 92.h, height: 34.v, child: OutlinedButton(style: OutlinedButton.styleFrom(side: BorderSide(color: appTheme.gray900, width: 1.0), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.symmetric(horizontal: 23.h, vertical: 8.v)), onPressed: () {}, child: Text("Kitchen", style: CustomTextStyles.bodySmallGray90012_1)))])); } 
/// Section Widget
Widget _buildVectorThreeStack(BuildContext context) { return SizedBox(height: 175.v, width: double.maxFinite, child: Stack(alignment: Alignment.topCenter, children: [Opacity(opacity: 0.1, child: Align(alignment: Alignment.topCenter, child: Padding(padding: EdgeInsets.only(top: 75.v), child: SizedBox(width: double.maxFinite, child: Divider(height: 1.v, thickness: 1.v, color: appTheme.gray900.withOpacity(0.39)))))), Opacity(opacity: 0.1, child: Align(alignment: Alignment.topCenter, child: Padding(padding: EdgeInsets.only(top: 25.v), child: SizedBox(width: double.maxFinite, child: Divider(height: 1.v, thickness: 1.v, color: appTheme.gray900.withOpacity(0.39)))))), Opacity(opacity: 0.1, child: Align(alignment: Alignment.bottomCenter, child: Padding(padding: EdgeInsets.only(bottom: 49.v), child: SizedBox(width: double.maxFinite, child: Divider(height: 1.v, thickness: 1.v, color: appTheme.gray900.withOpacity(0.39)))))), CustomImageView(imagePath: ImageConstant.imgRectangle66, height: 100.v, width: 50.h, alignment: Alignment.bottomLeft, margin: EdgeInsets.only(left: 60.h)), CustomImageView(imagePath: ImageConstant.imgRectangle68, height: 127.v, width: 50.h, alignment: Alignment.bottomRight, margin: EdgeInsets.only(right: 109.h)), CustomImageView(imagePath: ImageConstant.imgRectangle66, height: 86.v, width: 50.h, alignment: Alignment.bottomRight, margin: EdgeInsets.only(right: 31.h)), CustomImageView(imagePath: ImageConstant.imgRectangle67, height: 168.v, width: 50.h, alignment: Alignment.centerLeft, margin: EdgeInsets.only(left: 138.h)), Align(alignment: Alignment.topLeft, child: Padding(padding: EdgeInsets.only(left: 125.h), child: Row(children: [Container(height: 6.adaptSize, width: 6.adaptSize, decoration: BoxDecoration(borderRadius: BorderRadius.circular(3.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary]))), Container(height: 4.adaptSize, width: 4.adaptSize, margin: EdgeInsets.only(left: 53.h, bottom: 2.v), decoration: BoxDecoration(borderRadius: BorderRadius.circular(2.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])))]))), Align(alignment: Alignment.bottomLeft, child: Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(left: 32.h, bottom: 3.v), child: Text("0", style: theme.textTheme.bodySmall)))), Align(alignment: Alignment.bottomLeft, child: Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(left: 32.h, bottom: 53.v), child: Text("10", style: theme.textTheme.bodySmall)))), Align(alignment: Alignment.topLeft, child: Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(left: 32.h, top: 56.v), child: Text("20", style: theme.textTheme.bodySmall)))), Align(alignment: Alignment.topLeft, child: Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(left: 32.h, top: 6.v), child: Text("30", style: theme.textTheme.bodySmall))))])); } 
/// Section Widget
Widget _buildView(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 32.h, right: 35.h), child: Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.05, child: Container(height: 83.adaptSize, width: 83.adaptSize, decoration: BoxDecoration(borderRadius: BorderRadius.circular(12.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002.withOpacity(0.37), theme.colorScheme.primary.withOpacity(0.37)])))), Padding(padding: EdgeInsets.only(left: 18.h, top: 18.v, bottom: 22.v), child: _buildViewColumn(context, aC: "AC", thirtyFour: "34%"))])); } 
/// Common widget
Widget _buildFiftySeven(BuildContext context, {required String airConditioner, required String aC, required String thirtyFour, }) { return Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [Container(height: 83.adaptSize, width: 83.adaptSize, padding: EdgeInsets.all(24.h), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: CustomImageView(imagePath: airConditioner, height: 34.adaptSize, width: 34.adaptSize, alignment: Alignment.center)), Padding(padding: EdgeInsets.only(left: 18.h, top: 18.v, bottom: 22.v), child: Column(children: [Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.8, child: Text(aC, style: CustomTextStyles.titleMediumMedium.copyWith(color: appTheme.gray900.withOpacity(0.64)))), Padding(padding: EdgeInsets.only(top: 2.v, bottom: 3.v), child: Text(thirtyFour, style: CustomTextStyles.labelLargeCyan30002_1.copyWith(color: appTheme.cyan30002)))]), SizedBox(height: 11.v), CustomImageView(imagePath: ImageConstant.imgGroup53, height: 7.v, width: 207.h)]))]); } 
/// Common widget
Widget _buildViewColumn(BuildContext context, {required String aC, required String thirtyFour, }) { return Column(children: [Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.2, child: Text(aC, style: CustomTextStyles.titleMediumGray900Medium.copyWith(color: appTheme.gray900.withOpacity(0.42)))), Opacity(opacity: 0.2, child: Padding(padding: EdgeInsets.only(top: 2.v, bottom: 3.v), child: Text(thirtyFour, style: CustomTextStyles.labelLargeGray900.copyWith(color: appTheme.gray900.withOpacity(0.42)))))]), SizedBox(height: 11.v), CustomImageView(imagePath: ImageConstant.imgGroup53Gray900, height: 7.v, width: 207.h)]); } 
/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
