part of 'window_notifier.dart';/// Represents the state of Window in the application.

// ignore_for_file: must_be_immutable
class WindowState extends Equatable {WindowState({this.windowModelObj});

WindowModel? windowModelObj;

@override List<Object?> get props =>  [windowModelObj];
WindowState copyWith({WindowModel? windowModelObj}) { return WindowState(windowModelObj: windowModelObj ?? this.windowModelObj); } 
 }
