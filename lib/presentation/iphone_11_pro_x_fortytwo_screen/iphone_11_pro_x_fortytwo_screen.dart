import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_subtitle_one.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/iphone_11_pro_x_fortytwo_model.dart';import 'provider/iphone_11_pro_x_fortytwo_provider.dart';class Iphone11ProXFortytwoScreen extends StatefulWidget {const Iphone11ProXFortytwoScreen({Key? key}) : super(key: key);

@override Iphone11ProXFortytwoScreenState createState() =>  Iphone11ProXFortytwoScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => Iphone11ProXFortytwoProvider(), child: Iphone11ProXFortytwoScreen()); } 
 }
class Iphone11ProXFortytwoScreenState extends State<Iphone11ProXFortytwoScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(top: 42.v), child: Opacity(opacity: 0.6, child: Container(width: 311.h, margin: EdgeInsets.symmetric(horizontal: 32.h), child: Text("msg_lorem_ipsum_dolor3".tr, maxLines: 28, overflow: TextOverflow.ellipsis, style: theme.textTheme.bodyMedium!.copyWith(height: 1.71)))))))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitleOne(text: "lbl_security".tr, margin: EdgeInsets.fromLTRB(32.h, 16.v, 32.h, 12.v))]); } 
/// Navigates to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
