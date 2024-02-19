import '../../../core/app_export.dart';import '../models/login_page_model.dart';/// A provider class for the LoginPageScreen.
///
/// This provider manages the state of the LoginPageScreen, including the
/// current loginPageModelObj

// ignore_for_file: must_be_immutable
class LoginPageProvider extends ChangeNotifier {TextEditingController emailController = TextEditingController();

TextEditingController passwordController = TextEditingController();

LoginPageModel loginPageModelObj = LoginPageModel();

@override void dispose() { super.dispose(); emailController.dispose(); passwordController.dispose(); } 
 }
