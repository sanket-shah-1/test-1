import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_title.dart';import '../../widgets/app_bar/custom_app_bar.dart';
// ignore_for_file: must_be_immutable
class ConnectedScreen extends StatelessWidget {ConnectedScreen({Key? key}) : super(key: key);

bool finishedCanBeUsed = false;

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 25.h, vertical: 57.v), child: Column(children: [SizedBox(height: 19.v), _buildFinishedCanBeUsed(context), SizedBox(height: 23.v), CustomImageView(imagePath: ImageConstant.imgImage16324x324, height: 324.adaptSize, width: 324.adaptSize), SizedBox(height: 23.v), Opacity(opacity: 0.8, child: Text("JBL BIG STREAM", style: CustomTextStyles.titleMedium16)), SizedBox(height: 5.v), Opacity(opacity: 0.6, child: Text("Speaker", style: CustomTextStyles.bodyLargeGray900)), SizedBox(height: 95.v), Opacity(opacity: 0.8, child: Text("Connected", style: CustomTextStyles.titleMediumCyan3000216))])))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), title: AppbarTitle(text: "Search to connect", margin: EdgeInsets.only(left: 85.h))); } 
/// Section Widget
Widget _buildFinishedCanBeUsed(BuildContext context) { return Row(children: [SizedBox(child: Checkbox(shape: RoundedRectangleBorder(), materialTapTargetSize: MaterialTapTargetSize.shrinkWrap, value: finishedCanBeUsed, onChanged: (value) {finishedCanBeUsed = value!;})), Padding(padding: EdgeInsets.only(left: 10), child: Text("Finished, can be used", style: CustomTextStyles.titleSmallCyan30002))]); } 
/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
