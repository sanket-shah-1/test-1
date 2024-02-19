import '../../../core/app_export.dart';class FamilyaccessItemWidget extends StatelessWidget {const FamilyaccessItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return Container(padding: EdgeInsets.symmetric(horizontal: 42.h, vertical: 50.v), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Column(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [CustomImageView(imagePath: ImageConstant.imgUser12, height: 34.adaptSize, width: 34.adaptSize), SizedBox(height: 15.v), Text("Alexander", style: CustomTextStyles.labelLargeCyan30002Medium), SizedBox(height: 2.v)])); } 
 }
