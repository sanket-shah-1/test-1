part of 'home_notifier.dart';/// Represents the state of Home in the application.

// ignore_for_file: must_be_immutable
class HomeState extends Equatable {HomeState({this.homeModelObj});

HomeModel? homeModelObj;

@override List<Object?> get props =>  [homeModelObj];
HomeState copyWith({HomeModel? homeModelObj}) { return HomeState(homeModelObj: homeModelObj ?? this.homeModelObj); } 
 }
