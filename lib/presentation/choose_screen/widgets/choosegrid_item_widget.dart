import '../../../core/app_export.dart';class ChoosegridItemWidget extends StatelessWidget {const ChoosegridItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 36.h, vertical: 43.v), decoration: AppDecoration.outlineGray.copyWith(borderRadius: BorderRadiusStyle.roundedBorder16), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [SizedBox(height: 3.v), CustomImageView(imagePath: ImageConstant.imgGroup, height: 32.v, width: 34.h), SizedBox(height: 20.v), Opacity(opacity: 0.4, child: Text("Living room", style: CustomTextStyles.bodySmallGray90012))])); } 
 }
