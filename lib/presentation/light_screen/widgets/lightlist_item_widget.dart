import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class LightlistItemWidget extends StatelessWidget {const LightlistItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SizedBox(width: 63.h, child: Column(children: [Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.gradientCyanToPrimary.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: CustomImageView(imagePath: ImageConstant.imgLamp1, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center)), SizedBox(height: 15.v), Text("Lights", style: CustomTextStyles.labelLargeCyan30002Medium)])); } 
 }
