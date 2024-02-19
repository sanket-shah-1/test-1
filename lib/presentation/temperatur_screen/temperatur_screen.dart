import '../../core/app_export.dart';
// ignore_for_file: must_be_immutable
class TemperaturScreen extends StatelessWidget with  TickerProviderStateMixin {TemperaturScreen({Key? key}) : super(key: key);

late TabController tabviewController;

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: SizedBox(width: double.maxFinite, child: Column(children: [SizedBox(height: 53.v), Expanded(child: SingleChildScrollView(child: Column(children: [_buildArrowLeftRow(context), SizedBox(height: 40.v), _buildTabview(context), SizedBox(height: 566.v, child: TabBarView(controller: tabviewController, children: [Container(), Container(), Container(), Container()]))])))])))); } 
/// Section Widget
Widget _buildArrowLeftRow(BuildContext context) { return Padding(padding: EdgeInsets.symmetric(horizontal: 31.h), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [IconButton(onPressed: () {onPressArrowLeft(context);}, constraints: BoxConstraints(minHeight: 56.adaptSize, minWidth: 56.adaptSize), padding: EdgeInsets.all(0), icon: Container(width: 56.adaptSize, height: 56.adaptSize, decoration: BoxDecoration(color: appTheme.gray50, borderRadius: BorderRadius.circular(12.h)), padding: EdgeInsets.all(21.h), child: CustomImageView(imagePath: ImageConstant.imgArrowLeft))), Padding(padding: EdgeInsets.only(top: 5.v, bottom: 2.v), child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [Opacity(opacity: 0.8, child: Text("Temperature", style: theme.textTheme.titleMedium)), Opacity(opacity: 0.4, child: Text("Living Room", style: CustomTextStyles.bodyMediumGray900))]))])); } 
/// Section Widget
Widget _buildTabview(BuildContext context) { return Container(height: 96.v, width: 311.h, child: TabBar(controller: tabviewController, labelPadding: EdgeInsets.zero, indicatorPadding: EdgeInsets.all(16.5.h), indicator: BoxDecoration(borderRadius: BorderRadius.circular(12.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), tabs: [Tab(child: Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Opacity(opacity: 0.2, child: CustomImageView(imagePath: ImageConstant.imgLightBulbGray900, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center)))), Tab(child: Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Opacity(opacity: 0.2, child: CustomImageView(imagePath: ImageConstant.imgTelevision, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center)))), Tab(child: Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.gradient.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: CustomImageView(imagePath: ImageConstant.imgScienceThermometer24x24, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center))), Tab(child: Container(height: 63.adaptSize, width: 63.adaptSize, padding: EdgeInsets.all(19.h), decoration: AppDecoration.background.copyWith(borderRadius: BorderRadiusStyle.roundedBorder12), child: Opacity(opacity: 0.2, child: CustomImageView(imagePath: ImageConstant.imgRealEstate1, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center))))])); } 
/// Navigates back to the previous screen.
onPressArrowLeft(BuildContext context) { Navigator.pop(context); } 
 }
