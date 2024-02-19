part of 'roomsview_all_notifier.dart';/// Represents the state of RoomsviewAll in the application.

// ignore_for_file: must_be_immutable
class RoomsviewAllState extends Equatable {RoomsviewAllState({this.roomsviewAllModelObj});

RoomsviewAllModel? roomsviewAllModelObj;

@override List<Object?> get props =>  [roomsviewAllModelObj];
RoomsviewAllState copyWith({RoomsviewAllModel? roomsviewAllModelObj}) { return RoomsviewAllState(roomsviewAllModelObj: roomsviewAllModelObj ?? this.roomsviewAllModelObj); } 
 }
