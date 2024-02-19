import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_title.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/connected_model.dart';import 'provider/connected_provider.dart';class ConnectedScreen extends StatefulWidget {const ConnectedScreen({Key? key}) : super(key: key);

@override ConnectedScreenState createState() =>  ConnectedScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => ConnectedProvider(), child: ConnectedScreen()); } 
 }
class ConnectedScreenState extends State<ConnectedScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 25.h, vertical: 57.v), child: Column(children: [SizedBox(height: 19.v), _buildFinishedCanBeUsed(context), SizedBox(height: 23.v), CustomImageView(imagePath: ImageConstant.imgImage16324x324, height: 324.adaptSize, width: 324.adaptSize), SizedBox(height: 23.v), Opacity(opacity: 0.8, child: Text("lbl_jbl_big_stream".tr, style: CustomTextStyles.titleMedium16)), SizedBox(height: 5.v), Opacity(opacity: 0.6, child: Text("lbl_speaker".tr, style: CustomTextStyles.bodyLargeGray900)), SizedBox(height: 95.v), Opacity(opacity: 0.8, child: Text("lbl_connected".tr, style: CustomTextStyles.titleMediumCyan3000216))])))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), title: AppbarTitle(text: "msg_search_to_connect".tr, margin: EdgeInsets.only(left: 85.h))); } 
/// Section Widget
Widget _buildFinishedCanBeUsed(BuildContext context) { return Row(children: [Selector<ConnectedProvider, bool?>(selector: (context, provider) => provider.finishedCanBeUsed, builder: (context, finishedCanBeUsed, child) {return SizedBox(child: Checkbox(shape: RoundedRectangleBorder(), materialTapTargetSize: MaterialTapTargetSize.shrinkWrap, value: finishedCanBeUsed, onChanged: (value) {context.read<ConnectedProvider>().changeCheckBox1(value);}));}), Padding(padding: EdgeInsets.only(left: 10), child: Text("msg_finished_can_be".tr, style: CustomTextStyles.titleSmallCyan30002))]); } 
/// Navigates to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
