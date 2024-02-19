import 'package:sanket_s_application1/widgets/app_bar/custom_app_bar.dart';import 'package:sanket_s_application1/widgets/app_bar/appbar_leading_iconbutton.dart';import 'package:sanket_s_application1/widgets/app_bar/appbar_subtitle_one.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class Iphone11ProXFortytwoScreen extends StatelessWidget {const Iphone11ProXFortytwoScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(top: 42.v), child: Opacity(opacity: 0.6, child: Container(width: 311.h, margin: EdgeInsets.symmetric(horizontal: 32.h), child: Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, dictum suspendisse ullamcorper malesuada augue eget at ut. Justo, eleifend neque eros massa. Gravida tortor id pellentesque purus eget a. Vitae senectus quis eros, viverra ultrices volutpat consequat eget. Ipsum, velit eget tortor, montes. Adipiscing mauris aliquet nunc aliquam malesuada pellentesque viverra pharetra, aliquam. Aliquet sollicitudin aliquam eleifend nisi velit dignissim egestas diam. Augue turpis tellus tellus maecenas feugiat pulvinar commodo facilisi nec. Euismod posuere neque imperdiet velit euismod vitae. Amet sed aliquet sit tristique. Fames ipsum arcu et laoreet pellentesque aliquam consequat.\nSed lectus amet molestie nibh lorem. Tortor a quam tincidunt ac lectus. Mi orci non tellus dignissim orci suspendisse in amet. Cras nunc, tempus sit morbi. Ornare egestas sit tincidunt quis ut. Ut mattis tincidunt urna aliquet in pulvinar pretium aliquet eu. Vitae ac lacus tincidunt et odio orci. Imperdiet lectus enim semper pretium ornare. Neque dictum donec et sed quis. Est, aenean eu mauris laoreet ut. Mi sed nec, condimentum bibendum amet odio. Eget senectus id at tortor amet. Arcu ut consequat amet at nec tincidunt mollis eu. ", maxLines: 28, overflow: TextOverflow.ellipsis, style: theme.textTheme.bodyMedium!.copyWith(height: 1.71)))))))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitleOne(text: "Security", margin: EdgeInsets.fromLTRB(32.h, 16.v, 32.h, 12.v))]); } 

/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
