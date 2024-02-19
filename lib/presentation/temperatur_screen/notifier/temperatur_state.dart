part of 'temperatur_notifier.dart';/// Represents the state of Temperatur in the application.

// ignore_for_file: must_be_immutable
class TemperaturState extends Equatable {TemperaturState({this.temperaturModelObj});

TemperaturModel? temperaturModelObj;

@override List<Object?> get props =>  [temperaturModelObj];
TemperaturState copyWith({TemperaturModel? temperaturModelObj}) { return TemperaturState(temperaturModelObj: temperaturModelObj ?? this.temperaturModelObj); } 
 }
