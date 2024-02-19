import '../../../core/app_export.dart';import '../models/tv_model.dart';/// A provider class for the TvScreen.
///
/// This provider manages the state of the TvScreen, including the
/// current tvModelObj

// ignore_for_file: must_be_immutable
class TvProvider extends ChangeNotifier {TextEditingController otpController = TextEditingController();

TvModel tvModelObj = TvModel();

@override void dispose() { super.dispose(); } 
 }
