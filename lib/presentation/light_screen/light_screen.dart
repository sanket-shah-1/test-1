import '../../core/app_export.dart';import 'widgets/lightgrid_item_widget.dart';import 'widgets/lightlist_item_widget.dart';class LightScreen extends StatelessWidget {const LightScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: SizedBox(width: double.maxFinite, child: Column(children: [SizedBox(height: 53.v), Expanded(child: SingleChildScrollView(child: Column(children: [_buildArrowLeftRow(context), SizedBox(height: 40.v), _buildLightList(context), SizedBox(height: 38.v), _buildLightGrid(context), SizedBox(height: 80.v), _buildDemonsRow(context)])))])))); } 
/// Section Widget
Widget _buildArrowLeftRow(BuildContext context) { return Padding(padding: EdgeInsets.symmetric(horizontal: 31.h), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [IconButton(onPressed: () {onPressArrowLeft(context);}, constraints: BoxConstraints(minHeight: 56.adaptSize, minWidth: 56.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 56.adaptSize, height: 56.adaptSize, decoration: BoxDecoration(color: appTheme.gray50, borderRadius: BorderRadius.circular(12.h)), padding: EdgeInsets.all(21.h), child: CustomImageView(imagePath: ImageConstant.imgArrowLeft))), Padding(padding: EdgeInsets.only(top: 4.v), child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [Opacity(opacity: 0.8, child: Text("Light", style: theme.textTheme.titleMedium)), SizedBox(height: 1.v), Opacity(opacity: 0.4, child: Text("Living Room", style: CustomTextStyles.bodyMediumGray900))]))])); } 
/// Section Widget
Widget _buildLightList(BuildContext context) { return SizedBox(height: 96.v, child: ListView.separated(padding: EdgeInsets.symmetric(horizontal: 32.h), scrollDirection: Axis.horizontal, separatorBuilder: (context, index) {return SizedBox(width: 20.h);}, itemCount: 4, itemBuilder: (context, index) {return LightlistItemWidget();})); } 
/// Section Widget
Widget _buildLightGrid(BuildContext context) { return Padding(padding: EdgeInsets.symmetric(horizontal: 32.h), child: GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 147.v, crossAxisCount: 2, mainAxisSpacing: 19.h, crossAxisSpacing: 19.h), physics: NeverScrollableScrollPhysics(), itemCount: 4, itemBuilder: (context, index) {return LightgridItemWidget();})); } 
/// Section Widget
Widget _buildDemonsRow(BuildContext context) { return Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 40.v), decoration: AppDecoration.fillOnError.copyWith(borderRadius: BorderRadiusStyle.roundedBorder28), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [CustomImageView(imagePath: ImageConstant.imgEllipse7, height: 65.adaptSize, width: 65.adaptSize, radius: BorderRadius.circular(32.h), margin: EdgeInsets.only(bottom: 84.v)), Padding(padding: EdgeInsets.only(left: 20.h, top: 11.v, bottom: 95.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Opacity(opacity: 0.8, child: Text("Demons", style: CustomTextStyles.labelLargeGray900_2)), SizedBox(height: 3.v), Opacity(opacity: 0.6, child: Text("Alec Benjamin", style: theme.textTheme.bodyMedium))])), Spacer(), Padding(padding: EdgeInsets.only(top: 21.v, right: 20.h, bottom: 104.v), child: IconButton(onPressed: () {}, constraints: BoxConstraints(minHeight: 24.adaptSize, minWidth: 24.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 24.adaptSize, height: 24.adaptSize, padding: EdgeInsets.all(2.h), child: CustomImageView(imagePath: ImageConstant.imgIconlyCurvedPlay))))])); } 
/// Navigates back to the previous screen.
onPressArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
