import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class WindowPage extends StatefulWidget {const WindowPage({Key? key}) : super(key: key);

@override WindowPageState createState() =>  WindowPageState();
 }
class WindowPageState extends State<WindowPage> with  AutomaticKeepAliveClientMixin<WindowPage> {@override bool get wantKeepAlive =>  true;
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(child: Column(children: [SizedBox(height: 38.v), Column(children: [Padding(padding: EdgeInsets.symmetric(horizontal: 32.h), child: _buildClientTestimonials(context, rightWindowText: "Front Window")), SizedBox(height: 20.v), SizedBox(height: 412.v, width: double.maxFinite, child: Stack(alignment: Alignment.bottomCenter, children: [Padding(padding: EdgeInsets.symmetric(horizontal: 32.h), child: _buildClientTestimonials(context, rightWindowText: "Right Window")), _buildReviews(context)]))])]))))); } 
/// Section Widget
Widget _buildReviews(BuildContext context) { return Align(alignment: Alignment.bottomCenter, child: Container(width: double.maxFinite, margin: EdgeInsets.only(top: 183.v), padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 40.v), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder28), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [CustomImageView(imagePath: ImageConstant.imgEllipse7, height: 65.adaptSize, width: 65.adaptSize, radius: BorderRadius.circular(32.h), margin: EdgeInsets.only(bottom: 84.v)), Padding(padding: EdgeInsets.only(left: 20.h, top: 11.v, bottom: 95.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.8, child: Text("Demons", style: CustomTextStyles.labelLargeGray900_2)), SizedBox(height: 3.v), Opacity(opacity: 0.6, child: Text("Alec Benjamin", style: theme.textTheme.bodyMedium))])), Spacer(), Padding(padding: EdgeInsets.only(top: 21.v, right: 20.h, bottom: 104.v), child: IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 24.adaptSize, minWidth: 24.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 24.adaptSize, height: 24.adaptSize, padding: EdgeInsets.all(2.h), child: CustomImageView(imagePath: ImageConstant.imgIconlyCurvedPlayWhiteA700))))]))); } 
/// Common widget
Widget _buildClientTestimonials(BuildContext context, {required String rightWindowText, }) { return Container(padding: EdgeInsets.symmetric(horizontal: 98.h, vertical: 39.v), decoration: AppDecoration.outlineRedA.copyWith(borderRadius: BorderRadiusStyle.roundedBorder16), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [SizedBox(height: 3.v), IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 54.adaptSize, minWidth: 54.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 54.adaptSize, height: 54.adaptSize, decoration: BoxDecoration(color: appTheme.redA100, borderRadius: BorderRadius.circular(27.h)), padding: EdgeInsets.all(15.h), child: CustomImageView(imagePath: ImageConstant.imgRefresh))), SizedBox(height: 26.v), Opacity(opacity: 0.8, child: Text(rightWindowText, style: CustomTextStyles.titleMediumRedA100.copyWith(color: appTheme.redA100.withOpacity(0.64))))])); } 
 }
