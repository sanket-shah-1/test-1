part of 'family_access_notifier.dart';/// Represents the state of FamilyAccess in the application.

// ignore_for_file: must_be_immutable
class FamilyAccessState extends Equatable {FamilyAccessState({this.familyAccessModelObj});

FamilyAccessModel? familyAccessModelObj;

@override List<Object?> get props =>  [familyAccessModelObj];
FamilyAccessState copyWith({FamilyAccessModel? familyAccessModelObj}) { return FamilyAccessState(familyAccessModelObj: familyAccessModelObj ?? this.familyAccessModelObj); } 
 }
