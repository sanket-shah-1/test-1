import '../../../core/app_export.dart';import '../models/select_analys_model.dart';import '../models/selectanalysgrid_item_model.dart';/// A provider class for the SelectAnalysBottomsheet.
///
/// This provider manages the state of the SelectAnalysBottomsheet, including the
/// current selectAnalysModelObj

// ignore_for_file: must_be_immutable
class SelectAnalysProvider extends ChangeNotifier {SelectAnalysModel selectAnalysModelObj = SelectAnalysModel();

@override void dispose() { super.dispose(); } 
 }
