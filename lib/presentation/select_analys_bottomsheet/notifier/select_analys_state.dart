part of 'select_analys_notifier.dart';/// Represents the state of SelectAnalys in the application.

// ignore_for_file: must_be_immutable
class SelectAnalysState extends Equatable {SelectAnalysState({this.selectAnalysModelObj});

SelectAnalysModel? selectAnalysModelObj;

@override List<Object?> get props =>  [selectAnalysModelObj];
SelectAnalysState copyWith({SelectAnalysModel? selectAnalysModelObj}) { return SelectAnalysState(selectAnalysModelObj: selectAnalysModelObj ?? this.selectAnalysModelObj); } 
 }
