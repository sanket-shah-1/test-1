import '../../../core/app_export.dart';import '../models/connecting_model.dart';/// A provider class for the ConnectingScreen.
///
/// This provider manages the state of the ConnectingScreen, including the
/// current connectingModelObj

// ignore_for_file: must_be_immutable
class ConnectingProvider extends ChangeNotifier {ConnectingModel connectingModelObj = ConnectingModel();

@override void dispose() { super.dispose(); } 
 }
