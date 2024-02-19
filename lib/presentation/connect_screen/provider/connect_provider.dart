import '../../../core/app_export.dart';import '../models/connect_model.dart';/// A provider class for the ConnectScreen.
///
/// This provider manages the state of the ConnectScreen, including the
/// current connectModelObj

// ignore_for_file: must_be_immutable
class ConnectProvider extends ChangeNotifier {ConnectModel connectModelObj = ConnectModel();

@override void dispose() { super.dispose(); } 
 }
