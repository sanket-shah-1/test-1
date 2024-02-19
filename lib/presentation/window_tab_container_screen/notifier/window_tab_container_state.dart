part of 'window_tab_container_notifier.dart';/// Represents the state of WindowTabContainer in the application.

// ignore_for_file: must_be_immutable
class WindowTabContainerState extends Equatable {WindowTabContainerState({this.windowTabContainerModelObj});

WindowTabContainerModel? windowTabContainerModelObj;

@override List<Object?> get props =>  [windowTabContainerModelObj];
WindowTabContainerState copyWith({WindowTabContainerModel? windowTabContainerModelObj}) { return WindowTabContainerState(windowTabContainerModelObj: windowTabContainerModelObj ?? this.windowTabContainerModelObj); } 
 }
