import '../../../core/app_export.dart';class Divrfcardsscrollercontent5ItemWidget extends StatelessWidget {const Divrfcardsscrollercontent5ItemWidget({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SizedBox(width: 309.h, child: Align(alignment: Alignment.centerRight, child: Card(clipBehavior: Clip.antiAlias, elevation: 0, margin: EdgeInsets.all(0), color: appTheme.whiteA700, shape: RoundedRectangleBorder(borderRadius: BorderRadiusStyle.roundedBorder18), child: Container(height: 450.v, width: 309.h, decoration: AppDecoration.outlineBlack.copyWith(borderRadius: BorderRadiusStyle.roundedBorder18), child: Stack(alignment: Alignment.topCenter, children: [CustomImageView(imagePath: ImageConstant.imgStoreCard40E, height: 450.v, width: 309.h, radius: BorderRadius.circular(18.h), alignment: Alignment.center), Align(alignment: Alignment.topCenter, child: Padding(padding: EdgeInsets.only(left: 27.h, top: 28.v, right: 27.h), child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [Text("APPLE ENGRAVING", style: theme.textTheme.labelLarge), SizedBox(height: 11.v), Text("✌️Add that personal touch.", style: theme.textTheme.titleLarge)])))]))))); } 
 }
