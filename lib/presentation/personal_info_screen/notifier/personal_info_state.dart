part of 'personal_info_notifier.dart';/// Represents the state of PersonalInfo in the application.

// ignore_for_file: must_be_immutable
class PersonalInfoState extends Equatable {PersonalInfoState({this.nameController, this.nameController1, this.homeinfoController, this.personalInfoModelObj});

TextEditingController? nameController;

TextEditingController? nameController1;

TextEditingController? homeinfoController;

PersonalInfoModel? personalInfoModelObj;

@override List<Object?> get props =>  [nameController, nameController1, homeinfoController, personalInfoModelObj];
PersonalInfoState copyWith({TextEditingController? nameController, TextEditingController? nameController1, TextEditingController? homeinfoController, PersonalInfoModel? personalInfoModelObj, }) { return PersonalInfoState(nameController: nameController ?? this.nameController, nameController1: nameController1 ?? this.nameController1, homeinfoController: homeinfoController ?? this.homeinfoController, personalInfoModelObj: personalInfoModelObj ?? this.personalInfoModelObj); } 
 }
