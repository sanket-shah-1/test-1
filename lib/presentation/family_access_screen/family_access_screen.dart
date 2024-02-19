import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_title.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/family_access_model.dart';import 'models/familyaccess_item_model.dart';import 'provider/family_access_provider.dart';import 'widgets/familyaccess_item_widget.dart';class FamilyAccessScreen extends StatefulWidget {const FamilyAccessScreen({Key? key}) : super(key: key);

@override FamilyAccessScreenState createState() =>  FamilyAccessScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => FamilyAccessProvider(), child: FamilyAccessScreen()); } 
 }
class FamilyAccessScreenState extends State<FamilyAccessScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: Padding(padding: EdgeInsets.only(left: 31.h, top: 40.v, right: 31.h), child: Consumer<FamilyAccessProvider>(builder: (context, provider, child) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 171.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: provider.familyAccessModelObj.familyaccessItemList.length, itemBuilder: (context, index) {FamilyaccessItemModel model = provider.familyAccessModelObj.familyaccessItemList[index]; return FamilyaccessItemWidget(model);});})))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), title: AppbarTitle(text: "msg_my_family_access".tr, margin: EdgeInsets.only(left: 89.h))); } 
/// Navigates to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
