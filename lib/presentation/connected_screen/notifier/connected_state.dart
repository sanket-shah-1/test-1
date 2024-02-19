part of 'connected_notifier.dart';/// Represents the state of Connected in the application.

// ignore_for_file: must_be_immutable
class ConnectedState extends Equatable {ConnectedState({this.finishedCanBeUsed = false, this.connectedModelObj});

ConnectedModel? connectedModelObj;

bool finishedCanBeUsed;

@override List<Object?> get props =>  [finishedCanBeUsed, connectedModelObj];
ConnectedState copyWith({bool? finishedCanBeUsed, ConnectedModel? connectedModelObj, }) { return ConnectedState(finishedCanBeUsed: finishedCanBeUsed ?? this.finishedCanBeUsed, connectedModelObj: connectedModelObj ?? this.connectedModelObj); } 
 }
