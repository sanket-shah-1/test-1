import '../../../core/app_export.dart';import '../models/signup_one_model.dart';/// A provider class for the SignupOneScreen.
///
/// This provider manages the state of the SignupOneScreen, including the
/// current signupOneModelObj

// ignore_for_file: must_be_immutable
class SignupOneProvider extends ChangeNotifier {TextEditingController phoneNumberController = TextEditingController();

TextEditingController passwordController = TextEditingController();

SignupOneModel signupOneModelObj = SignupOneModel();

@override void dispose() { super.dispose(); phoneNumberController.dispose(); passwordController.dispose(); } 
 }
