import '../../../core/app_export.dart';import '../models/lightlist_item_model.dart';
// ignore_for_file: must_be_immutable
class LightlistItemWidget extends StatelessWidget {LightlistItemWidget(this.lightlistItemModelObj, {Key? key}) : super(key: key);

LightlistItemModel lightlistItemModelObj;

@override Widget build(BuildContext context) { return SizedBox(width: 63.h, child: Column(children: [Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: CustomImageView(imagePath: lightlistItemModelObj?.lights, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center)), SizedBox(height: 15.v), Text(lightlistItemModelObj.lights1!, style: CustomTextStyles.labelLargeCyan30002Medium)])); } 
 }
