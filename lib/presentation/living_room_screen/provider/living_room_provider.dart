import '../../../core/app_export.dart';import '../models/living_room_model.dart';/// A provider class for the LivingRoomScreen.
///
/// This provider manages the state of the LivingRoomScreen, including the
/// current livingRoomModelObj

// ignore_for_file: must_be_immutable
class LivingRoomProvider extends ChangeNotifier {LivingRoomModel livingRoomModelObj = LivingRoomModel();

bool isSelectedSwitch = false;

bool isSelectedSwitch1 = false;

bool isSelectedSwitch2 = false;

bool isSelectedSwitch3 = false;

bool isSelectedSwitch4 = false;

bool isSelectedSwitch5 = false;

@override void dispose() { super.dispose(); } 
void changeSwitchBox1(bool value) { isSelectedSwitch = value; notifyListeners(); } 
void changeSwitchBox2(bool value) { isSelectedSwitch1 = value; notifyListeners(); } 
void changeSwitchBox3(bool value) { isSelectedSwitch2 = value; notifyListeners(); } 
void changeSwitchBox4(bool value) { isSelectedSwitch3 = value; notifyListeners(); } 
void changeSwitchBox5(bool value) { isSelectedSwitch4 = value; notifyListeners(); } 
void changeSwitchBox6(bool value) { isSelectedSwitch5 = value; notifyListeners(); } 
 }
