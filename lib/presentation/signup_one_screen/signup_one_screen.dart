import '../../core/app_export.dart';import '../../core/utils/validation_functions.dart';import 'notifier/signup_one_notifier.dart';class SignupOneScreen extends ConsumerStatefulWidget {const SignupOneScreen({Key? key}) : super(key: key);

@override SignupOneScreenState createState() =>  SignupOneScreenState();
 }

// ignore_for_file: must_be_immutable
class SignupOneScreenState extends ConsumerState<SignupOneScreen> {GlobalKey<FormState> _formKey = GlobalKey<FormState>();

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, resizeToAvoidBottomInset: false, body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom), child: Form(key: _formKey, child: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 19.v), child: Column(children: [SizedBox(height: 38.v), CustomImageView(imagePath: ImageConstant.imgRectangle3699x311, height: 99.v, width: 311.h, radius: BorderRadius.circular(24.h)), SizedBox(height: 41.v), Opacity(opacity: 0.8, child: Text("lbl_sign_up".tr, style: CustomTextStyles.titleMediumBold_1)), SizedBox(height: 22.v), Opacity(opacity: 0.8, child: Container(width: 262.h, margin: EdgeInsets.symmetric(horizontal: 24.h), child: Text("msg_lorem_ipsum_dolor2".tr, maxLines: 3, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.labelMediumGray900Bold.copyWith(height: 1.80)))), SizedBox(height: 10.v), Container(width: 311.h, child: Consumer(builder: (context, ref, _) {return TextFormField(focusNode: FocusNode(), autofocus: true, controller: ref.watch(signupOneNotifier).phoneNumberController, style: theme.textTheme.titleSmall!, keyboardType: TextInputType.phone, decoration: InputDecoration(hintText: "lbl_phone_number".tr, hintStyle: theme.textTheme.titleSmall!, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.gray50, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 19.v)), validator: (value) {if (!isValidPhone(value)) {return "err_msg_please_enter_valid_phone_number".tr;} return null;});})), SizedBox(height: 12.v), Container(width: 311.h, child: Consumer(builder: (context, ref, _) {return TextFormField(focusNode: FocusNode(), autofocus: true, controller: ref.watch(signupOneNotifier).passwordController, style: theme.textTheme.titleSmall!, textInputAction: TextInputAction.done, keyboardType: TextInputType.visiblePassword, obscureText: true, decoration: InputDecoration(hintText: "lbl_password".tr, hintStyle: theme.textTheme.titleSmall!, enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), border: OutlineInputBorder(borderRadius: BorderRadius.circular(12.h), borderSide: BorderSide.none), filled: true, fillColor: appTheme.gray50, isDense: true, contentPadding: EdgeInsets.symmetric(horizontal: 30.h, vertical: 19.v)), validator: (value) {if (value == null || (!isValidPassword(value, isRequired: true))) {return "err_msg_please_enter_valid_password".tr;} return null;});})), SizedBox(height: 13.v), Opacity(opacity: 0.6, child: Container(width: 243.h, margin: EdgeInsets.only(left: 34.h, right: 33.h), child: Text("msg_by_signing_up_you".tr, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: CustomTextStyles.labelMediumGray900.copyWith(height: 1.80)))), Spacer(), _buildFourRow(context), SizedBox(height: 20.v), Row(mainAxisAlignment: MainAxisAlignment.center, children: [Opacity(opacity: 0.6, child: Text("msg_already_registered".tr, style: CustomTextStyles.labelLargeGray900Bold)), Text("lbl_sign_in".tr, style: CustomTextStyles.labelLargeCyan30002)])]))))))); } 
/// Section Widget
Widget _buildFourRow(BuildContext context) { return Row(mainAxisSize: MainAxisSize.min, children: [Expanded(child: Container(width: 236.h, height: 60.v, decoration: BoxDecoration(borderRadius: BorderRadius.circular(14.h), gradient: LinearGradient(begin: Alignment(-0.26, -0.31), end: Alignment(1.14, 1.51), colors: [appTheme.cyan30002, theme.colorScheme.primary])), child: ElevatedButton(style: ElevatedButton.styleFrom(backgroundColor: Colors.transparent, side: BorderSide.none, shape: RoundedRectangleBorder(borderRadius: BorderRadius.zero), padding: EdgeInsets.zero, elevation: 0), onPressed: () {}, child: Text("lbl_signup2".tr, style: CustomTextStyles.bodyLargeWhiteA700)))), CustomImageView(imagePath: ImageConstant.imgArrowDown, height: 8.v, width: 4.h, margin: EdgeInsets.only(left: 34.h, top: 26.v, bottom: 25.v))]); } 
 }
