import '../../core/app_export.dart';
// ignore_for_file: must_be_immutable
class AppbarLeadingIconbutton extends StatelessWidget {AppbarLeadingIconbutton({Key? key, this.imagePath, this.margin, this.onTap}) : super(key: key);

String? imagePath;

EdgeInsetsGeometry? margin;

Function? onTap;

@override Widget build(BuildContext context) { return GestureDetector(onTap: () {onTap!.call();}, child: Padding(padding: margin ?? EdgeInsets.zero, child: IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 56.adaptSize, minWidth: 56.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 56.adaptSize, height: 56.adaptSize, decoration: BoxDecoration(color: appTheme.gray50, borderRadius: BorderRadius.circular(12.h)), child: CustomImageView(imagePath: ImageConstant.imgArrowLeft))))); } 
 }
