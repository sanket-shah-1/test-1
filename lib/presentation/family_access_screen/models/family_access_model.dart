import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import 'familyaccess_item_model.dart';/// This class defines the variables used in the [family_access_screen],
/// and is typically used to hold data that is passed between different parts of the application.

// ignore_for_file: must_be_immutable
class FamilyAccessModel extends Equatable {FamilyAccessModel({this.familyaccessItemList = const []});

List<FamilyaccessItemModel> familyaccessItemList;

FamilyAccessModel copyWith({List<FamilyaccessItemModel>? familyaccessItemList}) { return FamilyAccessModel(familyaccessItemList: familyaccessItemList ?? this.familyaccessItemList); } 
@override List<Object?> get props =>  [familyaccessItemList];
 }
