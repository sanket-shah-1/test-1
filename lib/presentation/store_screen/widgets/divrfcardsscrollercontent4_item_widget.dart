import '../../../core/app_export.dart';class Divrfcardsscrollercontent4ItemWidget extends StatelessWidget {const Divrfcardsscrollercontent4ItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SizedBox(width: 309.h, child: Align(alignment: Alignment.centerRight, child: Card(clipBehavior: Clip.antiAlias, elevation: 0, margin: EdgeInsets.all(0), color: appTheme.whiteA700, shape: RoundedRectangleBorder(borderRadius: BorderRadiusStyle.roundedBorder18), child: Container(height: 450.v, width: 309.h, decoration: AppDecoration.outlineBlack90001.copyWith(borderRadius: BorderRadiusStyle.roundedBorder18), child: Stack(alignment: Alignment.topLeft, children: [CustomImageView(imagePath: ImageConstant.imgStoreCard40M, height: 450.v, width: 309.h, radius: BorderRadius.circular(18.h), alignment: Alignment.center), Align(alignment: Alignment.topLeft, child: Padding(padding: EdgeInsets.only(left: 28.h, top: 28.v, right: 128.h), child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [Text("MOTHER’S DAY", style: theme.textTheme.labelLarge), SizedBox(height: 13.v), Text("Even more ways", style: theme.textTheme.titleLarge), Text("to thank Mom.", style: theme.textTheme.titleLarge), SizedBox(height: 5.v), Text("Shop accessories.", style: CustomTextStyles.bodyLargeOnErrorContainer_1)])))]))))); } 
 }
