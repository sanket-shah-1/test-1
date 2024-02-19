import 'package:pin_code_fields/pin_code_fields.dart';import 'package:flutter/services.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class TvScreen extends StatelessWidget {const TvScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, resizeToAvoidBottomInset: false, body: SizedBox(width: double.maxFinite, child: Column(children: [SizedBox(height: 53.v), Expanded(child: SingleChildScrollView(child: Column(children: [_buildArrowLeftRow(context), SizedBox(height: 40.v), Padding(padding: EdgeInsets.only(left: 32.h, right: 31.h), child: PinCodeTextField(appContext: context, length: 4, obscureText: false, obscuringCharacter: '*', keyboardType: TextInputType.number, autoDismissKeyboard: true, enableActiveFill: true, inputFormatters: [FilteringTextInputFormatter.digitsOnly], onChanged: (value) {}, pinTheme: PinTheme(fieldHeight: 63.h, fieldWidth: 63.h, shape: PinCodeFieldShape.box, borderRadius: BorderRadius.circular(12.h), selectedFillColor: appTheme.gray50, activeFillColor: appTheme.gray50, inactiveFillColor: appTheme.gray50, inactiveColor: Color(0X1212121D), selectedColor: Color(0X1212121D), activeColor: Color(0X1212121D)))), SizedBox(height: 13.v), Padding(padding: EdgeInsets.only(left: 46.h, right: 38.h), child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [Opacity(opacity: 0.6, child: Text("Lights", style: CustomTextStyles.labelLargeGray900Medium)), Spacer(flex: 37), Text("TV", style: CustomTextStyles.labelLargeCyan30002Medium), Spacer(flex: 37), Opacity(opacity: 0.6, child: Text("Temp", style: CustomTextStyles.labelLargeGray900Medium)), Spacer(flex: 25), Opacity(opacity: 0.6, child: Text("Window", style: CustomTextStyles.labelLargeGray900Medium))])), SizedBox(height: 78.v), CustomImageView(imagePath: ImageConstant.imgGroup34, height: 272.adaptSize, width: 272.adaptSize), SizedBox(height: 80.v), _buildDemonsRow(context)])))])))); } 
/// Section Widget
Widget _buildArrowLeftRow(BuildContext context) { return Padding(padding: EdgeInsets.symmetric(horizontal: 31.h), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [IconButton(onPressed: () {onPressArrowLeft(context);}, constraints: BoxConstraints(minHeight: 56.adaptSize, minWidth: 56.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 56.adaptSize, height: 56.adaptSize, decoration: BoxDecoration(color: appTheme.gray50, borderRadius: BorderRadius.circular(12.h)), padding: EdgeInsets.all(21.h), child: CustomImageView(imagePath: ImageConstant.imgArrowLeft))), Padding(padding: EdgeInsets.only(top: 3.v), child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [Opacity(opacity: 0.8, child: Text("TV", style: theme.textTheme.titleMedium)), SizedBox(height: 2.v), Opacity(opacity: 0.4, child: Text("Living Room", style: CustomTextStyles.bodyMediumGray900))]))])); } 
/// Section Widget
Widget _buildDemonsRow(BuildContext context) { return Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 40.v), decoration: AppDecoration.fillOnError.copyWith(borderRadius: BorderRadiusStyle.roundedBorder28), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [CustomImageView(imagePath: ImageConstant.imgEllipse7, height: 65.adaptSize, width: 65.adaptSize, radius: BorderRadius.circular(32.h), margin: EdgeInsets.only(bottom: 84.v)), Padding(padding: EdgeInsets.only(left: 20.h, top: 11.v, bottom: 95.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.8, child: Text("Demons", style: CustomTextStyles.labelLargeGray900_2)), SizedBox(height: 3.v), Opacity(opacity: 0.6, child: Text("Alec Benjamin", style: theme.textTheme.bodyMedium))])), Spacer(), Padding(padding: EdgeInsets.only(top: 21.v, right: 20.h, bottom: 104.v), child: IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 24.adaptSize, minWidth: 24.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 24.adaptSize, height: 24.adaptSize, padding: EdgeInsets.all(2.h), child: CustomImageView(imagePath: ImageConstant.imgIconlyCurvedPlayWhiteA700))))])); } 

/// Navigates back to the previous screen.
onPressArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
