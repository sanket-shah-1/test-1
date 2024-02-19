import '../../core/app_export.dart';
// ignore_for_file: must_be_immutable
class AppbarSubtitleOne extends StatelessWidget {AppbarSubtitleOne({Key? key, required this.text, this.margin, this.onTap}) : super(key: key);

String text;

EdgeInsetsGeometry? margin;

Function? onTap;

@override Widget build(BuildContext context) { return GestureDetector(onTap: () {onTap!.call();}, child: Padding(padding: margin ?? EdgeInsets.zero, child: Opacity(opacity: 0.8, child: Text(text, style: theme.textTheme.titleMedium!.copyWith(color: appTheme.gray900.withOpacity(0.64)))))); } 
 }
