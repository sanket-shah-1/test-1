import '../../../core/app_export.dart';import '../models/window_tab_container_model.dart';/// A provider class for the WindowTabContainerScreen.
///
/// This provider manages the state of the WindowTabContainerScreen, including the
/// current windowTabContainerModelObj

// ignore_for_file: must_be_immutable
class WindowTabContainerProvider extends ChangeNotifier {WindowTabContainerModel windowTabContainerModelObj = WindowTabContainerModel();

@override void dispose() { super.dispose(); } 
 }
