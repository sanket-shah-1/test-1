import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'homelist_item_model.dart';/// This class defines the variables used in the [home_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class HomeModel extends Equatable {HomeModel({this.homelistItemList = const []});

List<HomelistItemModel> homelistItemList;

HomeModel copyWith({List<HomelistItemModel>? homelistItemList}) { return HomeModel(homelistItemList: homelistItemList ?? this.homelistItemList); } 
@override List<Object?> get props =>  [homelistItemList];
 }
