part of 'signup_one_notifier.dart';/// Represents the state of SignupOne in the application.

// ignore_for_file: must_be_immutable
class SignupOneState extends Equatable {SignupOneState({this.phoneNumberController, this.passwordController, this.signupOneModelObj});

TextEditingController? phoneNumberController;

TextEditingController? passwordController;

SignupOneModel? signupOneModelObj;

@override List<Object?> get props =>  [phoneNumberController, passwordController, signupOneModelObj];
SignupOneState copyWith({TextEditingController? phoneNumberController, TextEditingController? passwordController, SignupOneModel? signupOneModelObj, }) { return SignupOneState(phoneNumberController: phoneNumberController ?? this.phoneNumberController, passwordController: passwordController ?? this.passwordController, signupOneModelObj: signupOneModelObj ?? this.signupOneModelObj); } 
 }
