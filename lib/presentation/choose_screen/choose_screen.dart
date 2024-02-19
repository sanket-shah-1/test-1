import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_subtitle_three.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/choose_model.dart';import 'models/choosegrid_item_model.dart';import 'provider/choose_provider.dart';import 'widgets/choosegrid_item_widget.dart';class ChooseScreen extends StatefulWidget {const ChooseScreen({Key? key}) : super(key: key);

@override ChooseScreenState createState() =>  ChooseScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => ChooseProvider(), child: ChooseScreen()); } 
 }
class ChooseScreenState extends State<ChooseScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 31.h), child: Column(children: [SizedBox(height: 32.v), Opacity(opacity: 0.8, child: SizedBox(width: 181.h, child: Text("msg_choose_your_room".tr, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.headlineMediumRegular))), SizedBox(height: 58.v), _buildChooseGrid(context)])))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(actions: [AppbarSubtitleThree(text: "lbl_skip".tr, margin: EdgeInsets.symmetric(horizontal: 31.h, vertical: 17.v))]); } 
/// Section Widget
Widget _buildChooseGrid(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 1.h), child: Consumer<ChooseProvider>(builder: (context, provider, child) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 165.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: provider.chooseModelObj.choosegridItemList.length, itemBuilder: (context, index) {ChoosegridItemModel model = provider.chooseModelObj.choosegridItemList[index]; return ChoosegridItemWidget(model);});})); } 
 }
