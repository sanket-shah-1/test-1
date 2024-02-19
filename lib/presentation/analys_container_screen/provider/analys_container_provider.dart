import '../../../core/app_export.dart';import '../models/analys_container_model.dart';/// A provider class for the AnalysContainerScreen.
///
/// This provider manages the state of the AnalysContainerScreen, including the
/// current analysContainerModelObj

// ignore_for_file: must_be_immutable
class AnalysContainerProvider extends ChangeNotifier {AnalysContainerModel analysContainerModelObj = AnalysContainerModel();

@override void dispose() { super.dispose(); } 
 }
