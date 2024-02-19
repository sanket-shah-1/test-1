import '../../../core/app_export.dart';import '../models/lightgrid_item_model.dart';
// ignore_for_file: must_be_immutable
class LightgridItemWidget extends StatelessWidget {LightgridItemWidget(this.lightgridItemModelObj, {Key? key}) : super(key: key);

LightgridItemModel lightgridItemModelObj;

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 24.v), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder20), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 54.adaptSize, minWidth: 54.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 54.adaptSize, height: 54.adaptSize, decoration: BoxDecoration(color: appTheme.redA100, borderRadius: BorderRadius.circular(27.h)), padding: EdgeInsets.all(15.h), child: CustomImageView(imagePath: ImageConstant.imgRefresh))), SizedBox(height: 21.v), Align(alignment: Alignment.centerRight, child: Opacity(opacity: 0.8, child: Text(lightgridItemModelObj.frontDoor!, style: CustomTextStyles.titleSmallGray900Medium_1)))])); } 
 }
