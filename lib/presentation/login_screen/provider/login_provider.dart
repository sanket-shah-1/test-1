import '../../../core/app_export.dart';import '../models/login_model.dart';/// A provider class for the LoginScreen.
///
/// This provider manages the state of the LoginScreen, including the
/// current loginModelObj

// ignore_for_file: must_be_immutable
class LoginProvider extends ChangeNotifier {LoginModel loginModelObj = LoginModel();

@override void dispose() { super.dispose(); } 
 }
