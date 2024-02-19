import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'selectanalysgrid_item_model.dart';/// This class defines the variables used in the [select_analys_bottomsheet],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class SelectAnalysModel extends Equatable {SelectAnalysModel({this.selectanalysgridItemList = const []});

List<SelectanalysgridItemModel> selectanalysgridItemList;

SelectAnalysModel copyWith({List<SelectanalysgridItemModel>? selectanalysgridItemList}) { return SelectAnalysModel(selectanalysgridItemList: selectanalysgridItemList ?? this.selectanalysgridItemList); } 
@override List<Object?> get props =>  [selectanalysgridItemList];
 }
