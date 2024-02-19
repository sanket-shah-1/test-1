import '../../../core/app_export.dart';import '../models/connected_model.dart';/// A provider class for the ConnectedScreen.
///
/// This provider manages the state of the ConnectedScreen, including the
/// current connectedModelObj

// ignore_for_file: must_be_immutable
class ConnectedProvider extends ChangeNotifier {ConnectedModel connectedModelObj = ConnectedModel();

bool finishedCanBeUsed = false;

@override void dispose() { super.dispose(); } 
void changeCheckBox1(bool value) { finishedCanBeUsed = value; notifyListeners(); } 
 }
