import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/kitchen_room_model.dart';part 'kitchen_room_state.dart';final kitchenRoomNotifier = StateNotifierProvider<KitchenRoomNotifier, KitchenRoomState>((ref) => KitchenRoomNotifier(KitchenRoomState(isSelectedSwitch: false, isSelectedSwitch1: false, isSelectedSwitch2: false, isSelectedSwitch3: false, kitchenRoomModelObj: KitchenRoomModel())));
/// A notifier that manages the state of a KitchenRoom according to the event that is dispatched to it.
class KitchenRoomNotifier extends StateNotifier<KitchenRoomState> {KitchenRoomNotifier(KitchenRoomState state) : super(state);

void changeSwitchBox1(bool value) { state = state.copyWith(isSelectedSwitch: value); } 
void changeSwitchBox2(bool value) { state = state.copyWith(isSelectedSwitch1: value); } 
void changeSwitchBox3(bool value) { state = state.copyWith(isSelectedSwitch2: value); } 
void changeSwitchBox4(bool value) { state = state.copyWith(isSelectedSwitch3: value); } 
 }
