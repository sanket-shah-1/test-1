part of 'living_room_notifier.dart';/// Represents the state of LivingRoom in the application.

// ignore_for_file: must_be_immutable
class LivingRoomState extends Equatable {LivingRoomState({this.isSelectedSwitch = false, this.isSelectedSwitch1 = false, this.isSelectedSwitch2 = false, this.isSelectedSwitch3 = false, this.isSelectedSwitch4 = false, this.isSelectedSwitch5 = false, this.livingRoomModelObj});

LivingRoomModel? livingRoomModelObj;

bool isSelectedSwitch;

bool isSelectedSwitch1;

bool isSelectedSwitch2;

bool isSelectedSwitch3;

bool isSelectedSwitch4;

bool isSelectedSwitch5;

@override List<Object?> get props =>  [isSelectedSwitch, isSelectedSwitch1, isSelectedSwitch2, isSelectedSwitch3, isSelectedSwitch4, isSelectedSwitch5, livingRoomModelObj];
LivingRoomState copyWith({bool? isSelectedSwitch, bool? isSelectedSwitch1, bool? isSelectedSwitch2, bool? isSelectedSwitch3, bool? isSelectedSwitch4, bool? isSelectedSwitch5, LivingRoomModel? livingRoomModelObj, }) { return LivingRoomState(isSelectedSwitch: isSelectedSwitch ?? this.isSelectedSwitch, isSelectedSwitch1: isSelectedSwitch1 ?? this.isSelectedSwitch1, isSelectedSwitch2: isSelectedSwitch2 ?? this.isSelectedSwitch2, isSelectedSwitch3: isSelectedSwitch3 ?? this.isSelectedSwitch3, isSelectedSwitch4: isSelectedSwitch4 ?? this.isSelectedSwitch4, isSelectedSwitch5: isSelectedSwitch5 ?? this.isSelectedSwitch5, livingRoomModelObj: livingRoomModelObj ?? this.livingRoomModelObj); } 
 }
