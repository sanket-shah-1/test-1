import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'roomsviewall_item_model.dart';/// This class defines the variables used in the [roomsview_all_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class RoomsviewAllModel extends Equatable {RoomsviewAllModel({this.roomsviewallItemList = const []});

List<RoomsviewallItemModel> roomsviewallItemList;

RoomsviewAllModel copyWith({List<RoomsviewallItemModel>? roomsviewallItemList}) { return RoomsviewAllModel(roomsviewallItemList: roomsviewallItemList ?? this.roomsviewallItemList); } 
@override List<Object?> get props =>  [roomsviewallItemList];
 }
