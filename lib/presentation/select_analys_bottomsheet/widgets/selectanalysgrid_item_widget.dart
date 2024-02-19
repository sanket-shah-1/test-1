import '../../../core/app_export.dart';import '../models/selectanalysgrid_item_model.dart';
// ignore_for_file: must_be_immutable
class SelectanalysgridItemWidget extends StatelessWidget {SelectanalysgridItemWidget(this.selectanalysgridItemModelObj, {Key? key}) : super(key: key);

SelectanalysgridItemModel selectanalysgridItemModelObj;

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(vertical: 18.v), decoration: AppDecoration.outlineGray.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [Padding(padding: EdgeInsets.only(bottom: 15.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Align(alignment: Alignment.center, child: Opacity(opacity: 0.1, child: Text(selectanalysgridItemModelObj.thirty!, style: CustomTextStyles.bodySmallGray900_2))), SizedBox(height: 34.v), Align(alignment: Alignment.center, child: Opacity(opacity: 0.1, child: Text(selectanalysgridItemModelObj.twenty!, style: CustomTextStyles.bodySmallGray900_2))), SizedBox(height: 35.v), Opacity(opacity: 0.1, child: Text(selectanalysgridItemModelObj.ten!, style: CustomTextStyles.bodySmallGray900_2))])), Padding(padding: EdgeInsets.only(left: 24.h, top: 30.v, bottom: 26.v), child: Column(children: [CustomImageView(imagePath: selectanalysgridItemModelObj?.livingroom, height: 34.adaptSize, width: 34.adaptSize), SizedBox(height: 21.v), Opacity(opacity: 0.6, child: Text(selectanalysgridItemModelObj.livingRoom!, style: CustomTextStyles.labelLargeGray900_1))]))])); } 
 }
