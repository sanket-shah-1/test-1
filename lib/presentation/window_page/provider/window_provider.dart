import '../../../core/app_export.dart';import '../models/window_model.dart';/// A provider class for the WindowPage.
///
/// This provider manages the state of the WindowPage, including the
/// current windowModelObj

// ignore_for_file: must_be_immutable
class WindowProvider extends ChangeNotifier {WindowModel windowModelObj = WindowModel();

@override void dispose() { super.dispose(); } 
 }
