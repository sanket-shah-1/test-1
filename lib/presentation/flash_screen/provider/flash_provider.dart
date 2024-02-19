import '../../../core/app_export.dart';import '../models/flash_model.dart';/// A provider class for the FlashScreen.
///
/// This provider manages the state of the FlashScreen, including the
/// current flashModelObj

// ignore_for_file: must_be_immutable
class FlashProvider extends ChangeNotifier {FlashModel flashModelObj = FlashModel();

@override void dispose() { super.dispose(); } 
 }
