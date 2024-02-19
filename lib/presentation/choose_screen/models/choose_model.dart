import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'choosegrid_item_model.dart';/// This class defines the variables used in the [choose_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class ChooseModel extends Equatable {ChooseModel({this.choosegridItemList = const []});

List<ChoosegridItemModel> choosegridItemList;

ChooseModel copyWith({List<ChoosegridItemModel>? choosegridItemList}) { return ChooseModel(choosegridItemList: choosegridItemList ?? this.choosegridItemList); } 
@override List<Object?> get props =>  [choosegridItemList];
 }
