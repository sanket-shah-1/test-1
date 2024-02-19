import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';
// ignore_for_file: must_be_immutable
class SignupOneScreen extends StatelessWidget {SignupOneScreen({Key? key}) : super(key: key);

TextEditingController nameController = TextEditingController();

TextEditingController emailController = TextEditingController();

GlobalKey<FormState> _formKey = GlobalKey<FormState>();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, resizeToAvoidBottomInset: false, body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom), child: Form(key: _formKey, child: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 19.v), child: Column(children: [SizedBox(height: 38.v), CustomImageView(imagePath: ImageConstant.imgRectangle36, height: 99.v, width: 311.h, radius: BorderRadius.circular(24.h)), SizedBox(height: 41.v), Opacity(opacity: 0.8, child: Text("Sign Up", style: CustomTextStyles.titleMediumBold_1)), SizedBox(height: 22.v), Opacity(opacity: 0.8, child: Container(width: 262.h, margin: EdgeInsets.symmetric(horizontal: 24.h), child: Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sollicitudin ornare cras ut ac.", maxLines: 3, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.labelMediumGray900Bold.copyWith(height: 1.80)))), SizedBox(height: 10.v), Container(width: 311.h, child: TextFormField(focusNode: FocusNode(), autofocus: true, controller: nameController, style: theme.textTheme.titleSmall!, decoration: InputDecoration(hintText: "Your Name . . .", hintStyle: theme.textTheme.titleSmall!, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.gray50, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 19.v)))), SizedBox(height: 12.v), Container(width: 311.h, child: TextFormField(focusNode: FocusNode(), autofocus: true, controller: emailController, style: theme.textTheme.titleSmall!, textInputAction: TextInputAction.done, keyboardType: TextInputType.emailAddress, decoration: InputDecoration(hintText: "Email Address", hintStyle: theme.textTheme.titleSmall!, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.gray50, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 19.v)))), SizedBox(height: 13.v), Opacity(opacity: 0.6, child: Container(width: 243.h, margin: EdgeInsets.only(left: 34.h, right: 33.h), child: Text("By signing up you agree to out Term of use and Privacy notice", maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.labelMediumGray900.copyWith(height: 1.80)))), Spacer(), _buildRowWithNextAndArrowDown(context), SizedBox(height: 20.v), Row(mainAxisAlignment: MainAxisAlignment.center, children: [Opacity(opacity: 0.6, child: Text("Already Registered? ", style: CustomTextStyles.labelLargeGray900Bold)), Text("Sign In", style: CustomTextStyles.labelLargeCyan30002)])]))))))); } 
/// Section Widget
Widget _buildRowWithNextAndArrowDown(BuildContext context) { return Row(mainAxisSize: MainAxisSize.min, children: [Expanded(child: Container(padding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 18.v), width: 236.h, decoration: BoxDecoration(borderRadius: BorderRadius.circular(14.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), child: Text("Next", style: CustomTextStyles.bodyLargeWhiteA700))), CustomImageView(imagePath: ImageConstant.imgArrowDown, height: 8.v, width: 4.h, margin: EdgeInsets.only(left: 34.h, top: 26.v, bottom: 25.v))]); } 
 }
