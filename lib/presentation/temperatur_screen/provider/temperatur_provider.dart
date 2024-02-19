import '../../../core/app_export.dart';import '../models/temperatur_model.dart';/// A provider class for the TemperaturScreen.
///
/// This provider manages the state of the TemperaturScreen, including the
/// current temperaturModelObj

// ignore_for_file: must_be_immutable
class TemperaturProvider extends ChangeNotifier {TemperaturModel temperaturModelObj = TemperaturModel();

@override void dispose() { super.dispose(); } 
 }
