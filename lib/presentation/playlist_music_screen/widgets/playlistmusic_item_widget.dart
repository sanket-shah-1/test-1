import '../../../core/app_export.dart';import '../models/playlistmusic_item_model.dart';
// ignore_for_file: must_be_immutable
class PlaylistmusicItemWidget extends StatelessWidget {PlaylistmusicItemWidget(this.playlistmusicItemModelObj, {Key? key}) : super(key: key);

PlaylistmusicItemModel playlistmusicItemModelObj;

@override Widget build(BuildContext context) { return Row(mainAxisAlignment: MainAxisAlignment.center, children: [CustomImageView(imagePath: playlistmusicItemModelObj?.afterSchool, height: 63.adaptSize, width: 63.adaptSize, radius: BorderRadius.circular(12.h)), Padding(padding: EdgeInsets.only(left: 24.h, top: 9.v, bottom: 9.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.8, child: Text(playlistmusicItemModelObj.afterSchool1!, style: CustomTextStyles.titleMediumMedium)), SizedBox(height: 4.v), Opacity(opacity: 0.6, child: Text(playlistmusicItemModelObj.price!, style: CustomTextStyles.bodySmallGray900_1))])), Spacer(), Padding(padding: EdgeInsets.only(top: 15.v, bottom: 24.v), child: IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 24.adaptSize, minWidth: 24.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 24.adaptSize, height: 24.adaptSize, padding: EdgeInsets.all(2.h), child: CustomImageView(imagePath: ImageConstant.imgIconlyCurvedPlay))))]); } 
 }
