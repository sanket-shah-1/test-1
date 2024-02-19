import '../../../core/app_export.dart';import '../models/choosegrid_item_model.dart';
// ignore_for_file: must_be_immutable
class ChoosegridItemWidget extends StatelessWidget {ChoosegridItemWidget(this.choosegridItemModelObj, {Key? key}) : super(key: key);

ChoosegridItemModel choosegridItemModelObj;

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 36.h, vertical: 43.v), decoration: AppDecoration.outlineGray.copyWith(borderRadius: BorderRadiusStyle.roundedBorder16), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [SizedBox(height: 3.v), CustomImageView(imagePath: choosegridItemModelObj?.livingroom, height: 32.v, width: 34.h), SizedBox(height: 20.v), Opacity(opacity: 0.4, child: Text(choosegridItemModelObj.livingRoom!, style: CustomTextStyles.bodySmallGray90012))])); } 
 }
