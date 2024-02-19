import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/living_room_model.dart';part 'living_room_state.dart';final livingRoomNotifier = StateNotifierProvider<LivingRoomNotifier, LivingRoomState>((ref) => LivingRoomNotifier(LivingRoomState(isSelectedSwitch: false, isSelectedSwitch1: false, isSelectedSwitch2: false, isSelectedSwitch3: false, isSelectedSwitch4: false, isSelectedSwitch5: false, livingRoomModelObj: LivingRoomModel())));
/// A notifier that manages the state of a LivingRoom according to the event that is dispatched to it.
class LivingRoomNotifier extends StateNotifier<LivingRoomState> {LivingRoomNotifier(LivingRoomState state) : super(state);

void changeSwitchBox1(bool value) { state = state.copyWith(isSelectedSwitch: value); } 
void changeSwitchBox2(bool value) { state = state.copyWith(isSelectedSwitch1: value); } 
void changeSwitchBox3(bool value) { state = state.copyWith(isSelectedSwitch2: value); } 
void changeSwitchBox4(bool value) { state = state.copyWith(isSelectedSwitch3: value); } 
void changeSwitchBox5(bool value) { state = state.copyWith(isSelectedSwitch4: value); } 
void changeSwitchBox6(bool value) { state = state.copyWith(isSelectedSwitch5: value); } 
 }
