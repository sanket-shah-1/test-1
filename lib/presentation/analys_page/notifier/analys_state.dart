part of 'analys_notifier.dart';/// Represents the state of Analys in the application.

// ignore_for_file: must_be_immutable
class AnalysState extends Equatable {AnalysState({this.analysModelObj});

AnalysModel? analysModelObj;

@override List<Object?> get props =>  [analysModelObj];
AnalysState copyWith({AnalysModel? analysModelObj}) { return AnalysState(analysModelObj: analysModelObj ?? this.analysModelObj); } 
 }
