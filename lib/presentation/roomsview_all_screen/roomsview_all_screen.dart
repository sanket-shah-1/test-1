import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_subtitle_one.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/roomsviewall_item_model.dart';import 'notifier/roomsview_all_notifier.dart';import 'widgets/roomsviewall_item_widget.dart';class RoomsviewAllScreen extends ConsumerStatefulWidget {const RoomsviewAllScreen({Key? key}) : super(key: key);

@override RoomsviewAllScreenState createState() =>  RoomsviewAllScreenState();
 }
class RoomsviewAllScreenState extends ConsumerState<RoomsviewAllScreen> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Padding(padding: EdgeInsets.only(left: 32.h, top: 40.v, right: 27.h), child: Consumer(builder: (context, ref, _) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 124.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: ref.watch(roomsviewAllNotifier).roomsviewAllModelObj?.roomsviewallItemList.length ?? 0, itemBuilder: (context, index) {RoomsviewallItemModel model = ref.watch(roomsviewAllNotifier).roomsviewAllModelObj?.roomsviewallItemList[index] ?? RoomsviewallItemModel(); return RoomsviewallItemWidget(model);});})))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitleOne(text: "lbl_rooms".tr, margin: EdgeInsets.fromLTRB(32.h, 15.v, 32.h, 13.v))]); } 
/// Navigates back to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
