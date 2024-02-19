import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'lightgrid_item_model.dart';import 'lightlist_item_model.dart';/// This class defines the variables used in the [light_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class LightModel extends Equatable {LightModel({this.lightlistItemList = const [], this.lightgridItemList = const []});

List<LightlistItemModel> lightlistItemList;

List<LightgridItemModel> lightgridItemList;

LightModel copyWith({List<LightlistItemModel>? lightlistItemList, List<LightgridItemModel>? lightgridItemList, }) { return LightModel(lightlistItemList: lightlistItemList ?? this.lightlistItemList, lightgridItemList: lightgridItemList ?? this.lightgridItemList); } 
@override List<Object?> get props =>  [lightlistItemList, lightgridItemList];
 }
