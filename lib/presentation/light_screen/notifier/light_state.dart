part of 'light_notifier.dart';/// Represents the state of Light in the application.

// ignore_for_file: must_be_immutable
class LightState extends Equatable {LightState({this.lightModelObj});

LightModel? lightModelObj;

@override List<Object?> get props =>  [lightModelObj];
LightState copyWith({LightModel? lightModelObj}) { return LightState(lightModelObj: lightModelObj ?? this.lightModelObj); } 
 }
