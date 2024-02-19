import '../../../core/app_export.dart';class DivrfcardsscrollercontentItemWidget extends StatelessWidget {const DivrfcardsscrollercontentItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SizedBox(width: 92.h, child: Align(alignment: Alignment.centerRight, child: Column(children: [CustomImageView(imagePath: ImageConstant.imgStoreCard141, height: 60.v, width: 92.h), SizedBox(height: 13.v), Text("Mac", style: theme.textTheme.titleSmall)]))); } 
 }
