import '../../../core/app_export.dart';import '../models/family_access_model.dart';import '../models/familyaccess_item_model.dart';/// A provider class for the FamilyAccessScreen.
///
/// This provider manages the state of the FamilyAccessScreen, including the
/// current familyAccessModelObj

// ignore_for_file: must_be_immutable
class FamilyAccessProvider extends ChangeNotifier {FamilyAccessModel familyAccessModelObj = FamilyAccessModel();

@override void dispose() { super.dispose(); } 
 }
