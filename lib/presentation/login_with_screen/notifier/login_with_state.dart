part of 'login_with_notifier.dart';/// Represents the state of LoginWith in the application.

// ignore_for_file: must_be_immutable
class LoginWithState extends Equatable {LoginWithState({this.loginWithModelObj});

LoginWithModel? loginWithModelObj;

@override List<Object?> get props =>  [loginWithModelObj];
LoginWithState copyWith({LoginWithModel? loginWithModelObj}) { return LoginWithState(loginWithModelObj: loginWithModelObj ?? this.loginWithModelObj); } 
 }
