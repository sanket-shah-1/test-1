import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';
// ignore_for_file: must_be_immutable
class AppbarSubtitle extends StatelessWidget {AppbarSubtitle({Key? key, required this.text, this.margin, this.onTap}) : super(key: key);

String text;

EdgeInsetsGeometry? margin;

Function? onTap;

@override Widget build(BuildContext context) { return GestureDetector(onTap: () {onTap!.call();}, child: Padding(padding: margin ?? EdgeInsets.zero, child: Opacity(opacity: 0.8, child: Text(text, style: CustomTextStyles.titleMediumOnPrimaryContainer.copyWith(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.64)))))); } 
 }
