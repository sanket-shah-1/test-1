import 'package:sanket_s_application1/widgets/app_bar/custom_app_bar.dart';import 'package:sanket_s_application1/widgets/app_bar/appbar_leading_iconbutton.dart';import 'package:sanket_s_application1/widgets/app_bar/appbar_subtitle.dart';import 'widgets/playlistmusic_item_widget.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class PlaylistMusicScreen extends StatelessWidget {const PlaylistMusicScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(top: 34.v), child: Container(padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 8.v), decoration: AppDecoration.gradientGrayToGray.copyWith(borderRadius: BorderRadiusStyle.roundedBorder28), child: Column(mainAxisSize: MainAxisSize.min, children: [SizedBox(height: 32.v), CustomImageView(imagePath: ImageConstant.imgArrowUp, height: 24.adaptSize, width: 24.adaptSize), SizedBox(height: 40.v), _buildPlaylistMusic(context)])))))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitle(text: "Demons", margin: EdgeInsets.fromLTRB(32.h, 15.v, 32.h, 13.v))]); } 
/// Section Widget
Widget _buildPlaylistMusic(BuildContext context) { return Padding(padding: EdgeInsets.only(right: 10.h), child: ListView.separated(physics: NeverScrollableScrollPhysics(), shrinkWrap: true, separatorBuilder: (context, index) {return SizedBox(height: 30.v);}, itemCount: 7, itemBuilder: (context, index) {return PlaylistmusicItemWidget();})); } 

/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
