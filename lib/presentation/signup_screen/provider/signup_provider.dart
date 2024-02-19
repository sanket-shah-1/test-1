import '../../../core/app_export.dart';import '../models/signup_model.dart';/// A provider class for the SignupScreen.
///
/// This provider manages the state of the SignupScreen, including the
/// current signupModelObj

// ignore_for_file: must_be_immutable
class SignupProvider extends ChangeNotifier {TextEditingController nameController = TextEditingController();

TextEditingController emailController = TextEditingController();

SignupModel signupModelObj = SignupModel();

@override void dispose() { super.dispose(); nameController.dispose(); emailController.dispose(); } 
 }
