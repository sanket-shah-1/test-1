part of 'signup_notifier.dart';/// Represents the state of Signup in the application.

// ignore_for_file: must_be_immutable
class SignupState extends Equatable {SignupState({this.nameController, this.emailController, this.signupModelObj});

TextEditingController? nameController;

TextEditingController? emailController;

SignupModel? signupModelObj;

@override List<Object?> get props =>  [nameController, emailController, signupModelObj];
SignupState copyWith({TextEditingController? nameController, TextEditingController? emailController, SignupModel? signupModelObj, }) { return SignupState(nameController: nameController ?? this.nameController, emailController: emailController ?? this.emailController, signupModelObj: signupModelObj ?? this.signupModelObj); } 
 }
