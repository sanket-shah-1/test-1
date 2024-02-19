import '../../../core/app_export.dart';import '../models/familyaccess_item_model.dart';
// ignore_for_file: must_be_immutable
class FamilyaccessItemWidget extends StatelessWidget {FamilyaccessItemWidget(this.familyaccessItemModelObj, {Key? key}) : super(key: key);

FamilyaccessItemModel familyaccessItemModelObj;

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 42.h, vertical: 50.v), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [CustomImageView(imagePath: ImageConstant.imgUser12, height: 34.adaptSize, width: 34.adaptSize), SizedBox(height: 15.v), Text(familyaccessItemModelObj.alexander!, style: CustomTextStyles.labelLargeCyan30002Medium), SizedBox(height: 2.v)])); } 
 }
