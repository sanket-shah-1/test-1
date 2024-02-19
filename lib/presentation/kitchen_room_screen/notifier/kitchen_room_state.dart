part of 'kitchen_room_notifier.dart';/// Represents the state of KitchenRoom in the application.

// ignore_for_file: must_be_immutable
class KitchenRoomState extends Equatable {KitchenRoomState({this.isSelectedSwitch = false, this.isSelectedSwitch1 = false, this.isSelectedSwitch2 = false, this.isSelectedSwitch3 = false, this.kitchenRoomModelObj});

KitchenRoomModel? kitchenRoomModelObj;

bool isSelectedSwitch;

bool isSelectedSwitch1;

bool isSelectedSwitch2;

bool isSelectedSwitch3;

@override List<Object?> get props =>  [isSelectedSwitch, isSelectedSwitch1, isSelectedSwitch2, isSelectedSwitch3, kitchenRoomModelObj];
KitchenRoomState copyWith({bool? isSelectedSwitch, bool? isSelectedSwitch1, bool? isSelectedSwitch2, bool? isSelectedSwitch3, KitchenRoomModel? kitchenRoomModelObj, }) { return KitchenRoomState(isSelectedSwitch: isSelectedSwitch ?? this.isSelectedSwitch, isSelectedSwitch1: isSelectedSwitch1 ?? this.isSelectedSwitch1, isSelectedSwitch2: isSelectedSwitch2 ?? this.isSelectedSwitch2, isSelectedSwitch3: isSelectedSwitch3 ?? this.isSelectedSwitch3, kitchenRoomModelObj: kitchenRoomModelObj ?? this.kitchenRoomModelObj); } 
 }
