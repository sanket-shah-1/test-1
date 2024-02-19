import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';
// ignore_for_file: must_be_immutable
class AppbarSubtitleThree extends StatelessWidget {AppbarSubtitleThree({Key? key, required this.text, this.margin, this.onTap}) : super(key: key);

String text;

EdgeInsetsGeometry? margin;

Function? onTap;

@override Widget build(BuildContext context) { return GestureDetector(onTap: () {onTap!.call();}, child: Padding(padding: margin ?? EdgeInsets.zero, child: Opacity(opacity: 0.4, child: Text(text, style: CustomTextStyles.titleSmallGray900.copyWith(color: appTheme.gray900.withOpacity(0.49)))))); } 
 }
