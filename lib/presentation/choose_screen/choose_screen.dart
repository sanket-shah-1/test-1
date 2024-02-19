import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_subtitle_three.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/choosegrid_item_model.dart';import 'notifier/choose_notifier.dart';import 'widgets/choosegrid_item_widget.dart';class ChooseScreen extends ConsumerStatefulWidget {const ChooseScreen({Key? key}) : super(key: key);

@override ChooseScreenState createState() =>  ChooseScreenState();
 }
class ChooseScreenState extends ConsumerState<ChooseScreen> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 31.h), child: Column(children: [SizedBox(height: 32.v), Opacity(opacity: 0.8, child: SizedBox(width: 181.h, child: Text("msg_choose_your_room".tr, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.headlineMediumRegular))), SizedBox(height: 58.v), _buildChooseGrid(context)])))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(actions: [AppbarSubtitleThree(text: "lbl_skip".tr, margin: EdgeInsets.symmetric(horizontal: 31.h, vertical: 17.v))]); } 
/// Section Widget
Widget _buildChooseGrid(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 1.h), child: Consumer(builder: (context, ref, _) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 165.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: ref.watch(chooseNotifier).chooseModelObj?.choosegridItemList.length ?? 0, itemBuilder: (context, index) {ChoosegridItemModel model = ref.watch(chooseNotifier).chooseModelObj?.choosegridItemList[index] ?? ChoosegridItemModel(); return ChoosegridItemWidget(model);});})); } 
 }
