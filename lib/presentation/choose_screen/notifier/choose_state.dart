part of 'choose_notifier.dart';/// Represents the state of Choose in the application.

// ignore_for_file: must_be_immutable
class ChooseState extends Equatable {ChooseState({this.chooseModelObj});

ChooseModel? chooseModelObj;

@override List<Object?> get props =>  [chooseModelObj];
ChooseState copyWith({ChooseModel? chooseModelObj}) { return ChooseState(chooseModelObj: chooseModelObj ?? this.chooseModelObj); } 
 }
