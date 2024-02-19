part of 'analys_container_notifier.dart';/// Represents the state of AnalysContainer in the application.

// ignore_for_file: must_be_immutable
class AnalysContainerState extends Equatable {AnalysContainerState({this.analysContainerModelObj});

AnalysContainerModel? analysContainerModelObj;

@override List<Object?> get props =>  [analysContainerModelObj];
AnalysContainerState copyWith({AnalysContainerModel? analysContainerModelObj}) { return AnalysContainerState(analysContainerModelObj: analysContainerModelObj ?? this.analysContainerModelObj); } 
 }
