import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'historylist_item_model.dart';/// This class defines the variables used in the [history_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class HistoryModel extends Equatable {HistoryModel({this.historylistItemList = const []});

List<HistorylistItemModel> historylistItemList;

HistoryModel copyWith({List<HistorylistItemModel>? historylistItemList}) { return HistoryModel(historylistItemList: historylistItemList ?? this.historylistItemList); } 
@override List<Object?> get props =>  [historylistItemList];
 }
