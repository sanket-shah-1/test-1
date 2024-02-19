import '../../../core/app_export.dart';import '../models/choose_model.dart';import '../models/choosegrid_item_model.dart';/// A provider class for the ChooseScreen.
///
/// This provider manages the state of the ChooseScreen, including the
/// current chooseModelObj

// ignore_for_file: must_be_immutable
class ChooseProvider extends ChangeNotifier {ChooseModel chooseModelObj = ChooseModel();

@override void dispose() { super.dispose(); } 
 }
