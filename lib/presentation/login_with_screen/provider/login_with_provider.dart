import '../../../core/app_export.dart';import '../models/login_with_model.dart';/// A provider class for the LoginWithScreen.
///
/// This provider manages the state of the LoginWithScreen, including the
/// current loginWithModelObj

// ignore_for_file: must_be_immutable
class LoginWithProvider extends ChangeNotifier {LoginWithModel loginWithModelObj = LoginWithModel();

@override void dispose() { super.dispose(); } 
 }
