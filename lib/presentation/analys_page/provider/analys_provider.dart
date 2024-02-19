import '../../../core/app_export.dart';import '../models/analys_model.dart';/// A provider class for the AnalysPage.
///
/// This provider manages the state of the AnalysPage, including the
/// current analysModelObj

// ignore_for_file: must_be_immutable
class AnalysProvider extends ChangeNotifier {AnalysModel analysModelObj = AnalysModel();

@override void dispose() { super.dispose(); } 
 }
