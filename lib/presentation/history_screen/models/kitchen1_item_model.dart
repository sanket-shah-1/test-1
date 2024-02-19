import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';/// This class is used in the [kitchen1_item_widget] screen.

// ignore_for_file: must_be_immutable
class Kitchen1ItemModel extends Equatable {Kitchen1ItemModel({this.kitchen, this.isSelected}) { kitchen = kitchen ?? "Kitchen"; isSelected = isSelected ?? false; }

String? kitchen;

bool? isSelected;

Kitchen1ItemModel copyWith({String? kitchen, bool? isSelected, }) { return Kitchen1ItemModel(kitchen: kitchen ?? this.kitchen, isSelected: isSelected ?? this.isSelected); } 
@override List<Object?> get props =>  [kitchen, isSelected];
 }
