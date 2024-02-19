part of 'history_notifier.dart';/// Represents the state of History in the application.

// ignore_for_file: must_be_immutable
class HistoryState extends Equatable {HistoryState({this.historyModelObj});

HistoryModel? historyModelObj;

@override List<Object?> get props =>  [historyModelObj];
HistoryState copyWith({HistoryModel? historyModelObj}) { return HistoryState(historyModelObj: historyModelObj ?? this.historyModelObj); } 
 }
