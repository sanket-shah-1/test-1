part of 'connect_notifier.dart';/// Represents the state of Connect in the application.

// ignore_for_file: must_be_immutable
class ConnectState extends Equatable {ConnectState({this.connectModelObj});

ConnectModel? connectModelObj;

@override List<Object?> get props =>  [connectModelObj];
ConnectState copyWith({ConnectModel? connectModelObj}) { return ConnectState(connectModelObj: connectModelObj ?? this.connectModelObj); } 
 }
