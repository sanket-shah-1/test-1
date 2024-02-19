import 'package:sanket_s_application1/widgets/app_bar/custom_app_bar.dart';import 'package:sanket_s_application1/widgets/app_bar/appbar_leading_image.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';
// ignore_for_file: must_be_immutable
class LoginPageScreen extends StatelessWidget {LoginPageScreen({Key? key}) : super(key: key);

TextEditingController emailController = TextEditingController();

TextEditingController passwordController = TextEditingController();

GlobalKey<FormState> _formKey = GlobalKey<FormState>();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.gray50, resizeToAvoidBottomInset: false, appBar: _buildAppBar(context), body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom), child: Form(key: _formKey, child: Container(width: double.maxFinite, padding: EdgeInsets.all(12.h), child: Column(children: [SizedBox(height: 9.v), Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(left: 2.h), child: Text("Login_SD", style: CustomTextStyles.displaySmallABeeZeeOnPrimary))), SizedBox(height: 73.v), Container(width: 343.h, margin: EdgeInsets.symmetric(horizontal: 4.h), child: TextFormField(focusNode: FocusNode(), autofocus: true, controller: emailController, keyboardType: TextInputType.emailAddress, decoration: InputDecoration(labelText: "Email", labelStyle: CustomTextStyles.bodyMediumABeeZeePrimaryContainer, hintText: "Email", hintStyle: CustomTextStyles.bodyMediumABeeZeePrimaryContainer, suffixIcon: Container(margin: EdgeInsets.symmetric(horizontal: 21.h), child: CustomImageView(imagePath: ImageConstant.imgCheckmark, height: 24.adaptSize, width: 24.adaptSize)), suffixIconConstraints: BoxConstraints(maxHeight: 64.v), filled: true, fillColor: appTheme.whiteA700, isDense: true, contentPadding: EdgeInsets.fromLTRB(20.h, 31.v, 20.h, 15.v)), style: CustomTextStyles.bodyMediumABeeZeePrimaryContainer)), SizedBox(height: 8.v), Container(width: 343.h, margin: EdgeInsets.symmetric(horizontal: 4.h), child: TextFormField(focusNode: FocusNode(), autofocus: true, controller: passwordController, style: CustomTextStyles.bodyMediumABeeZeeSecondaryContainer, textInputAction: TextInputAction.done, keyboardType: TextInputType.visiblePassword, obscureText: true, decoration: InputDecoration(hintText: "Password", hintStyle: CustomTextStyles.bodyMediumABeeZeeSecondaryContainer, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.whiteA700, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 20.h, vertical: 23.v)))), SizedBox(height: 14.v), Align(alignment: Alignment.centerRight, child: Padding(padding: EdgeInsets.only(right: 4.h), child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [Padding(padding: EdgeInsets.only(top: 4.v, bottom: 2.v), child: Text("Forgot your password?", style: CustomTextStyles.bodyMediumABeeZeeOnPrimary)), CustomImageView(imagePath: ImageConstant.imgArrowRightRed700, height: 24.adaptSize, width: 24.adaptSize, margin: EdgeInsets.only(left: 3.h))]))), Spacer(), Container(margin: EdgeInsets.only(right: 8.h), padding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 15.v), width: SizeUtils.width, decoration: BoxDecoration(color: appTheme.red700, borderRadius: BorderRadius.circular(24.h), boxShadow: [BoxShadow(color: appTheme.red8003f, spreadRadius: 2.h, blurRadius: 2.h, offset: Offset(0, 4))]), child: Text("LOGIN", style: CustomTextStyles.bodyMediumABeeZeeWhiteA700)), SizedBox(height: 99.v), Text("Or login with social account", style: CustomTextStyles.bodyMediumABeeZeeOnPrimary)]))))), bottomNavigationBar: _buildSocialButtons(context))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(height: 40.v, leadingWidth: double.maxFinite, leading: AppbarLeadingImage(imagePath: ImageConstant.imgChevron, margin: EdgeInsets.fromLTRB(15.h, 12.v, 351.h, 12.v), onTap: () {onTapChevron(context);})); } 
/// Section Widget
Widget _buildSocialButtons(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 122.h, right: 87.h, bottom: 57.v), child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [Container(height: 24.v, width: 23.h, margin: EdgeInsets.symmetric(vertical: 20.v), decoration: AppDecoration.outlineOnPrimaryContainer1.copyWith(borderRadius: BorderRadiusStyle.roundedBorder24), child: CustomImageView(imagePath: ImageConstant.imgGoogle, height: 24.v, width: 23.h, alignment: Alignment.center)), Container(height: 64.v, width: 92.h, margin: EdgeInsets.only(left: 50.h), padding: EdgeInsets.symmetric(horizontal: 34.h, vertical: 20.v), decoration: AppDecoration.outlineOnPrimaryContainer1.copyWith(borderRadius: BorderRadiusStyle.roundedBorder24), child: CustomImageView(imagePath: ImageConstant.imgFacebook, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center))])); } 

/// Navigates back to the previous screen.
onTapChevron(BuildContext context) { Navigator.pop(context); } 
 }
