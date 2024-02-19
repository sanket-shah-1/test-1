import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_subtitle_one.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/roomsview_all_model.dart';import 'models/roomsviewall_item_model.dart';import 'provider/roomsview_all_provider.dart';import 'widgets/roomsviewall_item_widget.dart';class RoomsviewAllScreen extends StatefulWidget {const RoomsviewAllScreen({Key? key}) : super(key: key);

@override RoomsviewAllScreenState createState() =>  RoomsviewAllScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => RoomsviewAllProvider(), child: RoomsviewAllScreen()); } 
 }
class RoomsviewAllScreenState extends State<RoomsviewAllScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Padding(padding: EdgeInsets.only(left: 32.h, top: 40.v, right: 27.h), child: Consumer<RoomsviewAllProvider>(builder: (context, provider, child) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 124.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: provider.roomsviewAllModelObj.roomsviewallItemList.length, itemBuilder: (context, index) {RoomsviewallItemModel model = provider.roomsviewAllModelObj.roomsviewallItemList[index]; return RoomsviewallItemWidget(model);});})))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitleOne(text: "lbl_rooms".tr, margin: EdgeInsets.fromLTRB(32.h, 15.v, 32.h, 13.v))]); } 
/// Navigates to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
