import '../../../core/app_export.dart';import '../models/roomsview_all_model.dart';import '../models/roomsviewall_item_model.dart';/// A provider class for the RoomsviewAllScreen.
///
/// This provider manages the state of the RoomsviewAllScreen, including the
/// current roomsviewAllModelObj

// ignore_for_file: must_be_immutable
class RoomsviewAllProvider extends ChangeNotifier {RoomsviewAllModel roomsviewAllModelObj = RoomsviewAllModel();

@override void dispose() { super.dispose(); } 
 }
