import '../../../core/app_export.dart';import '../models/kitchen_room_model.dart';/// A provider class for the KitchenRoomScreen.
///
/// This provider manages the state of the KitchenRoomScreen, including the
/// current kitchenRoomModelObj

// ignore_for_file: must_be_immutable
class KitchenRoomProvider extends ChangeNotifier {KitchenRoomModel kitchenRoomModelObj = KitchenRoomModel();

bool isSelectedSwitch = false;

bool isSelectedSwitch1 = false;

bool isSelectedSwitch2 = false;

bool isSelectedSwitch3 = false;

@override void dispose() { super.dispose(); } 
void changeSwitchBox1(bool value) { isSelectedSwitch = value; notifyListeners(); } 
void changeSwitchBox2(bool value) { isSelectedSwitch1 = value; notifyListeners(); } 
void changeSwitchBox3(bool value) { isSelectedSwitch2 = value; notifyListeners(); } 
void changeSwitchBox4(bool value) { isSelectedSwitch3 = value; notifyListeners(); } 
 }
