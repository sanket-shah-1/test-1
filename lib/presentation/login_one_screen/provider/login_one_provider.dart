import '../../../core/app_export.dart';import '../models/login_one_model.dart';/// A provider class for the LoginOneScreen.
///
/// This provider manages the state of the LoginOneScreen, including the
/// current loginOneModelObj

// ignore_for_file: must_be_immutable
class LoginOneProvider extends ChangeNotifier {TextEditingController userNameController = TextEditingController();

TextEditingController passwordController = TextEditingController();

LoginOneModel loginOneModelObj = LoginOneModel();

@override void dispose() { super.dispose(); userNameController.dispose(); passwordController.dispose(); } 
 }
