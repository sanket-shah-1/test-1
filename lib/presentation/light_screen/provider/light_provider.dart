import '../../../core/app_export.dart';import '../models/light_model.dart';import '../models/lightgrid_item_model.dart';import '../models/lightlist_item_model.dart';/// A provider class for the LightScreen.
///
/// This provider manages the state of the LightScreen, including the
/// current lightModelObj

// ignore_for_file: must_be_immutable
class LightProvider extends ChangeNotifier {LightModel lightModelObj = LightModel();

@override void dispose() { super.dispose(); } 
 }
