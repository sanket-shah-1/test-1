import '../../../core/app_export.dart';import '../models/personal_info_model.dart';/// A provider class for the PersonalInfoScreen.
///
/// This provider manages the state of the PersonalInfoScreen, including the
/// current personalInfoModelObj

// ignore_for_file: must_be_immutable
class PersonalInfoProvider extends ChangeNotifier {TextEditingController nameController = TextEditingController();

TextEditingController nameController1 = TextEditingController();

TextEditingController homeinfoController = TextEditingController();

PersonalInfoModel personalInfoModelObj = PersonalInfoModel();

@override void dispose() { super.dispose(); nameController.dispose(); nameController1.dispose(); homeinfoController.dispose(); } 
 }
