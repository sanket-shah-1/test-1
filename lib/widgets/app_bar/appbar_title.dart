import '../../core/app_export.dart';
// ignore_for_file: must_be_immutable
class AppbarTitle extends StatelessWidget {AppbarTitle({Key? key, required this.text, this.margin, this.onTap}) : super(key: key);

String text;

EdgeInsetsGeometry? margin;

Function? onTap;

@override Widget build(BuildContext context) { return GestureDetector(onTap: () {onTap!.call();}, child: Padding(padding: margin ?? EdgeInsets.zero, child: SizedBox(width: 295.h, child: Text(text, maxLines: 3, overflow: TextOverflow.ellipsis, style: CustomTextStyles.bodySmallWhiteA700.copyWith(color: appTheme.whiteA700.withOpacity(0.92), height: 1.33))))); } 
 }
