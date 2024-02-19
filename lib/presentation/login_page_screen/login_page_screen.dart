import '../../core/app_export.dart';import '../../core/utils/validation_functions.dart';import '../../domain/facebookauth/facebook_auth_helper.dart';import '../../domain/googleauth/google_auth_helper.dart';import '../../widgets/app_bar/appbar_leading_image.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/login_page_model.dart';import 'provider/login_page_provider.dart';class LoginPageScreen extends StatefulWidget {const LoginPageScreen({Key? key}) : super(key: key);

@override LoginPageScreenState createState() =>  LoginPageScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => LoginPageProvider(), child: LoginPageScreen()); } 
 }

// ignore_for_file: must_be_immutable
class LoginPageScreenState extends State<LoginPageScreen> {GlobalKey<FormState> _formKey = GlobalKey<FormState>();

@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.gray50, resizeToAvoidBottomInset: false, body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom), child: Form(key: _formKey, child: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(vertical: 8.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Padding(padding: EdgeInsets.only(left: 8.h), child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [_buildAppBar(context), SizedBox(height: 29.v), Text("lbl_login_sd".tr, style: CustomTextStyles.displaySmallABeeZeeOnPrimary)])), Expanded(child: Container(padding: EdgeInsets.all(12.h), child: Column(children: [SizedBox(height: 60.v), Container(width: 343.h, margin: EdgeInsets.symmetric(horizontal: 4.h), child: Selector<LoginPageProvider, TextEditingController?>(selector: (context, provider) => provider.emailController, builder: (context, emailController, child) {return TextFormField(focusNode: FocusNode(), autofocus: true, controller: emailController, validator: (value) {if (value == null || (!isValidEmail(value, isRequired: true))) {return "err_msg_please_enter_valid_email".tr;} return null;}, keyboardType: TextInputType.emailAddress, decoration: InputDecoration(labelText: "lbl_email".tr, labelStyle: CustomTextStyles.bodyMediumABeeZeePrimaryContainer, hintText: "lbl_email".tr, hintStyle: CustomTextStyles.bodyMediumABeeZeePrimaryContainer, suffixIcon: Container(margin: EdgeInsets.symmetric(horizontal: 21.h), child: CustomImageView(imagePath: ImageConstant.imgCheckmark, height: 24.adaptSize, width: 24.adaptSize)), suffixIconConstraints: BoxConstraints(maxHeight: 64.v), filled: true, fillColor: appTheme.whiteA700, isDense: true, contentPadding: EdgeInsets.fromLTRB(20.h, 31.v, 20.h, 15.v)), style: CustomTextStyles.bodyMediumABeeZeePrimaryContainer);})), SizedBox(height: 8.v), Container(width: 343.h, margin: EdgeInsets.symmetric(horizontal: 4.h), child: Selector<LoginPageProvider, TextEditingController?>(selector: (context, provider) => provider.passwordController, builder: (context, passwordController, child) {return TextFormField(focusNode: FocusNode(), autofocus: true, controller: passwordController, style: CustomTextStyles.bodyMediumABeeZeeSecondaryContainer, textInputAction: TextInputAction.done, keyboardType: TextInputType.visiblePassword, obscureText: true, decoration: InputDecoration(hintText: "lbl_password".tr, hintStyle: CustomTextStyles.bodyMediumABeeZeeSecondaryContainer, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(4.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.whiteA700, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 20.h, vertical: 23.v)), validator: (value) {if (value == null || (!isValidPassword(value, isRequired: true))) {return "err_msg_please_enter_valid_password".tr;} return null;});})), SizedBox(height: 14.v), Align(alignment: Alignment.centerRight, child: Padding(padding: EdgeInsets.only(right: 4.h), child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [Padding(padding: EdgeInsets.only(top: 4.v, bottom: 2.v), child: Text("msg_forgot_your_password".tr, style: CustomTextStyles.bodyMediumABeeZeeOnPrimary)), CustomImageView(imagePath: ImageConstant.imgArrowRightRed700, height: 24.adaptSize, width: 24.adaptSize, margin: EdgeInsets.only(left: 3.h))]))), Spacer(), Container(width: SizeUtils.width, height: 48.v, margin: EdgeInsets.only(right: 8.h), child: ElevatedButton(style: ElevatedButton.styleFrom(backgroundColor: appTheme.red700, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.h)), visualDensity: const VisualDensity(vertical: -4, horizontal: -4), padding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 15.v)), onPressed: () {}, child: Text("lbl_login2".tr, style: CustomTextStyles.bodyMediumABeeZeeWhiteA700))), SizedBox(height: 99.v), Text("msg_or_login_with_social".tr, style: CustomTextStyles.bodyMediumABeeZeeOnPrimary)])))]))))), bottomNavigationBar: _buildSocialButtons(context))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(height: 24.v, leadingWidth: double.maxFinite, leading: AppbarLeadingImage(imagePath: ImageConstant.imgChevron, margin: EdgeInsets.fromLTRB(15.h, 4.v, 351.h, 4.v), onTap: () {onTapChevron(context);})); } 
/// Section Widget
Widget _buildSocialButtons(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 122.h, right: 87.h, bottom: 57.v), child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [Container(height: 24.v, width: 23.h, margin: EdgeInsets.symmetric(vertical: 20.v), decoration: AppDecoration.outlineOnPrimaryContainer1.copyWith(borderRadius: BorderRadiusStyle.roundedBorder24), child: CustomImageView(imagePath: ImageConstant.imgGoogle, height: 24.v, width: 23.h, alignment: Alignment.center, onTap: () {onTapImgGoogle(context);})), Container(height: 64.v, width: 92.h, margin: EdgeInsets.only(left: 50.h), padding: EdgeInsets.symmetric(horizontal: 34.h, vertical: 20.v), decoration: AppDecoration.outlineOnPrimaryContainer1.copyWith(borderRadius: BorderRadiusStyle.roundedBorder24), child: CustomImageView(imagePath: ImageConstant.imgFacebook, height: 24.adaptSize, width: 24.adaptSize, alignment: Alignment.center, onTap: () {onTapImgFacebook(context);}))])); } 
/// Navigates to the previous screen.
onTapChevron(BuildContext context) { NavigatorService.goBack(); } 
onTapImgGoogle(BuildContext context) async  { await GoogleAuthHelper().googleSignInProcess().then((googleUser) {if (googleUser != null) {} else {ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('user data is empty')));}}).catchError((onError) {ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(onError.toString())));}); } 
onTapImgFacebook(BuildContext context) async  { await FacebookAuthHelper().facebookSignInProcess().then((facebookUser) {}).catchError((onError) {ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(onError.toString())));}); } 
 }
